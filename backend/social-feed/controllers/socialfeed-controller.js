/**
 * Controller for socialfeed endpoints.
 */

'use strict';
//import socialfeed service.
const socialfeedService = require('../services/socialfeed-service');
var fs = require('fs');
/**
 * Returns a list of social feeds in JSON based on the
 * search parameters.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.list = function (request, response) {
    const resolve = (socialfeeds) => {
        response.status(200);
        response.json(socialfeeds);
    };
    socialfeedService.search({})
        .then(resolve)
        .catch(renderErrorResponse(response));
};

/**
 * Creates a new socialfeed with the request JSON and
 * returns todo JSON object.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.post = function (request, response) {
    
    // request.body.data = fs.readFileSync('/Users/pavanrao/Desktop/Screen\ Shot\ 2019-10-08\ at\ 12.30.08\ PM.png');
    // console.log("***********Response:"+request.body.data);
    request.body.data = Buffer.from(request.body.data);
    const newSocialfeed = Object.assign({}, request.body);
    const resolve = (socialfeed) => {
        response.status(200);
        response.json(socialfeed);
    };
    socialfeedService.save(newSocialfeed)
        .then(resolve)
        .catch(renderErrorResponse(response));
};

/**
 * Returns a socialfeed object in JSON.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.get = function (request, response) {
    const resolve = (socialfeed) => {
        response.status(200);
        response.json(socialfeed);
    };
    socialfeedService.get(request.params.socialfeedId)
        .then(resolve)
        .catch(renderErrorResponse(response));
};

/**
 * Updates and returns a socialfeed object in JSON.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.put = function (request, response) {
    const socialfeed = Object.assign({}, request.body);
    console.log(request.body);
    const resolve = (socialfeed) => {
        response.status(200);
        response.json(socialfeed);
    };
    socialfeed._id = request.params.socialfeedId;
    socialfeedService.update(socialfeed)
        .then(resolve)
        .catch(renderErrorResponse(response));
};

/**
 * Deletes a socialfeed object.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.delete = function (request, response) {
    const resolve = (socialfeed) => {
        response.status(200);
        response.json({
            message: 'Social feed Successfully deleted'
        });
    };
    socialfeedService.delete(request.params.socialfeedId)
        .then(resolve)
        .catch(renderErrorResponse(response));
};
/**
 * Throws error if error object is present.
 *
 * @param {Response} response The response object
 * @return {Function} The error handler function.
 */
let renderErrorResponse = (response) => {
    const errorCallback = (error) => {
        if (error) {
            response.status(500);
            response.json({
                message: 'No records found for the give input \n'+error.message
            });
        }
    }
    return errorCallback;
};