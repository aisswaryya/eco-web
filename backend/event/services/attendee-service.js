'use strict';
//mongoose for db
const mongoose = require('mongoose');
require('../models/attendee.js');
const Attendee = mongoose.model('attendee');


/**
 * Saving the new Attendee object
 */
exports.save = function (attendee) {
    const newAttendee = new Attendee(attendee);
    const promise = newAttendee.save();
    return promise;
};


/**
 * Returning the Attendee object in the response based on the id requested
 */
exports.get = function (attendeeId) {
    const promise = Attendee.findById(attendeeId).exec();
    return promise;
};

/**
 * Searches and returns the Attendee objects based on emailId/eventId/all
 */
exports.search = function (searchBy, value) {

    let promise;

    if (searchBy === 'emailId') {
        promise = Attendee.find({ emailId: value }).exec();
    } else if (searchBy === 'eventId') {
        promise = Attendee.find({ eventId: value }).exec();
    } else {
        promise = Attendee.find().exec();
    }

    return promise;

};


/**
 * Updating the Attendee object based on the id parameter passed
 */
exports.update = function (attendee) {
    attendee.modified_date = new Date();
    const promise = Attendee.findOneAndUpdate({ _id: attendee._id }, attendee).exec();
    return promise;
};

/**
 * Deleting the Attendee object based on the id parameter passed
 */
exports.delete = function (attendeeId) {
    const promise = Attendee.remove({ _id: attendeeId });
    return promise;
};


//Deleting an attendee based on eventId
exports.deleteBasedOnEventId = function (attendeeId) {
    const promise = Attendee.remove({ eventId: attendeeId });
    return promise;
};