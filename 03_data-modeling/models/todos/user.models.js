import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  username :  {
    type : String,
    required : true,
    trim : true,
    unique : true,
    lowercase : true
  },
  email : {
    type : String,
    required : true,
    unique : true,
    lowercase : true    
  },
  password: {
    type : String,
    required: true
  }
},
// It will automatically add two fields createdAt and updatedAt
{timestamps : true}
)

export const User = mongoose.model("User",userSchema)