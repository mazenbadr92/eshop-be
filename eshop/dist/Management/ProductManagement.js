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
exports.ProductManagement = void 0;
const ProductEntity_1 = require("../Entities/ProductEntity");
const ProductMapper_1 = require("../Mappers/ProductMapper");
class ProductManagement {
    constructor() { }
    static getInstance() {
        if (!this._instance) {
            this._instance = new ProductManagement();
            this.productEntity = ProductEntity_1.ProductEntity.getInstance();
        }
        return this._instance;
    }
    getAllProducts() {
        return __awaiter(this, void 0, void 0, function* () {
            const products = yield ProductManagement.productEntity.getProducts();
            return ProductMapper_1.ProductMapper.getProductWithRating(products);
        });
    }
    getProductsByIds(ids) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield ProductManagement.productEntity.getProductsByIds(ids);
        });
    }
}
exports.ProductManagement = ProductManagement;
//# sourceMappingURL=ProductManagement.js.map