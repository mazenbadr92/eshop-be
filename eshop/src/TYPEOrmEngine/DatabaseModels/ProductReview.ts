import * as schema from 'typeorm';
import { Entity } from 'typeorm';
import { Constants } from '../../Constants';
import { Product } from './Product';
import { User } from './User';

@Entity(Constants.ENTITIES.productReview)
export class ProductReview {
    @schema.PrimaryGeneratedColumn()
    id: number;

    @schema.Column({
        type: 'int'
    })
    product_id: number;

    @schema.ManyToOne(type => User, user => user.productReviews)
    @schema.JoinColumn({name: "user_id"})
    user: User;

    @schema.Column({
        type: 'decimal'
    })
    rating: number;

    @schema.Column({
        type: 'text'
    })
    review: string;

    @schema.Column({
        type: 'timestamp'
    })
    created_at: Date;

    @schema.Column({
        type: 'timestamp'
    })
    modified_at: Date;

    @schema.ManyToOne(type => Product, product => product.productReview)
    @schema.JoinColumn({name: "product_id"})
    product: Product;
}