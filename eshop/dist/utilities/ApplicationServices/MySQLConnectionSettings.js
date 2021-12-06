"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MySQLConnectionSettings = void 0;
const DatabaseInfo_1 = require("./DatabaseInfo");
class MySQLConnectionSettings extends DatabaseInfo_1.DatabaseInfo {
    constructor(init) {
        super();
        if (init) {
            Object.assign(this, init);
        }
    }
}
exports.MySQLConnectionSettings = MySQLConnectionSettings;
//# sourceMappingURL=MySQLConnectionSettings.js.map