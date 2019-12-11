/**
 * Controller for fundraiser endpoints
 */
'use strict';

/**
 * Import fundraiser services
 */
const fundraiserService = require('../services/fundraiser-services');

/**
 * Returns a list of fundraisers in JSON based
 * on the search parameter
 * If conditions to search by email id or just simple get
 *
 * @param request
 * @param response
 */
exports.list = function (request, response) {
    const resolve = (fundraisers) => {
        response.status(200);
        response.json(fundraisers);
    };
    if( request.query.emailId !== undefined ) {
        // search by email id
        fundraiserService.search('emailId', request.query.emailId)
            .then(resolve)
            .catch(renderErrorResponse(response));
    } else {
        // regular filterless search
        fundraiserService.search(null, null)
            .then(resolve)
            .catch(renderErrorResponse(response));
    };
};


/**
 * Creates a new fundraiser with a json and
 * returns a fundraiser object
 *
 * @param request
 * @param response
 */
exports.post = function (request, response) {
    const newFundraiser = Object.assign({}, request.body);
    const resolve = (fundraiser) => {
        response.status(200);
        response.json(fundraiser);
    }
    fundraiserService.save(newFundraiser)
        .then(resolve)
        .catch(renderErrorResponse(response));
};

/**
 * Returns a fundraiser Object in JSON
 *
 * @param request
 * @param response
 */
exports.get = function (request, response) {
    const resolve = (fundraiser) => {
        response.status(200);
        response.json(fundraiser);
    };
    fundraiserService.get(request.params.fundraiserId)
        .then(resolve)
        .catch(renderErrorResponse(response));
};

/**
 * Updates and returns a fundraiser object in JSON.
 *
 * @param request
 * @param response
 */
exports.put = function (request, response) {
    const fundraiser = Object.assign({}, request.body);
    const resolve = (fundraiser) => {
        response.status(200);
        response.json(fundraiser);
    };
    fundraiser._id = request.params.fundraiserId;
    fundraiserService.update(fundraiser)
        .then(resolve)
        .catch(renderErrorResponse(response));
};

/**
 * Deletes a fundraiser object
 *
 * @param request
 * @param response
 */
exports.delete = function (request, response) {
    const resolve = (fundraiser) => {
        response.status(200);
        response.json({
            message: 'Fundraiser Successfully deleted'
        });
    };
    fundraiserService.delete(request.params.fundraiserId)
        .then(resolve)
        .catch(renderErrorResponse(response));
};

/**
 * Error handling
 *
 * @param response
 * @returns {errorCallback}
 */
let renderErrorResponse = (response) => {
    const errorCallback = (error) => {
        if (error) {
            response.status(500);
            response.json({
                message: error.message
            });
        }
    }
    return errorCallback;
};
