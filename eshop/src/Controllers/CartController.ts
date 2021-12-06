import { Body, Delete, Get, JsonController, Param, Put, QueryParams } from "routing-controllers";
import { Service } from "typedi";
import { CartManaement } from "../Management/CartManagement";
import { ProductManagement } from "../Management/ProductManagement";
import { UpdateCartModel } from "../Models/RequestModels/updateCartModel";
import { Cart } from "../TYPEOrmEngine/DatabaseModels/Cart";
import { CartDetails } from "../TYPEOrmEngine/DatabaseModels/CartDetails";

@JsonController("cart")
@Service()
export class CartController {
    private cartManagement: CartManaement;
    constructor() {
        this.cartManagement = CartManaement.getInstance();
    }
    @Get("/:userId/:isOrdered")
    public async getUserCart(@Param('userId') userId: number, @Param('isOrdered') isOrdered: boolean): Promise<Cart[]> {
        try {
            return await this.cartManagement.getUserCart(userId, isOrdered);
        } catch (error ) {

        }
    }
    
    @Put("/")
    public async addProductToCart(@Body() updateCartModel: UpdateCartModel
    ): Promise<Cart> {
        try {
            return await this.cartManagement.addProductToCart(updateCartModel);
        } catch (error ) {

        }
    }
    
    @Delete("/:cartDetailId/:cartId")
    public async deleteCartItem(@Param('cartDetailId') cartDetailId: number, @Param('cartId') cartId: number
    ): Promise<Cart> {
        try {
            return await this.cartManagement.deleteCartDetailAndGetUpdatedCart(cartDetailId, cartId);
        } catch (error ) {

        }
    }
}