import * as schema from 'typeorm';
import { Entity } from 'typeorm';
import { Constants } from '../../Constants';
import { Cart } from './Cart';
import { ProductReview } from './ProductReview';
import { UserAddress } from './UserAddress';
import { UserEmail } from './UserEmail';
import { UserPhone } from './UserPhone';

@Entity(Constants.ENTITIES.user)
export class User {
    @schema.PrimaryGeneratedColumn()
    id: number;

    @schema.Column({
        type: 'varchar',
        select: false
    })
    username: string;

    @schema.Column({
        type: 'text',
        select: false
    })
    password: string;

    @schema.Column({
        type: 'varchar'
    })
    first_name: string;

    @schema.Column({
        type: 'varchar'
    })
    last_name: string;

    @schema.Column({
        type: 'timestamp'
    })
    created_at: Date;

    @schema.Column({
        type: 'timestamp'
    })
    modified_at: Date;

    @schema.OneToMany(type => ProductReview, productReview => productReview.user)
    productReviews: ProductReview[];

    @schema.OneToMany(type => Cart, cart => cart.user)
    carts: Cart[];
    
    @schema.OneToMany(type => UserAddress, userAddress => userAddress.user)
    userAddresses: UserAddress[];
    
    @schema.OneToMany(type => UserPhone, userPhone => userPhone.user)
    userPhones: UserPhone[];
    
    @schema.OneToMany(type => UserEmail, userEmail => userEmail.user)
    userEmails: UserEmail[];


}