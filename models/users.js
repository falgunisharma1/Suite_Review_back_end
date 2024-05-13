const mongoose = require('mongoose')
const Schema = mongoose.Schema

  //https://mongoosejs.com/docs/validation.html


const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    userImage: String,
    description: String,
    password: {
        type: String,
        required: true
    },
    user_Id: {
        type: Number,
        required: true
    }
});


const User = mongoose.model('User', reviewSchema)

module.exports = User