/**
 * donation endpoint route definitions
 */
'use strict';
let jwt = require('express-jwt'),
    jwks = require('jwks-rsa');

/**
 * Authentication for backend
 * @type {jwt.RequestHandler}
 */
let jwtCheck = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: 'https://dev-vgga-ftr.auth0.com/.well-known/jwks.json'
    }),
    audience: 'http://localhost:3001',
    issuer: 'https://dev-vgga-ftr.auth0.com/',
    algorithms: ['RS256']
});
/**
 * route function
 * No delete or update for donations
 *
 * @param app
 */
module.exports = function (app) {
    const donationController = require('../controller/donation-controller');
    // Donation Routes for search  and create.
    app.route('/v1/eco/donations')
        .get(donationController.list)
        // adding jwt check to make creation secure
        .post(jwtCheck, donationController.post);

    // donation Routes for get
    app.route('/v1/eco/donations/:donationId')
        .get(donationController.get)
};
