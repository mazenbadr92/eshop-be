import * as schema from 'typeorm';
import { Entity } from 'typeorm';
import { Constants } from '../../Constants';
import { User } from './User';

@Entity(Constants.ENTITIES.userAddress)
export class UserAddress {
    @schema.PrimaryGeneratedColumn()
    id: number;

    @schema.Column({
        type: 'int'
    })
    user_id: number;

    @schema.ManyToOne(type => User, user => user.userAddresses)
    user: User

    @schema.Column({
        type: 'text'
    })
    address: string;

    @schema.Column({
        type: 'varchar'
    })
    city: string;

    @schema.Column({
        type: 'varchar'
    })
    country: string;

    @schema.Column({
        type: 'varchar'
    })
    postal_code: string;
}