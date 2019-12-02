/**
 * Controller for donation endpoints
 */
'use strict';

/**
 * Import donation services
 */
const donationService = require('../services/donation-services');

/**
 * Returns a list of donation in JSON based
 * on the search parameter
 * If conditions to search by email id, fundraiserId or just simple get
 *
 * @param request
 * @param response
 */
exports.list = function (request, response) {
    const resolve = (donation) => {
        response.status(200);
        response.json(donation);
    };
    if( request.query.emailId !== undefined ) {
        console.log('Search by Email Id');
        donationService.search('emailId', request.query.emailId)
            .then(resolve)
            .catch(renderErrorResponse(response));
    }else if( request.query.fundraiserId !== undefined ) {
        console.log('Search by Fundraiser Id');
        donationService.search('fundraiserId', request.query.fundraiserId)
            .then(resolve)
            .catch(renderErrorResponse(response));
    }
    else {
        donationService.search(null, null)
            .then(resolve)
            .catch(renderErrorResponse(response));
    };
};


/**
 * Creates a new donation with a json and
 * returns a donation object
 *
 * @param request
 * @param response
 */
exports.post = function (request, response) {
    const newDonation = Object.assign({}, request.body);
    const resolve = (donation) => {
        response.status(200);
        response.json(donation);
    }
    donationService.save(newDonation)
        .then(resolve)
        .catch(renderErrorResponse(response));
};

/**
 * Returns a donation Object in JSON
 *
 * @param request
 * @param response
 */
exports.get = function (request, response) {
    const resolve = (donation) => {
        response.status(200);
        response.json(donation);
    };
    donationService.get(request.params.donationId)
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
