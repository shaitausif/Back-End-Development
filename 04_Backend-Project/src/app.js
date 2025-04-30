
import express from 'express'
import cors from 'cors'
// we use cookie-parser to parse HTTP server cookie parsing and serialization
import cookieParser from 'cookie-parser'
const app = express()

// we use use method of express to use middlewares and for configuration
app.use(cors({
    origin : process.env.CORS_ORIGIN
}))

// here we're configuring the express to allow json requests with a certain limit
app.use(express.json({limit: "16kb"}))

// here we're configuring the express about how to take parameters from the user it should be encoded
app.use(express.urlencoded({extended : true, limit : '16kb'}))
app.use(express.static('public'))
// we use cookieParser to access the cookies from user's browser and to set those cookies

app.use(cookieParser())




export {app}