const mongoose = require('mongoose')

const Schema = mongoose.Schema

const orderSchema = new Schema({
    username: {type: String, required: true},
    email: {type: String},
    phoneNumber: {type: Number},
    delivery: {type: boolean},
    order: [{type: Object}]
}, {
    timestamps: true,
});

const Order = mongoose.model('Orders', orderSchema)


module.exports = Order