"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const server = __importStar(require("routing-controllers"));
require("reflect-metadata");
const dependecyInjection = __importStar(require("typedi"));
const ApplicationSettings_1 = require("./utilities/ApplicationServices/ApplicationSettings");
const AuthorizationChecker_1 = require("./utilities/ApplicationServices/AuthorizationChecker");
const BaseEntity_1 = require("./Entities/BaseEntity");
//get global settings
var settings = ApplicationSettings_1.ApplicationSettings.Current;
// setup routing-controllers to use typedi container.
server.useContainer(dependecyInjection.Container);
//init server
const app = server.createExpressServer({
    authorizationChecker: AuthorizationChecker_1.CustomAuthorizationChecker.validate,
    routePrefix: '/api/',
    defaultErrorHandler: false,
    controllers: [
        __dirname + '/Controllers/*.js'
    ],
    middlewares: [__dirname + '/Middlewares/*.js'],
    interceptors: [__dirname + '/Interceptors/*.js'],
});
if (app.get('env') === 'production') {
    app.set('trust proxy', 1);
}
const bodyParser = require('body-parser');
app.use(bodyParser.json({ limit: '500mb' }));
app.use(bodyParser.urlencoded({ limit: '500mb', extended: true, parameterLimit: 100000 }));
const startServer = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //run server
        app.listen(settings.port);
        const databaseConnectionInstance = BaseEntity_1.BaseEntity.initiateBaseEntity();
        console.log(`eshop api instance is working on ports ${settings.port}`);
    }
    catch (error) {
        console.error(`error occured ${error}`);
        process.exit(1);
    }
});
startServer();
module.exports = app;
//# sourceMappingURL=app.js.map