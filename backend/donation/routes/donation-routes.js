/**
 * donation endpoint route definitions
 */
'use strict';
/**
 * route function
 * No delete or update for donations
 *
 * @param app
 */
module.exports = function (app) {
    const donationController = require('../controller/donation-controller');
    // Donation Routes for search and create.
    app.route('/v1/eco/donations')
        .get(donationController.list)
        .post(donationController.post);

    // donation Routes for get
    app.route('/v1/eco/donations/:donationId')
        .get(donationController.get)
};
