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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationSettings = void 0;
const MySQLConnectionSettings_1 = require("./MySQLConnectionSettings");
const config = __importStar(require("../../config.json"));
const mysqlConfig = __importStar(require("../../ormconfig.json"));
class ApplicationSettings {
    //get current application settings depending on environment variable
    static get Current() {
        let settings = ApplicationSettings.GetSettings();
        return settings;
    }
    static isProduction() {
        return process.env.NODE_ENV && process.env.NODE_ENV !== 'development' ? true : false;
    }
    static GetSettings() {
        var settings = new ApplicationSettings();
        try {
            const currentSettings = config[process.env.NODE_ENV || 'development'];
            //load general settings
            settings.port = currentSettings.port;
            // load database info
            settings.mysqlDatabaseSettings = new MySQLConnectionSettings_1.MySQLConnectionSettings({
                host: mysqlConfig.host,
                name: mysqlConfig.database,
                username: mysqlConfig.username,
                password: mysqlConfig.password,
                type: mysqlConfig.type,
                autoSchemaSync: mysqlConfig.synchronize,
            });
        }
        catch (error) {
            throw TypeError('Invalid configuration path or bad configuration file schema, Please use the sample config file.');
        }
        return settings;
    }
}
exports.ApplicationSettings = ApplicationSettings;
//# sourceMappingURL=ApplicationSettings.js.map