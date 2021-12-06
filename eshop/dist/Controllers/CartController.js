"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
exports.CartController = void 0;
const routing_controllers_1 = require("routing-controllers");
const typedi_1 = require("typedi");
const CartManagement_1 = require("../Management/CartManagement");
let CartController = class CartController {
    constructor() {
        this.cartManagement = CartManagement_1.CartManaement.getInstance();
    }
    getUserCart(userId, isOrdered) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.cartManagement.getUserCart(userId, isOrdered);
            }
            catch (error) {
            }
        });
    }
    addProductToCart(updateCartModel) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.cartManagement.addProductToCart(updateCartModel);
            }
            catch (error) {
            }
        });
    }
    deleteCartItem(cartDetailId, cartId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.cartManagement.deleteCartDetailAndGetUpdatedCart(cartDetailId, cartId);
            }
            catch (error) {
            }
        });
    }
};
__decorate([
    (0, routing_controllers_1.Get)("/:userId/:isOrdered"),
    __param(0, (0, routing_controllers_1.Param)('userId')),
    __param(1, (0, routing_controllers_1.Param)('isOrdered'))
], CartController.prototype, "getUserCart", null);
__decorate([
    (0, routing_controllers_1.Put)("/"),
    __param(0, (0, routing_controllers_1.Body)())
], CartController.prototype, "addProductToCart", null);
__decorate([
    (0, routing_controllers_1.Delete)("/:cartDetailId/:cartId"),
    __param(0, (0, routing_controllers_1.Param)('cartDetailId')),
    __param(1, (0, routing_controllers_1.Param)('cartId'))
], CartController.prototype, "deleteCartItem", null);
CartController = __decorate([
    (0, routing_controllers_1.JsonController)("cart"),
    (0, typedi_1.Service)()
], CartController);
exports.CartController = CartController;
//# sourceMappingURL=CartController.js.map