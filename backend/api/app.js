module.exports = function (app) {
    require('./event/models/event');
    require('./event/models/attendee');

    // event routes init
    let eventRoutes = require('./event/routes/event-route');
    eventRoutes(app);

    // attendee routes init
    let attendeeRoutes = require('./event/routes/attendee-route');
    attendeeRoutes(app);
};