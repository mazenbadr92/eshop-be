import { SelectQueryBuilder } from "typeorm";
import { Constants } from "../Constants";
import { ProductMapper } from "../Mappers/ProductMapper";
import { Product } from "../TYPEOrmEngine/DatabaseModels/Product";
import { ConnectionManager } from "../TYPEOrmEngine/MYSQLConnectionManager";
import { BaseEntity } from "./BaseEntity";
import { GenericEntity } from "./GenericEntity";

export class ProductEntity extends BaseEntity {

    private static _instance;
    private constructor() {
        super();

    }

    public static getInstance() {
        if (!this._instance) {
            this._instance = new ProductEntity();
        }
        return this._instance;
    }

    public async getProducts(): Promise<Product[]> {
        try {
            this.connection = await ConnectionManager.getConnection();
            const query = (await new GenericEntity(Product, Constants.ENTITIES.product, this.connection).list())
            .leftJoinAndSelect("product.productReview", "productReview")
            .leftJoinAndSelect("productReview.user", "user", )
            return await query.getMany();
        } catch (error) {
            console.error(error);
        }
    }
    
    public async getProductsByIds(ids: number[]): Promise<Product[]> {
        try {
            this.connection = await ConnectionManager.getConnection();
            const query = (await new GenericEntity(Product, Constants.ENTITIES.product, this.connection).list())
            .leftJoinAndSelect("product.productReview", "productReview")
            .andWhere("product.id in (:ids)")
            .setParameter("ids", ids);
            return query.getMany();
        } catch (error) {
            console.error(error);
        }
    }
}