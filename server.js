const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const hotelRoute = require('./api/routes/hotels')
const authRoute = require('./api/routes/auth')
const userRoute = require('./api/routes/users')
const roomRoute = require('./api/routes/rooms')
const cookieParser = require('cookie-parser')

const app = express()
dotenv.config()

const connect = async()=>{
    try {
        await mongoose.connect(process.env.MONGO,{useNewUrlParser:true,useUnifiedTopology:true})
        console.log('connected to mongodb')
    } catch (error) {
        throw error
    }
}

mongoose.connection.on("disconnected",()=>{
    console.log('mongoDb disconnected')
})

app.use(cookieParser())
app.use(express.json())


app.use('/hotel',hotelRoute)
app.use('/',authRoute)
app.use('/user',userRoute)
app.use('/',roomRoute)






app.listen(5000,()=>{
    connect()
    console.log('server is ready')

})