import { SelectQueryBuilder } from "typeorm";
import { Constants } from "../Constants";
import { UpdateCartModel } from "../Models/RequestModels/updateCartModel";
import { Cart } from "../TYPEOrmEngine/DatabaseModels/Cart";
import { CartDetails } from "../TYPEOrmEngine/DatabaseModels/CartDetails";
import { Product } from "../TYPEOrmEngine/DatabaseModels/Product";
import { ConnectionManager } from "../TYPEOrmEngine/MYSQLConnectionManager";
import { BaseEntity } from "./BaseEntity";
import { GenericEntity } from "./GenericEntity";

export class CartEntity extends BaseEntity {

    private static _instance: CartEntity;
    private constructor() {
        super();

    }

    public static getInstance(): CartEntity {
        if (!this._instance) {
            this._instance = new CartEntity();
        }
        return this._instance;
    }

    public async getProducts(): Promise<Product[]> {
        try {
            const query = (await new GenericEntity(Product, Constants.ENTITIES.product, this.connection).list())
            .leftJoinAndSelect("product.productReview", "productReview");
            return query.getMany();
        } catch (error) {
            console.error(error);
        }
    }
    
    public async getCartById(id: number): Promise<Cart> {
        try {
            this.connection = await ConnectionManager.getConnection();
            const query = (await new GenericEntity(Cart, Constants.ENTITIES.cart, this.connection).list())
            .leftJoinAndSelect("cart.cartDetails", "cartDetails")
            .leftJoinAndSelect("cartDetails.product", "product")
            .andWhere("cart.id = :id")
            .setParameter("id", id);
            return query.getOne();
        } catch (error) {
            console.error(error);
        }
    }
    
    public async getUserCart(userId: number, isOrdered: boolean): Promise<Cart[]> {
        try {
            this.connection = await ConnectionManager.getConnection();
            const query = (await new GenericEntity(Cart, Constants.ENTITIES.cart, this.connection).list())
            .leftJoinAndSelect("cart.cartDetails", "cartDetails")
            .leftJoinAndSelect("cartDetails.product", "product")
            .andWhere("cart.user_id = :userId")
            .andWhere("cart.is_ordered = :is_ordered")
            .setParameter("userId", userId)
            .setParameter("is_ordered", isOrdered)
            return query.getMany();
        } catch (error) {
            console.error(error);
        }
    }
    public async getCartItemByDetailId(cartDetailId: number) {
        try {
            this.connection = await ConnectionManager.getConnection();
            const query = (await new GenericEntity(CartDetails, Constants.ENTITIES.cartDetails, this.connection).list())
            .andWhere("cart_details.id = :cartDetailsId")
            .setParameter("cartDetailsId", cartDetailId)
            return query.getMany();
        } catch (error) {
            console.error(error);
        }
    }
    
    public async updateCartDetailQuantity(updateCartModel: UpdateCartModel): Promise<CartDetails> {
        try {
            this.connection = await ConnectionManager.getConnection();
            const cartDetailed = new CartDetails();
            cartDetailed.id= updateCartModel.cartDetailId;
            cartDetailed.quantity= updateCartModel.quantitiy;
            cartDetailed.cart_id= updateCartModel.cartId;
            cartDetailed.product_id= updateCartModel.productId;
            return (await new GenericEntity(CartDetails, Constants.ENTITIES.cartDetails, this.connection).createOrUpdate(cartDetailed))
        } catch (error) {
            console.error(error);
        }
    }
    
    public async deleteCartDetail(cartDetailId: number) {
        try {
            this.connection = await ConnectionManager.getConnection();
            return await await new GenericEntity(CartDetails, Constants.ENTITIES.cartDetails, this.connection).delete(cartDetailId)
        } catch (error) {
            console.error(error);
        }
    }

    public async createNewCart(cartEntityModel: Cart): Promise<Cart> {
        this.connection = await ConnectionManager.getConnection();
        return await new GenericEntity(Cart, Constants.ENTITIES.cart, this.connection).createOrUpdate(cartEntityModel);
    }


}