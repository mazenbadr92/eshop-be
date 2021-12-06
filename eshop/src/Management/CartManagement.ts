import { CartEntity } from "../Entities/CartEntity";
import { UpdateCartModel } from "../Models/RequestModels/updateCartModel";
import { Cart } from "../TYPEOrmEngine/DatabaseModels/Cart";
import { CartDetails } from "../TYPEOrmEngine/DatabaseModels/CartDetails";

export class CartManaement {
    private static _instance: CartManaement;
    private cartEntity: CartEntity;
    private constructor() {
        this.cartEntity = CartEntity.getInstance();
    }

    public static getInstance(): CartManaement {
        if (!this._instance) {
            this._instance = new CartManaement();
        }
        return this._instance;
    }

    public async getCartById(cartId: number): Promise <Cart> {
        return await this.cartEntity.getCartById(cartId);
    }

    public async getUserCart(userId: number, isOrdered: boolean): Promise<Cart[]> {
        return await this.cartEntity.getUserCart(userId, isOrdered)
    }

    public async addProductToCart(updateCartModel: UpdateCartModel): Promise<Cart> {
        if (!updateCartModel.cartDetailId && !updateCartModel.cartId) {
            const newlyCreatedCart = await this.createNewCart(updateCartModel.userId);
            updateCartModel.cartId = newlyCreatedCart.id;
        }
        await this.cartEntity.updateCartDetailQuantity(updateCartModel);
        return await this.getCartById(updateCartModel.cartId);
    }
    
    public async deleteCartDetailAndGetUpdatedCart(cartDetailId: number, cartId: number): Promise<Cart> {
        await this.cartEntity.deleteCartDetail(+cartDetailId)
        return await this.cartEntity.getCartById(+cartId);
    }

    private async createNewCart(userId: number): Promise<Cart> {
        const cart: Cart =  new Cart();
        cart.user_id = userId;
        return await this.cartEntity.createNewCart(cart);
    }
}