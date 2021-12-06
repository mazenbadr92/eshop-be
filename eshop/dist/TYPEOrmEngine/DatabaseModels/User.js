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
exports.User = void 0;
const schema = __importStar(require("typeorm"));
const typeorm_1 = require("typeorm");
const Constants_1 = require("../../Constants");
const Cart_1 = require("./Cart");
const ProductReview_1 = require("./ProductReview");
const UserAddress_1 = require("./UserAddress");
const UserEmail_1 = require("./UserEmail");
const UserPhone_1 = require("./UserPhone");
let User = class User {
};
__decorate([
    schema.PrimaryGeneratedColumn()
], User.prototype, "id", void 0);
__decorate([
    schema.Column({
        type: 'varchar',
        select: false
    })
], User.prototype, "username", void 0);
__decorate([
    schema.Column({
        type: 'text',
        select: false
    })
], User.prototype, "password", void 0);
__decorate([
    schema.Column({
        type: 'varchar'
    })
], User.prototype, "first_name", void 0);
__decorate([
    schema.Column({
        type: 'varchar'
    })
], User.prototype, "last_name", void 0);
__decorate([
    schema.Column({
        type: 'timestamp'
    })
], User.prototype, "created_at", void 0);
__decorate([
    schema.Column({
        type: 'timestamp'
    })
], User.prototype, "modified_at", void 0);
__decorate([
    schema.OneToMany(type => ProductReview_1.ProductReview, productReview => productReview.user)
], User.prototype, "productReviews", void 0);
__decorate([
    schema.OneToMany(type => Cart_1.Cart, cart => cart.user)
], User.prototype, "carts", void 0);
__decorate([
    schema.OneToMany(type => UserAddress_1.UserAddress, userAddress => userAddress.user)
], User.prototype, "userAddresses", void 0);
__decorate([
    schema.OneToMany(type => UserPhone_1.UserPhone, userPhone => userPhone.user)
], User.prototype, "userPhones", void 0);
__decorate([
    schema.OneToMany(type => UserEmail_1.UserEmail, userEmail => userEmail.user)
], User.prototype, "userEmails", void 0);
User = __decorate([
    (0, typeorm_1.Entity)(Constants_1.Constants.ENTITIES.user)
], User);
exports.User = User;
//# sourceMappingURL=User.js.map