module.exports = function (app) {
    const attendeeController = require('../controllers/attendee-controller');
    // Attendee Routes for search and create.
    app.route('/attendee') //all paths with /Attendee
        .get(attendeeController.list) //listing the information
        .post(attendeeController.post); //Creating a new Attendee list

    // based on id 
    app.route('/attendee/:attendeeId') //all paths for /Attendee along with id
        .get(attendeeController.get) //getting based on id
        .put(attendeeController.put) //modifying based on id
        .delete(attendeeController.delete); //deleting based on id
};