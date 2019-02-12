var Spending = require("../models/spendingModel");
// Form controller - defying function on post and get calls
exports.getAllSpendings = function(req, res) {
    Spending.get(function(err, results) {
    if (err) {
      res.json({
        status: "500",
        message: err
      });
    } else {
    res.json({
      status: "200",
      message: "Records received succesfuly",
      data: results
    });
  }
  });
};
exports.newSpending = function(req, res) {
  var spending = new Spending();
  spending.key = req.body.key;
  spending.date = req.body.date;
  spending.name = req.body.name;
  spending.value  = req.body.value;
  spending.save(function(err) {
    if (err) {
      res.json({
        status: "500",
        message: err
      });
    
    } else {
      res.json({
        message: "New record created in database.",
        data: spending
      });
    }
  });
};
exports.deleteSpending = function(req, res) {
  
  Spending.findOneAndDelete({key: req.body.key }, function(err, result) {
    if(err) {
      res.json({status: "500", error: "Deleting spending is not successfull"});
      return;
    }  else if(!result){ 
        res.json({status: "404", message: "Record to be deleted do not exists."});
    return;
        
    } else {
    res.json({status: "200", message: `Spending deleted successfully!!`});
    }
  });

};
