import mongoose from "mongoose";

// here we're creating a mini model so that we can use it in our primary model
const orderItemSchema = new mongoose.Schema(
    {
        productId : {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Product'
        },
        quantity : {
            type : Number,
            required : true
        }
    },
)


const orderSchema = new mongoose.Schema(
    {
        orderPrice : {
            type : Number,
            required : true
        },
        customer : {
            // I am referencing the user model here
            type : mongoose.Schema.Types.ObjectId,
            ref : 'User'
        },
        orderItems : {
            type : [orderItemSchema]
        },
        address : {
            type : String,
            required: true,
        },
        // here we're storing the status of the order
        status : {
            type : String,
            // we'll only have three types of status and we can't store anything else except these three in this field of status using enum
            enum : ["PENDING","CANCELLED","DELIVERED"],
            default : "PENDING"
        }
       
    },
    {timestamps : true}
)

export const Order = mongoose.model("Order",orderSchema)