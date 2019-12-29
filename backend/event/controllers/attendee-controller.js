const attendeeService = require('../services/attendee-service');


/**
 * Creating a new Attendee based on event Id
 */
exports.post = function (request, response) {
    const newAttendee = Object.assign({}, request.body);
    const resolve = (attendee) => {
        response.status(200);
        response.json(attendee);
    };

    attendeeService.save(newAttendee)
        .then(resolve)
        .catch(renderErrorResponse(response));
};

/**
 * Listing all the Attendees based on Event Id / Email Id / All
 */
exports.list = function (request, response) {

    const resolve = (attendees) => {
        response.status(200);
        response.json(attendees);
    };

    //querying based on eventid
    if (request.query.eventId !== undefined) {

        //search based on eventId
        console.log('Searching Attendee by Event Id');
        attendeeService.search('eventId', request.query.eventId)
            .then(resolve)
            .catch(renderErrorResponse(response));

    } else if (request.query.emailId !== undefined) {

        //search based on emailId
        console.log('Searching Attendee by Email Id');
        attendeeService.search('emailId', request.query.emailId)
            .then(resolve)
            .catch(renderErrorResponse(response));
    } else {

        //getting all attendees
        console.log('Getting all attendees');
        attendeeService.search(null, null)
            .then(resolve)
            .catch(renderErrorResponse(response));

    }

};

/**
 * Returning the Attendee based on id
 */
exports.get = function (request, response) {
    const resolve = (attendee) => {
        response.status(200);
        response.json(attendee);
    };
    attendeeService.get(request.params.attendeeId)
        .then(resolve)
        .catch(renderErrorResponse(response));
};


/**
 * Deleting based on id
 */
exports.delete = function (request, response) {
    const resolve = (attendee) => {
        response.status(200);
        response.json({
            message: 'Attendee Successfully deleted'
        });
    };
    attendeeService.delete(request.params.attendeeId)
        .then(resolve)
        .catch(renderErrorResponse(response));
};

/**
 * Function for rendering the error on the screen
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


/**
 * updating based on id of an attendee
 */
exports.put = function (request, response) {
    const attendee = Object.assign({}, request.body);
    const resolve = (attendee) => {
        response.status(200);
        response.json(attendee);
    };

    attendeeService.update(attendee)
        .then(resolve)
        .catch(renderErrorResponse(response));
};
