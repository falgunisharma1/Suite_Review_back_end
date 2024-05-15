// =======================================
//              DEPENDENCIES
// =======================================
const express = require('express')
const User = require('../models/users.js')
const jwt = require('jsonwebtoken')

const SECRET = process.env.TOKEN_SECRET


// =======================================
//         Get MONGO DB ID for user
// =======================================




//Ref: https://stackoverflow.com/questions/24348437/mongoose-select-a-specific-field-with-find

const authenticate = async (req, res, next) => {


    //==================
    //Authorization: Bearer <token>
    //==================

        //HEADER.PAYLOAD.VERIFYSIGNATURE

        //get token from header
        //[Bearer, token]
        const headerArray = req.headers.authorization.split(' ')

    //==================
    //DECRYPT <token>
    //==================

        //decode token to get infomation for the payload
        //HEADER.PAYLOAD.VERIFYSIGNATURE
        //PAYLOAD hold our mongodb key because it is sent in the controller

        //jwt.verify(token, secretOrPublicKey, [options, callback])
        const token = jwt.verify(headerArray[1], SECRET)
        req.user_Id = token.id
        next()
/*
    if(token){

        try{


        //==================
        //Get user data without pw
        //==================
            //.select(-password) excludes password
            req.user = await User.find({user_Id:token.id}).select('-password')

            next()//call next piece of middleware


        } catch(error){
            console.log(error)
            next()
            //res.status(400).json(error)
        }

        //.select(-password) excludes password

        next()
       
    } 
    */ 
    // else {
    //     res.status(400)
    //     throw new Error('token false')
    // }



}

module.exports = authenticate