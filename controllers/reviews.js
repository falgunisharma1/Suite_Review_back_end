// =======================================
//              DEPENDENCIES
// =======================================
const express = require('express')
const router = express.Router()
const Review = require('../models/reviews.js')
const reviewSeeds = require('../seedDataReviews.js')

// Review.collection.drop()



// =======================================
//              MIDDLEWARE
// =======================================

const authenticate = require('../middlewares/authentication.js')



// =======================================
//              ROUTES
// =======================================

// Full CRUD:

// Action    URL                   HTTP Verb     Explaination
//______________________________________________________________________________________
// Index     /reviews/               GET         returns all reviews
// Show      /reviews/:hotel_ID      GET         returns list of reviews for particular hotel
// Show      /reviews/user/:user_ID  GET         returns list of reviews for particular user
// Show      /reviews/review/:id     GET         returns one review
// Create    /reviews/:hotel_ID      POST        create new review
// Update    /reviews/:id            PUT         updates a particular review
// Delete    /reviews/:id            DELETE      updates a particular review


// Index Route

router.get('/', async (req, res) => {
    
    try{
        const foundReviews = await Review.find({}) 
        res.json(foundReviews)
        //console.log(foundReviews)
    } catch (error){
        res.status(400).json(error)
    }

    })

// Add Seeds Route

router.get('/seed', async (req, res) => {
    const reviews = await Review.create(reviewSeeds)
    res.redirect('/reviews')
})

// Show Route List of reviews for specific Hotel

router.get('/:hotel_id', async (req, res) => {
    
    console.log('in get')
    const foundReviews = await Review.find({hotel_Id: Number(req.params.hotel_id)})
    
    console.log(foundReviews)
    
    try{
    res.json(foundReviews)
    } catch (error){
        res.status(400).json(error)
    }

})


// Show Route One specific Review

router.get('/review/:id', async (req, res) => {
    
    console.log('in get')
    const foundReview = await Review.findById(req.params.id)
    
    console.log(foundReview)
    
    try{
    res.json(foundReview)
    } catch (error){
        res.status(400).json(error)
    }

})

// Show Route List of reviews for specific Hotel

router.get('/user/:user_id', async (req, res) => {
    
    console.log('in get')
    const foundReviews = await Review.find({user_Id: Number(req.params.user_id)})
    
    console.log(foundReviews)
    
    try{
    res.json(foundReviews)
    } catch (error){
        res.status(400).json(error)
    }

})

// Create Route (POST) - Create a revieiw for specific hotel
router.post('/:hotel_id', async (req, res) => {
    console.log('in post')
    console.log(req.body)

    // preping the object ahead of time because pulling from Url too
    const newObj = {
        user_Id:req.body.user_Id,
        rating: req.body.rating,
        description: req.body.description,
        images: req.body.images,// may need to update
        hotel_Id: req.params.hotel_id// model rules cast to Number
    }

    console.log(newObj)

    try{
 
        res.json(await Review.create(newObj))
        //Can't redirect because the nature of the fuction
        //res.redirect(`/reviews/${req.params.hotel_id}`)


    } catch(error) {

        res.status(400).json(error)

    }
})


// Update Route (PUT) - updated single review, us it's unique ID

router.put('/:id', async (req, res) => {

    try{
        res.json(await Review.findByIdAndUpdate(req.params.id, req.body, {new: true}))
    } catch(error) {
        res.status(400).json(error) 
    }
})

// Delete Route - delete single review, us it's unique ID

router.delete('/:id', async (req, res) =>{

    try{
        res.json(await Review.findByIdAndDelete(req.params.id))
    } catch (error) {
        res.status(400).json(error) 
    }

})

// =======================================
//              EXPORT ROUTER
// =======================================

module.exports = router