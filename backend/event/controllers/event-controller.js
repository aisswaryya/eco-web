const eventService = require('../services/event-service');
const attendeeService = require('../services/attendee-service');

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
 * Listing all the Events
 */
exports.list = function (request, response) {
    const resolve = (events) => {
        response.status(200);
        response.json(events);
    };

    //searching based on creatorEmailId for listing
    if (request.query.creatorEmailId !== undefined) {

        //search based on eventId
        console.log('Searching Events by Attendee Email Id');
        eventService.findByCreatorEmail(request.query.creatorEmailId)
            .then(resolve)
            .catch(renderErrorResponse(response));

    } else {
        //returning all the events
        eventService.find()
            .then(resolve)
            .catch(renderErrorResponse(response));
    }
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
 * Editing the Event put method. 
 * The event which will have the status as CANCELLED 
 * will also delete the attendee objects for this Event
 */
exports.put = function (request, response) {
    const event = Object.assign({}, request.body);
    const resolve = (event) => {
        response.status(200);
        response.json(event);
    };

    //Deleting all attendee along with cancelling the event 
    if( event.status === 'CANCELLED' ){

        console.log(event);

        //Running two queries and returning the same promise
        var promises = [
            eventService.update(event),
            attendeeService.deleteBasedOnEventId(event._id)
        ];
    
        Promise.all(promises)
            .then(resolve)
            .catch(renderErrorResponse(response));

    } else {

        //Default put
        eventService.update(event)
            .then(resolve)
            .catch(renderErrorResponse(response));

    }


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

