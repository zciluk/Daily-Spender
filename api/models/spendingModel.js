var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
// Schema for sent Spendings
var spendingSchema = mongoose.Schema({
    key: {
        type: String,
        required: true,
        unique: true
    },
    date: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    value: {
        type: Number,
        required: true
    }
});
spendingSchema.plugin(uniqueValidator, {message: "same key already exists."});
var Spending = module.exports = mongoose.model('spending', spendingSchema);
module.exports.get = function (callback, limit) {
    Spending.find(callback).limit(limit);
}