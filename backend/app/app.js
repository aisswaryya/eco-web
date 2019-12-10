'use strict';
/**
 * Initializing the app
 *
 * @param app
 */
module.exports = function (app) {
    //Initialize models
    let fundraiserModels = require('../fundraisers/models/fundraiser-models');
    let donationModels = require('../donation/models/donation-models');
    let socialfeedModel = require('../social-feed/models/socialfeed');

    //Initialize routes
    let fundraiserRoutes = require('../fundraisers/routes/fundraiser-routes');
    let donationRoutes = require('../donation/routes/donation-routes');
    let socialfeedRoutes = require('../social-feed/routes/socialfeed-route');

    fundraiserRoutes(app);
    donationRoutes(app);
    socialfeedRoutes(app);
        
};
