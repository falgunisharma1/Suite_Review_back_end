// =======================================
//              DEPENDENCIES
// =======================================
const express = require('express')
const router = express.Router()
const User = require('../models/users.js')
const userSeeds = require('../seedDataUsers.js')

// User.collection.drop()

// =======================================
//              ROUTES
// =======================================


// Index Route

router.get('/', async (req, res) => {
    
    const foundUsers = await User.find({})
    
    console.log(foundUsers)
    
    try{
    res.json(foundUsers)
    } catch (error){
        res.status(400).json(error)
    }

    })
    

// Add Seeds Route

router.get('/seed', async (req, res) => {
    const users = await User.create(userSeeds)
    res.redirect('/users')
})

// =======================================
//              EXPORT ROUTER
// =======================================

module.exports = router