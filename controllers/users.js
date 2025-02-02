// =======================================
//              DEPENDENCIES
// =======================================
const express = require('express')
const router = express.Router()
const User = require('../models/users.js')
const userSeeds = require('../seedDataUsers.js')
const bcrypt = require('bcrypt')



// User.collection.drop()

// =======================================
//              ROUTES
// =======================================
//https://www.youtube.com/watch?v=enopDSs3DRw

// Action    URL                   HTTP Verb     Explaination
//______________________________________________________________________________________
// Index     /users/                 GET         returns all users
// Show      /users/profile/:id      GET         returns particular user
// Create    /users/new              POST        create new user
// LogIn     /users/login            POST        already user


// ==========
// Index Route
// ==========


router.get('/', async (req, res) => {
    console.log("in get")


    //Send back everything but the password
    const foundUser = await User.find({}).select('-password')
    
    console.log(foundUser)

    
    try{
        res.json(foundUser) 
    } catch (error){
        res.status(400).json(error)
    }

})
    
// ==========
// Add Seeds Route
// ==========




router.get('/seed', async (req, res) => {
    

    
     //const hashedString = bcrypt.hashSync('yourStringHere', bcrypt.genSaltSync(10))   
    for( i=0;i<userSeeds.length;i++){

    let hashP = bcrypt.hashSync(userSeeds[i]['password'] , bcrypt.genSaltSync(10))

    userSeeds[i]['password'] = hashP

}

    const users = await User.create(userSeeds)

    res.redirect('/users')
})


// ==========
// Show Route
// ==========

//id is supposed to come from token

router.get('/profile/:id', async (req, res) => {
    
    console.log('in get')
    const foundUser = await User.find({user_Id: Number(req.params.id)}).select('-password')
    
    console.log(foundUser)
    console.log('after')

    //Send back everything but the password

    
    try{
    res.json(foundUser)
    } catch (error){
        res.status(400).json(error)
    }

})


// ==========
// Login Route
// ==========

router.put('/login', async (req, res) => {
    
    //incoming json: userName, password

    console.log(req.body)
    //search by userName
    const foundUser = await User.findOne({'userName':req.body.userName})
    
    console.log(foundUser)

    const userExists = foundUser? true:false

    //const hashP = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
    
    let passwordMatch = false //if bad info

    
    if(userExists){

        passwordMatch =  bcrypt.compareSync(req.body.password, foundUser.password)

    }


    //Check is both password and userName are valid
    
    const bothValid = (userExists &&  passwordMatch)
    console.log("pw: "+passwordMatch+ " "+ req.body.password)
    console.log("bothValid: "+ bothValid)


    //Send back everything but the password

    
    let newObj = {} //if bad info

    if(bothValid){

        const userMondoID = foundUser._id

        newObj = {

            _id: userMondoID,
            userName: foundUser.userName,
            firstName: foundUser.firstName,
            lastName: foundUser.lastName,
            userImage: foundUser.userImage,
            description: foundUser.description,
            user_Id:foundUser.user_Id

        }
    }
    

    //If bothValid is true, send Json to the front-end

// Resource: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw
    
    if (bothValid){

        try{   
            res.json(newObj)
            } catch (error){
                res.status(400).json(error)
            }
  
    } else {

        res.status(400).json('Something is not correct with Validation')

    }

})




// ==========
// New Accout Route
// ==========


router.post('/new', async (req, res) => {
    
    //incoming json required: 

    const userName = req.body.userName 
    const password = req.body.password ? bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10)) : null
    const lastName = req.body.lastName 
    const firstName = req.body.firstName 

    //set up user_Id

    const docCount = await User.countDocuments({})

    const user_ID = 150 + docCount

    req.body.user_Id = user_ID

    //replacing password with hashed password
    if (password){
        req.body.password = password
    }
    
    //Set up Checks
    const passFirstCheck = (userName && password && firstName && lastName) ? true :false
    const passSecondCheck = await User.findOne({ userName }) ? false : true

    if( passFirstCheck && passSecondCheck){

        const newAccount = await User.create(req.body)

        const userMondoID = newAccount._id
        //Send back everything but the password
    
        const newObj = {
    
            _id: userMondoID,
            user_Id: newAccount.user_Id,
            userName: newAccount.userName,
            firstName: newAccount.firstName,
            lastName: newAccount.lastName,
            userImage: newAccount.userImage,
            description: newAccount.description,

        }
        


        try{   
            res.json(newObj)
            } catch (error){
                res.status(400).json(error)
            }
  


    }else {
        res.status(400).json('Failed new user checks')

    }

    

})







// =======================================
//              EXPORT ROUTER
// =======================================

module.exports = router

// ==========

// ==========