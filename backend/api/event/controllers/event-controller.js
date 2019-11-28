const eventService = require('../services/event-service');

/**
 * Creating a new Event
 */
exports.post = function (request, response) {
    const newEvent = Object.assign({}, request.body);
    const resolve = (event) => {
        response.status(200);
        response.json(event);
    };
    
    eventService.save(newEvent)
        .then(resolve)
        .catch(renderErrorResponse(response));
};

/**
 * Listing all the Event
 */
exports.list = function (request, response) {
    const resolve = (events) => {
        response.status(200);
        response.json(events);
    };
    eventService.find({})
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
 * Returning the Event based on id
 */
exports.get = function (request, response) {
    const resolve = (event) => {
        response.status(200);
        response.json(event);
    };
    eventService.get(request.params.eventId)
        .then(resolve)
        .catch(renderErrorResponse(response));
};

/**
 * updating based on id
 */
exports.put = function (request, response) {
    const event = Object.assign({}, request.body);
    const resolve = (event) => {
        response.status(200);
        response.json(event);
    };

    eventService.update(event)
        .then(resolve)
        .catch(renderErrorResponse(response));
};

/**
 * Deleting based on id
 */
exports.delete = function (request, response) {
    const resolve = (event) => {
        response.status(200);
        response.json({
            message: 'Event Successfully deleted'
        });
    };
    eventService.delete(request.params.eventId)
        .then(resolve)
        .catch(renderErrorResponse(response));
};

