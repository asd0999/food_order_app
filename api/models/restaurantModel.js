const mongoose = require('mongoose')

const Schema = mongoose.Schema

const restaurantSchema = new Schema({
    restaurantName: {type: String},
    apartmentNumber: {type: Number},
    streetname: {type: Number},
    zipcode: {type: Number},
    phoneNumber: {type: Number},
    menu: [
        { 
        item_id: {type: String}, 
        }
    ]
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema)


module.exports = Restaurant