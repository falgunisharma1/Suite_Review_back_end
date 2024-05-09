// =======================================
//              DEPENDENCIES
// =======================================
const express = require('express')
const app = express()

const cors = require("cors")

require('dotenv').config()

const PORT = process.env.PORT || 4000;



// =======================================
//              MIDDLEWARE
// =======================================
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())



// =======================================
//              CONTROLLERS
// =======================================


const hotelsController = require('./controllers/hotels.js')
app.use('/hotel', hotelsController)





// =======================================
//              LISTENER
// =======================================
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
  })