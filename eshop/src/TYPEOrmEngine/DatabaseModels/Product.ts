import * as schema from 'typeorm';
import { Entity } from 'typeorm';
import { Constants } from '../../Constants';
import { ProductReview } from './ProductReview';

@Entity(Constants.ENTITIES.product)
export class Product {
    @schema.PrimaryGeneratedColumn()
    id: number;

    @schema.Column({
        type: 'varchar'
    })
    name: string;

    @schema.Column({
        type: 'text'
    })
    description: string;

    @schema.Column({
        type: 'int'
    })
    quantity: number;
    
    @schema.Column({
        type: 'decimal'
    })
    price: number;

    @schema.Column({
        type: 'text'
    })
    imageURL: string;

    @schema.Column({
        type: 'decimal'
    })
    rating: number;

    @schema.Column({
        type: 'timestamp'
    })
    created_at: Date;

    @schema.Column({
        type: 'timestamp'
    })
    modified_at: Date;

    @schema.OneToMany(type => ProductReview, productReview => productReview.product)
    productReview: ProductReview[];
}