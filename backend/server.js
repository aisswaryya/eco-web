let express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    cors = require('cors'),
    mongoose = require('mongoose'), //created model loading here
    bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.connect('mongodb://localhost:27017/ecoweb', function(err, db){
    useMongoClient: true
    if (err) throw err;
    console.log("Database created!");
});
mongoose.Promise = global.Promise; //If  we want to use mongoose in different position inside the codes it must be viewed as global mode, that's why we need to set mongoose like this

//Adding body parser for handling request and response objects.
app.use(bodyParser.urlencoded({ //parse url encoded body
    //use is a method to configure the middleware used by the routes of the Express HTTP server object. The method is defined as part of Connect that Express is based upon.
    extended: true, //use qs library; advanced than query string library
    limit: '50mb'
}));
app.use(bodyParser.json({
    limit: '50mb'
})); //body parser is an existing middleware function
//middleware gives you access to req and res in the apps request
//Enabling CORS
app.use(function (req, res, next) { //next is a function that calls next middleware function;
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Allow-Methods", "*");
    next();
});

// app.get('/',function(req,res){
//     res.sendFile(__dirname+'/index.html');
// })

//Initialize app
let initApp = require('./app/app');
initApp(app);

app.listen(port);
console.log('Ecoweb RESTful API server started on: ' + port);
