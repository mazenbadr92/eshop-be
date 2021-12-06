import * as schema from 'typeorm';
import { Entity } from 'typeorm';
import { Constants } from '../../Constants';
import { CartDetails } from './CartDetails';
import { User } from './User';

@Entity(Constants.ENTITIES.cart)
export class Cart {
    @schema.PrimaryGeneratedColumn()
    id?: number;

    @schema.Column({
        type: 'int'
    })
    user_id: number;

    @schema.OneToMany(type => User, user => user.carts)
    user?: User;

    @schema.Column({
        type: 'tinyint'
    })
    is_ordered?: boolean;

    @schema.OneToMany(type => CartDetails, cartDetails => cartDetails.cart)
    cartDetails?: CartDetails;

}