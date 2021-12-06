"use strict";
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
exports.BaseEntity = void 0;
const MYSQLConnectionManager_1 = require("../TYPEOrmEngine/MYSQLConnectionManager");
class BaseEntity {
    constructor() {
        this.initiateConnection();
    }
    static initiateBaseEntity() {
        if (!this._instace) {
            this._instace = new BaseEntity();
        }
        return this._instace;
    }
    initiateConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            this.connection = yield MYSQLConnectionManager_1.ConnectionManager.getConnection();
        });
    }
}
exports.BaseEntity = BaseEntity;
//# sourceMappingURL=BaseEntity.js.map