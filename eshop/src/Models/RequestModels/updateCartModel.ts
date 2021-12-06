export class UpdateCartModel {
    cartId: number;
    cartDetailId: number;
    productId: number;
    quantitiy: number;
    userId?: number;
    public constructor(init?: Partial<UpdateCartModel>) {
		Object.assign(this, init);
	}
}