import { ProductEntity } from "../Entities/ProductEntity";
import { ProductMapper } from "../Mappers/ProductMapper";
import { Product } from "../TYPEOrmEngine/DatabaseModels/Product";

export class ProductManagement {
    private static _instance: ProductManagement;
    private static productEntity: ProductEntity;
    private constructor() {}

    public static getInstance() {
        if (!this._instance) {
            this._instance = new ProductManagement();
            this.productEntity = ProductEntity.getInstance();
        }
        return this._instance;
    }

    public async getAllProducts(): Promise<Product[]> {
        const products = await ProductManagement.productEntity.getProducts();
        return ProductMapper.getProductWithRating(products);
    }

    public async getProductsByIds(ids: number[]): Promise<Product[]> {
        return await ProductManagement.productEntity.getProductsByIds(ids)
    }
}