/**
 * fundraiser endpoint route definitions
 */
'use strict';
/**
 * Authentication tokens
 * @type {((options: jwt.Options) => jwt.RequestHandler) | jwt}
 */

let jwt = require('express-jwt'),
    jwks = require('jwks-rsa');

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
 *
 * @param app
 */
module.exports = function (app) {
    const fundraiserController = require('../controller/fundraiser-controller');
    // Fundraiser Routes for search and create.
    app.route('/v1/eco/fundraisers')
        .get(fundraiserController.list)
        // securing creation of fundraisers
        .post(jwtCheck, fundraiserController.post);

    // Fundraiser Routes for get, update and delete.
    app.route('/v1/eco/fundraisers/:fundraiserId')
        .get(fundraiserController.get)
        // securing put and delete
        .put(jwtCheck, fundraiserController.put)
        .delete(jwtCheck, fundraiserController.delete);
};
