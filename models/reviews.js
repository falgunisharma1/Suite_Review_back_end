const mongoose = require('mongoose')
const Schema = mongoose.Schema

  //https://mongoosejs.com/docs/validation.html

const reviewSchema = new mongoose.Schema({

hotel_Id: {
    type: Number, 
    required: true
},
user_Id: {
    type: Number, 
    required: true
},
rating: {
    type: Number, 
    required: true,
    min: [1, 'Needs to be between 1 and 5'],
    max: [5, 'Needs to be between 1 and 5']
},
description: {
    type: String, 
    required: true
},
images: [String]
})

const Review = mongoose.model('Review', reviewSchema)

module.exports = Review