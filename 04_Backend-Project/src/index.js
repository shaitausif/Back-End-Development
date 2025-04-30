// As early as possible in your application, import and configure dotenv and that's why we're doing this in the file which is going to be executed first before any other
// The below way of using require for dotenv will work but it will create an inconsistency in our code
// require('dotenv').config({path : './env'})

import dotenv from 'dotenv'
import connectDB from './db/index.js'


dotenv.config({
    path : './env'
})

connectDB()



// This is the first approach where we're implementing the code of database connection in our index file but for more modular and readable code we should implement it in the db folder seperately
/*
//  we've two option first we can create a function and then call it or we can create an IIFE which we don't need to call it'll invoke immediately as the server starts
// It's a good approach to use semicolon before IIFE's so that if the previous line of code hasn't have a semicolon at the end it can create problems
import express from 'express'
const app = express()
;(async() => {
    // It's essential to use trycatch for database connection for better error handling
    try {
        await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
        app.on("error",(error) => {
            console.log("Error : ",error)
            throw error
        })
        app.listen(process.env.PORT,() => {
            console.log(`Server running at http://localhost:${process.env.PORT}`)
        })
    } catch (error) {
        console.error(error)
        
    }   
})()
    */

