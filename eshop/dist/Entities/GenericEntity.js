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
exports.GenericEntity = void 0;
class GenericEntity {
    constructor(type, alias, connection, manager) {
        this.type = type;
        this.connection = connection;
        this.alias = alias;
        this.manager = manager;
    }
    list() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.connection.getRepository(this.type).createQueryBuilder(this.alias);
        });
    }
    createOrUpdate(model) {
        return __awaiter(this, void 0, void 0, function* () {
            let manager = this.manager;
            if (!manager) {
                manager = this.connection.manager;
            }
            let createdModel = yield manager.getRepository(this.type).save(model);
            return createdModel;
        });
    }
    delete(modelId) {
        return __awaiter(this, void 0, void 0, function* () {
            let manager = this.manager;
            if (!manager) {
                manager = this.connection.manager;
            }
            return yield manager.getRepository(this.type).delete(modelId);
        });
    }
}
exports.GenericEntity = GenericEntity;
//# sourceMappingURL=GenericEntity.js.map