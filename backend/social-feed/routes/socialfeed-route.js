/**
 * Todo endpoint route definitions.
 */

'use strict';
module.exports = function (app) {
    const socialfeedController = require('../controllers/socialfeed-controller');
    // Todo Routes for search and create.
    app.route('/socialfeed')
        .get(socialfeedController.list)
        .post(socialfeedController.post);

    // Todo Routes for get, update and delete.
    app.route('/socialfeed/:socialfeedId')
        .get(socialfeedController.get)
        .put(socialfeedController.put)
        .delete(socialfeedController.delete);
};