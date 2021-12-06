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
exports.CartManaement = void 0;
const CartEntity_1 = require("../Entities/CartEntity");
const Cart_1 = require("../TYPEOrmEngine/DatabaseModels/Cart");
class CartManaement {
    constructor() {
        this.cartEntity = CartEntity_1.CartEntity.getInstance();
    }
    static getInstance() {
        if (!this._instance) {
            this._instance = new CartManaement();
        }
        return this._instance;
    }
    getCartById(cartId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.cartEntity.getCartById(cartId);
        });
    }
    getUserCart(userId, isOrdered) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.cartEntity.getUserCart(userId, isOrdered);
        });
    }
    addProductToCart(updateCartModel) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!updateCartModel.cartDetailId && !updateCartModel.cartId) {
                const newlyCreatedCart = yield this.createNewCart(updateCartModel.userId);
                updateCartModel.cartId = newlyCreatedCart.id;
            }
            yield this.cartEntity.updateCartDetailQuantity(updateCartModel);
            return yield this.getCartById(updateCartModel.cartId);
        });
    }
    deleteCartDetailAndGetUpdatedCart(cartDetailId, cartId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.cartEntity.deleteCartDetail(+cartDetailId);
            return yield this.cartEntity.getCartById(+cartId);
        });
    }
    createNewCart(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const cart = new Cart_1.Cart();
            cart.user_id = userId;
            return yield this.cartEntity.createNewCart(cart);
        });
    }
}
exports.CartManaement = CartManaement;
//# sourceMappingURL=CartManagement.js.map