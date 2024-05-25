// =======================================
//              DEPENDENCIES
// =======================================
const express = require('express')
const app = express()
const methodOverride = require('method-override');

const cors = require("cors")

require('dotenv').config()

const mongoose = require('mongoose')
const db = mongoose.connection

const PORT = process.env.PORT || 4000;
const mongoURI = process.env.MONGODB_URI
const SECRET = process.env.TOKEN_SECRET

const morgan = require('morgan')

const jwt = require('jsonwebtoken')



// =======================================
//              MIDDLEWARE
// =======================================
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))
app.use(cors())
app.use(morgan('dev'))


// =======================================
//              CONTROLLERS
// =======================================


const hotelsController = require('./controllers/hotels.js')
app.use('/hotels', hotelsController)


const reviewsController = require('./controllers/reviews.js')
app.use('/reviews', reviewsController)


const usersController = require('./controllers/users.js')
app.use('/users', usersController)




// =======================================
//              LISTENER
// =======================================
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
  })

  // Connect to Mongo
mongoose.connect(mongoURI)
.then(()=> {
    console.log('the connection to mongod is established')
})

// Error / success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'))
db.on('connected', () => console.log('mongo connected: ', mongoURI))
db.on('disconnected', () => console.log('mongo disconnected'))