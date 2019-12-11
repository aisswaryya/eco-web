/**
 * attendee endpoint route definitions
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
 * The attendee controller
 */
module.exports = function (app) {
    const attendeeController = require('../controllers/attendee-controller');
    // Attendee Routes for search and create.
    app.route('/v1/eco/attendees') //all paths with /Attendee
        .get(attendeeController.list) //listing the Attendee information based on Event Id
        .post(jwtCheck,attendeeController.post); //Creating a new Attendee

    // based on id 
    app.route('/v1/eco/attendees/:attendeeId') //all paths for /Attendee along with id
        .get(attendeeController.get) //getting based on id
        .put(jwtCheck,attendeeController.put) //modifying based on id
        .delete(jwtCheck,attendeeController.delete); //deleting based on id
};