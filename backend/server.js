let express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    cors = require('cors'),
    mongoose = require('mongoose'), //created model loading here
    bodyParser = require('body-parser');
const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');
// create express app
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())

app.use(cors());

// Configuring the database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the db
mongoose.connect(dbConfig.url, {
	useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

//Adding body parser for handling request and response objects.
app.use(bodyParser.urlencoded({ //parse url encoded body
    //use is a method to configure the middleware used by the routes of the Express HTTP server object. The method is defined as part of Connect that Express is based upon.
    extended: true //use qs library; advanced than query string library
}));
// app.use(cors());
app.use(bodyParser.json()); //body parser is an existing middleware function
//middleware gives you access to req and res in the apps request
//Enabling CORS
app.use(function (req, res, next) { //next is a function that calls next middleware function;
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Allow-Methods", "*");
    next();
// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Ecoweb started."});
});

require('./route/eco.route.js')(app);
// app.get('/',function(req,res){
//     res.sendFile(__dirname+'/index.html');
// })

// listen for requests
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
//Initialize app
let initApp = require('./app/app');
initApp(app);

app.listen(port);
console.log('Ecoweb RESTful API server started on: ' + port);
