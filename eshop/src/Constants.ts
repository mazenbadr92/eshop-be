export class Constants {
    public static readonly ENTITIES = {
        cart: 'cart',
        cartDetails: 'cart_details',
        product: 'product',
        productReview: 'product_review',
        user: 'user',
        userAddress: 'user_address',
        userEmail: 'user_email',
        userPhone: 'user_phone'

    }

    public static readonly FORBIDDEN_USER_FIELDS = [
        'username',
        'password'
    ]
}