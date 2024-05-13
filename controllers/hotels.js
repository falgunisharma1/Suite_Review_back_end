// =======================================
//              DEPENDENCIES
// =======================================
const express = require('express')
const router = express.Router()
const Hotel = require('../models/hotels.js')
const hotelSeeds = require('../seedDataHotels.js')

// Hotel.collection.drop()

// =======================================
//              ROUTES
// =======================================


// Index Route

router.get('/', async (req, res) => {
    
    const foundHotels = await Hotel.find({})
    
    console.log(foundHotels)
    
    try{
    res.json(foundHotels)
    } catch (error){
        res.status(400).json(error)
    }

    })

// Add Seeds Route

router.get('/seed', async (req, res) => {
    const hotels = await Hotel.create(hotelSeeds)
    res.redirect('/hotels')
})

// =======================================
//              EXPORT ROUTER
// =======================================

module.exports = router