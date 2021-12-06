import * as schema from 'typeorm';
import { Entity } from 'typeorm';
import { Constants } from '../../Constants';
import { User } from './User';

@Entity(Constants.ENTITIES.userPhone)
export class UserPhone {
    @schema.PrimaryGeneratedColumn()
    id: number;

    @schema.Column({
        type: 'int'
    })
    user_id: number;

    @schema.ManyToOne(type => User, user => user.userPhones)
    user: User

    @schema.Column({
        type: 'varchar'
    })
    phone: string;

    @schema.Column({
        type: 'varchar'
    })
    phone_type: string;
}