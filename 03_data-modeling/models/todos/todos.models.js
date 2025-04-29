import mongoose from 'mongoose'

const todoSchema = new mongoose.Schema(
  {
    content : {
      type : String,
      required : true
    },
    completed : {
      type : Boolean,
      default : false
    },
    createdBy : {
      // here we'll take the reference of User from the User model
      type : mongoose.Schema.Types.ObjectId,
      // It'll compulsory to write the ref property if we're refering any schema  
      ref : "User"
    },
    // here we're defining that the subtodos will be an array of objects where each object will be of SubTodo type
    subTodos : [
      {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'SubTodo'
      }

    ]
  },
  {timestamps : true}
)

export const Todo = mongoose.model('Todo',todoSchema)