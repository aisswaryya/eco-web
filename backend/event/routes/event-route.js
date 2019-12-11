/**
 * event endpoint route definitions
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
 * the event route information 
 */
module.exports = function (app) {
    const eventController = require('../controllers/event-controller');
    // Event Routes for search and create.
    app.route('/v1/eco/events') //all paths with /Event
        .get(eventController.list) //listing the information
        .post(jwtCheck,eventController.post); //Creating a new Event list

    // based on id 
    app.route('/v1/eco/events/:eventId') //all paths for /Event along with id
        .get(eventController.get) //getting based on id
        .put(jwtCheck,eventController.put) //modifying based on id
        .delete(jwtCheck,eventController.delete); //deleting based on id

};