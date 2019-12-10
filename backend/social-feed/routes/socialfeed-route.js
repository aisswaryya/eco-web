/**
 * Todo endpoint route definitions.
 */

'use strict';
module.exports = function (app) {
    const socialfeedController = require('../controllers/socialfeed-controller');
    // Todo Routes for search and create.
    app.route('/v1/eco/socialfeeds')
        .get(socialfeedController.list)
        .post(socialfeedController.post);

    // Todo Routes for get, update and delete.
    app.route('/v1/eco/socialfeeds/:socialfeedId')
        .get(socialfeedController.get)
        .put(socialfeedController.put)
        .delete(socialfeedController.delete);
};