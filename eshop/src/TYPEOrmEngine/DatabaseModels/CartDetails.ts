import * as schema from 'typeorm';
import { Entity } from 'typeorm';
import { Constants } from '../../Constants';
import { Cart } from './Cart';
import { Product } from './Product';
import { User } from './User';

@Entity(Constants.ENTITIES.cartDetails)
export class CartDetails {
    @schema.PrimaryGeneratedColumn()
    id: number;

    @schema.Column({
        type: 'int'
    })
    cart_id: number;

    @schema.ManyToOne(type => Cart, cart => cart.cartDetails)
    @schema.JoinColumn({name: "cart_id"})
    cart?: Cart;

    @schema.Column({
        type: 'int'
    })
    product_id: number;

    @schema.OneToOne(type => Product)
    @schema.JoinColumn({name: "product_id"})
    product?: Product;

    @schema.Column({
        type: 'int'
    })
    quantity: number;

}