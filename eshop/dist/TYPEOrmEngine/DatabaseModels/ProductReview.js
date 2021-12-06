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
exports.ProductReview = void 0;
const schema = __importStar(require("typeorm"));
const typeorm_1 = require("typeorm");
const Constants_1 = require("../../Constants");
const Product_1 = require("./Product");
const User_1 = require("./User");
let ProductReview = class ProductReview {
};
__decorate([
    schema.PrimaryGeneratedColumn()
], ProductReview.prototype, "id", void 0);
__decorate([
    schema.Column({
        type: 'int'
    })
], ProductReview.prototype, "product_id", void 0);
__decorate([
    schema.ManyToOne(type => User_1.User, user => user.productReviews),
    schema.JoinColumn({ name: "user_id" })
], ProductReview.prototype, "user", void 0);
__decorate([
    schema.Column({
        type: 'decimal'
    })
], ProductReview.prototype, "rating", void 0);
__decorate([
    schema.Column({
        type: 'text'
    })
], ProductReview.prototype, "review", void 0);
__decorate([
    schema.Column({
        type: 'timestamp'
    })
], ProductReview.prototype, "created_at", void 0);
__decorate([
    schema.Column({
        type: 'timestamp'
    })
], ProductReview.prototype, "modified_at", void 0);
__decorate([
    schema.ManyToOne(type => Product_1.Product, product => product.productReview),
    schema.JoinColumn({ name: "product_id" })
], ProductReview.prototype, "product", void 0);
ProductReview = __decorate([
    (0, typeorm_1.Entity)(Constants_1.Constants.ENTITIES.productReview)
], ProductReview);
exports.ProductReview = ProductReview;
//# sourceMappingURL=ProductReview.js.map