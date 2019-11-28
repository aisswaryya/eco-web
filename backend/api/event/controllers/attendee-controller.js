const attendeeService = require('../services/attendee-service');

/**
 * Creating a new Attendee
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
 * Listing all the Attendee
 */
exports.list = function (request, response) {
    const resolve = (attendees) => {
        response.status(200);
        response.json(attendees);
    };
    attendeeService.find({})
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
 * updating based on id
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

