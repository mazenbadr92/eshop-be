import * as schema from 'typeorm';
import { Entity } from 'typeorm';
import { Constants } from '../../Constants';
import { User } from './User';

@Entity(Constants.ENTITIES.userEmail)
export class UserEmail {
    @schema.PrimaryGeneratedColumn()
    id: number;

    @schema.Column({
        type: 'int'
    })
    user_id: number;

    @schema.ManyToOne(type => User, user => user.userEmails)
    user: User

    @schema.Column({
        type: 'varchar'
    })
    email: string;
}