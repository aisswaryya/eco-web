module.exports = function (app) {
    const attendeeController = require('../controllers/attendee-controller');
    // Attendee Routes for search and create.
    app.route('/v1/eco/attendees') //all paths with /Attendee
        .get(attendeeController.list) //listing the Attendee information based on Event Id
        .post(attendeeController.post); //Creating a new Attendee

    // based on id 
    app.route('/v1/eco/attendees/:attendeeId') //all paths for /Attendee along with id
        .get(attendeeController.get) //getting based on id
        .put(attendeeController.put) //modifying based on id
        .delete(attendeeController.delete); //deleting based on id
};