var mongoose = require('mongoose');
// Schema for sent Spendings
var spendingSchema = mongoose.Schema({
    key: {
        type: String,
        required: true
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

var Spending = module.exports = mongoose.model('spending', spendingSchema);
module.exports.get = function (callback, limit) {
    Spending.find(callback).limit(limit);
}