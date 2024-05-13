const mongoose = require('mongoose')
const Schema = mongoose.Schema

  //https://mongoosejs.com/docs/validation.html


const hotelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
        maxlength: 150 
    },
    images: [String], 
    hotel_Id: {
        type: Number,
        required: true
    }
})

const Hotel = mongoose.model('Hotel', hotelSchema)

module.exports = Hotel