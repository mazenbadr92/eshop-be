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
exports.ProductController = void 0;
const routing_controllers_1 = require("routing-controllers");
const typedi_1 = require("typedi");
const ProductManagement_1 = require("../Management/ProductManagement");
let ProductController = class ProductController {
    constructor() {
        this.productManagement = ProductManagement_1.ProductManagement.getInstance();
    }
    getAllProducts() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.productManagement.getAllProducts();
            }
            catch (error) {
            }
        });
    }
    getProductsByIds(ids) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.productManagement.getProductsByIds(ids.split(',').map((id) => +id));
            }
            catch (error) {
            }
        });
    }
};
__decorate([
    (0, routing_controllers_1.Get)("/")
], ProductController.prototype, "getAllProducts", null);
__decorate([
    (0, routing_controllers_1.Get)("/:ids"),
    __param(0, (0, routing_controllers_1.Param)('ids'))
], ProductController.prototype, "getProductsByIds", null);
ProductController = __decorate([
    (0, routing_controllers_1.JsonController)("product"),
    (0, typedi_1.Service)()
], ProductController);
exports.ProductController = ProductController;
//# sourceMappingURL=ProductController.js.map