import mongoose from "mongoose";

/*export interface Product{
    id: number;
    name: string;
    price: number;
    currency: string;
    image: string;
}*/
const ProductModel = new mongoose.Schema(
    {
        "id":{
            required: true, // like not null
            type: Number,
            unique: true,
            index: true // For better performance
        },
        "name":{
            required: true,
            type: String
        },
        "price":{
            required: true,
            type: Number
        },
        "currency":{
            required: true,
            type: String
        },
        "image":{
            required: true,
            type: String
        }
    }
);

const Product = mongoose.model('Product',ProductModel);

export default Product;
