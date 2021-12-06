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
exports.CartEntity = void 0;
const Constants_1 = require("../Constants");
const Cart_1 = require("../TYPEOrmEngine/DatabaseModels/Cart");
const CartDetails_1 = require("../TYPEOrmEngine/DatabaseModels/CartDetails");
const Product_1 = require("../TYPEOrmEngine/DatabaseModels/Product");
const MYSQLConnectionManager_1 = require("../TYPEOrmEngine/MYSQLConnectionManager");
const BaseEntity_1 = require("./BaseEntity");
const GenericEntity_1 = require("./GenericEntity");
class CartEntity extends BaseEntity_1.BaseEntity {
    constructor() {
        super();
    }
    static getInstance() {
        if (!this._instance) {
            this._instance = new CartEntity();
        }
        return this._instance;
    }
    getProducts() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const query = (yield new GenericEntity_1.GenericEntity(Product_1.Product, Constants_1.Constants.ENTITIES.product, this.connection).list())
                    .leftJoinAndSelect("product.productReview", "productReview");
                return query.getMany();
            }
            catch (error) {
                console.error(error);
            }
        });
    }
    getCartById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.connection = yield MYSQLConnectionManager_1.ConnectionManager.getConnection();
                const query = (yield new GenericEntity_1.GenericEntity(Cart_1.Cart, Constants_1.Constants.ENTITIES.cart, this.connection).list())
                    .leftJoinAndSelect("cart.cartDetails", "cartDetails")
                    .leftJoinAndSelect("cartDetails.product", "product")
                    .andWhere("cart.id = :id")
                    .setParameter("id", id);
                return query.getOne();
            }
            catch (error) {
                console.error(error);
            }
        });
    }
    getUserCart(userId, isOrdered) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.connection = yield MYSQLConnectionManager_1.ConnectionManager.getConnection();
                const query = (yield new GenericEntity_1.GenericEntity(Cart_1.Cart, Constants_1.Constants.ENTITIES.cart, this.connection).list())
                    .leftJoinAndSelect("cart.cartDetails", "cartDetails")
                    .leftJoinAndSelect("cartDetails.product", "product")
                    .andWhere("cart.user_id = :userId")
                    .andWhere("cart.is_ordered = :is_ordered")
                    .setParameter("userId", userId)
                    .setParameter("is_ordered", isOrdered);
                return query.getMany();
            }
            catch (error) {
                console.error(error);
            }
        });
    }
    getCartItemByDetailId(cartDetailId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.connection = yield MYSQLConnectionManager_1.ConnectionManager.getConnection();
                const query = (yield new GenericEntity_1.GenericEntity(CartDetails_1.CartDetails, Constants_1.Constants.ENTITIES.cartDetails, this.connection).list())
                    .andWhere("cart_details.id = :cartDetailsId")
                    .setParameter("cartDetailsId", cartDetailId);
                return query.getMany();
            }
            catch (error) {
                console.error(error);
            }
        });
    }
    updateCartDetailQuantity(updateCartModel) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.connection = yield MYSQLConnectionManager_1.ConnectionManager.getConnection();
                const cartDetailed = new CartDetails_1.CartDetails();
                cartDetailed.id = updateCartModel.cartDetailId;
                cartDetailed.quantity = updateCartModel.quantitiy;
                cartDetailed.cart_id = updateCartModel.cartId;
                cartDetailed.product_id = updateCartModel.productId;
                return (yield new GenericEntity_1.GenericEntity(CartDetails_1.CartDetails, Constants_1.Constants.ENTITIES.cartDetails, this.connection).createOrUpdate(cartDetailed));
            }
            catch (error) {
                console.error(error);
            }
        });
    }
    deleteCartDetail(cartDetailId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.connection = yield MYSQLConnectionManager_1.ConnectionManager.getConnection();
                return yield yield new GenericEntity_1.GenericEntity(CartDetails_1.CartDetails, Constants_1.Constants.ENTITIES.cartDetails, this.connection).delete(cartDetailId);
            }
            catch (error) {
                console.error(error);
            }
        });
    }
    createNewCart(cartEntityModel) {
        return __awaiter(this, void 0, void 0, function* () {
            this.connection = yield MYSQLConnectionManager_1.ConnectionManager.getConnection();
            return yield new GenericEntity_1.GenericEntity(Cart_1.Cart, Constants_1.Constants.ENTITIES.cart, this.connection).createOrUpdate(cartEntityModel);
        });
    }
}
exports.CartEntity = CartEntity;
//# sourceMappingURL=CartEntity.js.map