/**
 * fundraiser endpoint route definitions
 */
'use strict';

/**
 * route function
 *
 * @param app
 */
module.exports = function (app) {
    const fundraiserController = require('../controller/fundraiser-controller');
    const auth = require('app/auth');
    // Fundraiser Routes for search and create.
    app.route('/v1/eco/fundraisers')
        .get(fundraiserController.list)
        .post(auth.jwtCheck, fundraiserController.post);

    // Fundraiser Routes for get, update and delete.
    app.route('/v1/eco/fundraisers/:fundraiserId')
        .get(fundraiserController.get)
        .put(auth.jwtCheck, fundraiserController.put)
        .delete(auth.jwtCheck, fundraiserController.delete);
};
