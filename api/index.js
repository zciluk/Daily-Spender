let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let app = express();
let apiRoutes = require("./routes/api-routes");

app.use(bodyParser.json());                                     
app.use(bodyParser.urlencoded({extended: true}));               
app.use(bodyParser.text());                                    
app.use(bodyParser.json({ type: 'application/json'}));  

mongoose.connect("mongodb://mongo:27017/spendings" , { useNewUrlParser: true }).then(() => {
    console.log("Connected to Database");
    }).catch((err) => {
        console.log("Not Connected to Database ERROR! ", err);
    });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
var port = process.env.PORT || 3001;

// CORS...
app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
app.use('/', apiRoutes);

app.listen(port, function () {
    console.log("Running on port " + port);
});

module.exports = app;