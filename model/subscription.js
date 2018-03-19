const mongoose = require('mongoose');

let SubSchema = mongoose.Schema({
    name: String,
    subscribe : String,
    email: { type: String, required: true, unique: true},
    
});

module.exports = mongoose.model('SubscriptionData', SubSchema);