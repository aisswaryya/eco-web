'use strict';
/**
 * Initializing
 *
 * @param app
 */
module.exports = function (app) {
    //Initialize models
    let fundraiserModels = require('../fundraisers/models/fundraiser-models');
    let donationModels = require('../donation/models/donation-models');

    //Initialize routes
    let fundraiserRoutes = require('../fundraisers/routes/fundraiser-routes');
    let donationRoutes = require('../donation/routes/donation-routes');
    fundraiserRoutes(app);
    donationRoutes(app);
};
