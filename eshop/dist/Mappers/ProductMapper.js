"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductMapper = void 0;
class ProductMapper {
    static getProductWithRating(products) {
        const productsList = [];
        products.forEach((product) => {
            if (product.productReview && product.productReview.length) {
                product.rating = this.calculateProductRating(product.productReview);
            }
            productsList.push(product);
        });
        return productsList;
    }
    static calculateProductRating(productReview) {
        const sum = productReview.filter(productReview => productReview.rating)
            .reduce((sum, current) => (+sum) + (+current.rating), 0);
        return sum / productReview.length;
    }
}
exports.ProductMapper = ProductMapper;
//# sourceMappingURL=ProductMapper.js.map