let router = require('express').Router();
var spendingController = require('../controllers/spendingController');
// Routes - GET and POST

router.route('/spendings')
    .get(spendingController.getAllSpendings)
    .post(spendingController.newSpending)
    .delete(spendingController.deleteSpending);
   

module.exports = router;