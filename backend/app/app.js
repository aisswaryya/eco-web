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
    let petitionModels = require('../petition/model/petition.model');
    let signatureModels = require('../signature/model/signature.model');
    //Initialize routes
    let fundraiserRoutes = require('../fundraisers/routes/fundraiser-routes');
    let donationRoutes = require('../donation/routes/donation-routes');
    let petitionRoutes =require('../petition/routes/petition-route');
    let signatureRoutes = require('../signature/route/signature-route');

    fundraiserRoutes(app);
    donationRoutes(app);
    petitionRoutes(app);
    signatureRoutes(app);

};
