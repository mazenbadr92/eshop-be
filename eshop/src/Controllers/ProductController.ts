import { Get, JsonController, Param, QueryParams } from "routing-controllers";
import { Service } from "typedi";
import { ProductManagement } from "../Management/ProductManagement";
import { Product } from "../TYPEOrmEngine/DatabaseModels/Product";

@JsonController("product")
@Service()
export class ProductController {
    private productManagement: ProductManagement;
    constructor() {
        this.productManagement = ProductManagement.getInstance();
    }

    @Get("/")
    public async getAllProducts(): Promise<Product[]> {
        try {
            return await this.productManagement.getAllProducts();
        } catch (error ) {

        }
    }

    @Get("/:ids")
    public async getProductsByIds(@Param('ids') ids: string): Promise<Product[]> {
        try {
            return await this.productManagement.getProductsByIds(ids.split(',').map((id) => +id));
        } catch (error ) {

        }
    }
}