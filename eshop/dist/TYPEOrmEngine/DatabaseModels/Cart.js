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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cart = void 0;
const schema = __importStar(require("typeorm"));
const typeorm_1 = require("typeorm");
const Constants_1 = require("../../Constants");
const CartDetails_1 = require("./CartDetails");
const User_1 = require("./User");
let Cart = class Cart {
};
__decorate([
    schema.PrimaryGeneratedColumn()
], Cart.prototype, "id", void 0);
__decorate([
    schema.Column({
        type: 'int'
    })
], Cart.prototype, "user_id", void 0);
__decorate([
    schema.OneToMany(type => User_1.User, user => user.carts)
], Cart.prototype, "user", void 0);
__decorate([
    schema.Column({
        type: 'tinyint'
    })
], Cart.prototype, "is_ordered", void 0);
__decorate([
    schema.OneToMany(type => CartDetails_1.CartDetails, cartDetails => cartDetails.cart)
], Cart.prototype, "cartDetails", void 0);
Cart = __decorate([
    (0, typeorm_1.Entity)(Constants_1.Constants.ENTITIES.cart)
], Cart);
exports.Cart = Cart;
//# sourceMappingURL=Cart.js.map