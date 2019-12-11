
module.exports = function (app) {
    const eventController = require('../controllers/event-controller');
    // Event Routes for search and create.
    app.route('/v1/eco/events') //all paths with /Event
        .get(eventController.list) //listing the information
        .post(eventController.post); //Creating a new Event list

    // based on id 
    app.route('/v1/eco/events/:eventId') //all paths for /Event along with id
        .get(eventController.get) //getting based on id
        .put(eventController.put) //modifying based on id
        .delete(eventController.delete); //deleting based on id

};