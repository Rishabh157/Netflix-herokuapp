const mongoose = require('mongoose');

const Ragister = mongoose.Schema({
 email: String,
 password: String,
 firstName: String,
 lastName: String,
 cardNumber: String,
 date: Number,
 cvv: String,
 plan: String,
 price: String,
 // date: Date,
}, { timestamps: true })

module.exports = mongoose.model('users', Ragister)
