import { Product } from "../TYPEOrmEngine/DatabaseModels/Product";
import { ProductReview } from "../TYPEOrmEngine/DatabaseModels/ProductReview";

export class ProductMapper {
    public static getProductWithRating(products: Product[]): Product[] {
        const productsList: Product[] = [];
        products.forEach((product) => {
            if (product.productReview && product.productReview.length) {
                product.rating = this.calculateProductRating(product.productReview);
            }
            productsList.push(product);
        })
        return productsList;
    }

    private static calculateProductRating(productReview: ProductReview[]): number {
        const sum = productReview.filter(productReview => productReview.rating)
                        .reduce((sum, current) => (+sum) + (+current.rating), 0);
        return sum / productReview.length;
    }
}