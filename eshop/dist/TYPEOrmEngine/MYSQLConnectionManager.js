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
exports.ConnectionManager = void 0;
const orm = __importStar(require("typeorm"));
const ApplicationSettings_1 = require("../utilities/ApplicationServices/ApplicationSettings");
class ConnectionManager {
    static getConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.connectionInstance) {
                this.connectionInstance = yield this.Start();
            }
            return this.connectionInstance;
        });
    }
    static Start() {
        return __awaiter(this, void 0, void 0, function* () {
            let config = ApplicationSettings_1.ApplicationSettings.Current;
            let connection;
            if (orm.getConnectionManager().has("default")) {
                connection = orm.getConnection("default");
                if (connection.isConnected) {
                    return connection;
                }
            }
            connection = (yield orm.createConnection({
                type: "mysql",
                host: config.mysqlDatabaseSettings.host,
                username: config.mysqlDatabaseSettings.username,
                password: config.mysqlDatabaseSettings.password,
                database: config.mysqlDatabaseSettings.name,
                maxQueryExecutionTime: 1000000000,
                entities: [
                    __dirname + "/DatabaseModels/*.js",
                    __dirname + "/DatabaseModels/*.*.js",
                    __dirname + "/DatabaseModels/**/*.js",
                ],
                synchronize: config.mysqlDatabaseSettings.autoSchemaSync,
                logging: ["error"]
            }).catch((error) => {
                console.error(error);
            }));
            return connection;
        });
    }
}
exports.ConnectionManager = ConnectionManager;
//# sourceMappingURL=MYSQLConnectionManager.js.map