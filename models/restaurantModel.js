const mongoose = require('mongoose')

const Schema = mongoose.Schema

const restaurantSchema = new Schema({
    restaurantName: {type: String},
    apartmentNumber: {type: Number},
    streetname: {type: Number},
    zipcode: {type: Number},
    phoneNumber: {type: Number},
});

const Restaurant = mongoose.model('Restaurants', restaurantSchema)


module.exports = Restaurant