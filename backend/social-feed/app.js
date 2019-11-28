'use strict';
module.exports = function (app) {
    //Initialize model
    let socialfeedModel = require('./models/socialfeed');

    //Initialize routes
    let socialfeedRoutes = require('./routes/socialfeed-route');
    socialfeedRoutes(app);
};