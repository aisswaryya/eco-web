
/**
 * fundraiser endpoint route definitions
 */
'use strict';
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
'use strict';
module.exports = function (app) {
    const socialfeedController = require('../controllers/socialfeed-controller');
    // Todo Routes for search and create.
    app.route('/v1/eco/socialfeeds')
        .get(jwtCheck, socialfeedController.list)
        .post(jwtCheck, socialfeedController.post);

    // Todo Routes for get, update and delete.
    app.route('/v1/eco/socialfeeds/:socialfeedId')
        .put(jwtCheck, socialfeedController.put)
        .delete(jwtCheck, socialfeedController.delete);
};