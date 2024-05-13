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
    min: [0, 'Needs to be between 1 and 10'],
    max: [10, 'Needs to be between 1 and 10']
},
description: {
    type: string, 
    required: true
},
images: [String]

})

const Review = mongoose.model('Review', reviewSchema)

module.exports = Review