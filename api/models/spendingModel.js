var mongoose = require('mongoose');
// Schema for sent Spendings
var spendingSchema = mongoose.Schema({
    datestamp: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    value: {
        type: Number,
        require: true
    }
});

var Spending = module.exports = mongoose.model('spending', spendingSchema);
module.exports.get = function (callback, limit) {
    Spending.find(callback).limit(limit);
}