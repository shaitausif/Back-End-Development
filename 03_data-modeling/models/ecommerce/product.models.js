import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        description : {
            type : String,
            required : true
        },
        name : {
            type : String,
            required : true
        },
        productImage : {
            // we'll not store the images in the database. although we can but it will make the database much heavier and database is not made for that so here we can store the image data on cloud or AWS or any other cloud services which will give us a unique URL link for each image we've uploaded
            // So the URL will be of type String
            type : String,

        },
        price : {
            type : Number,
            default : 0
        },
        stock : {
            type : Number,
            default : 0
        },
        category : {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Category',
            required : true
        },
        owner : {
            type : mongoose.Schema.Types.ObjectId,
            ref : "User"
        }
    },
    {timestamps : true}
)

export const Product = mongoose.model("Product",productSchema)