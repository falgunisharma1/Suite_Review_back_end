// =======================================
//              DEPENDENCIES
// =======================================
const express = require('express')
const router = express.Router()
const Hotel = require('../models/hotels.js')
const Review = require('../models/reviews.js')
const hotelSeeds = require('../seedDataHotels.js')

// Hotel.collection.drop()

// =======================================
//              ROUTES
// =======================================

// Action    URL                   HTTP Verb     Explaination
//______________________________________________________________________________________
// Index     /hotels/                GET         returns all hotels
// Show      /hotels/:id             GET         returns a particular hotel


// Index Route

router.get('/', async (req, res) => {
    
    let foundHotels = await Hotel.find({})

    

    
    //https://www.statology.org/mongodb-average/
    const hotelReviews = await Review.aggregate([{$group: {_id:"$hotel_Id", ave_rating:{$avg:"$rating"}}}])

    console.log(hotelReviews)
    
    for(i=0;i<foundHotels.length; i++){

        for(j=0;j<hotelReviews.length; j++){

            if (foundHotels[i]["hotel_Id"] === hotelReviews[j]["_id"]){

                foundHotels[i]["ave_rating"] = Math.round(hotelReviews[j]["ave_rating"]*100)/100 // round to 2 dec

                console.log(foundHotels[i]["ave_rating"])


            }
        }

    }

    //console.log(foundHotels)
    
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


// Show Route

router.get('/:id', async (req, res) => {
    
    const foundHotel = await Hotel.findById(req.params.id)

    //https://www.statology.org/mongodb-average/

    const hotelReviews = await Review.aggregate([{$group: {_id:"$hotel_Id", ave_rating:{$avg:"$rating"}}}])

    //console.log(hotelReviews)
    


        for(j=0;j<hotelReviews.length; j++){

            if (foundHotel.hotel_Id === hotelReviews[j]["_id"]){

                foundHotel["ave_rating"] = Math.round(hotelReviews[j]["ave_rating"]*100)/100 // round to 2 dec

               // console.log(foundHotel["ave_rating"])


            }
        }

    
    //console.log(foundHotel)
    
    try{
    res.json(foundHotel)
    } catch (error){
        res.status(400).json(error)
    }

})

// =======================================
//              EXPORT ROUTER
// =======================================

module.exports = router