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
exports.ProductEntity = void 0;
const Constants_1 = require("../Constants");
const Product_1 = require("../TYPEOrmEngine/DatabaseModels/Product");
const MYSQLConnectionManager_1 = require("../TYPEOrmEngine/MYSQLConnectionManager");
const BaseEntity_1 = require("./BaseEntity");
const GenericEntity_1 = require("./GenericEntity");
class ProductEntity extends BaseEntity_1.BaseEntity {
    constructor() {
        super();
    }
    static getInstance() {
        if (!this._instance) {
            this._instance = new ProductEntity();
        }
        return this._instance;
    }
    getProducts() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.connection = yield MYSQLConnectionManager_1.ConnectionManager.getConnection();
                const query = (yield new GenericEntity_1.GenericEntity(Product_1.Product, Constants_1.Constants.ENTITIES.product, this.connection).list())
                    .leftJoinAndSelect("product.productReview", "productReview")
                    .leftJoinAndSelect("productReview.user", "user");
                return yield query.getMany();
            }
            catch (error) {
                console.error(error);
            }
        });
    }
    getProductsByIds(ids) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.connection = yield MYSQLConnectionManager_1.ConnectionManager.getConnection();
                const query = (yield new GenericEntity_1.GenericEntity(Product_1.Product, Constants_1.Constants.ENTITIES.product, this.connection).list())
                    .leftJoinAndSelect("product.productReview", "productReview")
                    .andWhere("product.id in (:ids)")
                    .setParameter("ids", ids);
                return query.getMany();
            }
            catch (error) {
                console.error(error);
            }
        });
    }
}
exports.ProductEntity = ProductEntity;
//# sourceMappingURL=ProductEntity.js.map