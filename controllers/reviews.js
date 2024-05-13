// =======================================
//              DEPENDENCIES
// =======================================
const express = require('express')
const router = express.Router()
const Review = require('../models/reviews.js')
const reviewSeeds = require('../seedDataReviews.js')

// Review.collection.drop()

// =======================================
//              ROUTES
// =======================================


// Index Route

router.get('/', async (req, res) => {
    
    const foundReviews = await Review.find({})
    
    console.log(foundReviews)
    
    try{
    res.json(foundReviews)
    } catch (error){
        res.status(400).json(error)
    }

    })

// Add Seeds Route

router.get('/seed', async (req, res) => {
    const reviews = await Review.create(reviewSeeds)
    res.redirect('/reviews')
})

// =======================================
//              EXPORT ROUTER
// =======================================

module.exports = router