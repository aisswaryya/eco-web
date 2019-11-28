'use strict';
//mongoose for db
const mongoose = require('mongoose'),
Attendee = mongoose.model('attendee');


/**
 * Finding the Attendee based on id
 */
exports.find = function (params) {
    const promise = Attendee.find(params).exec();
    return promise;
};


/**
 * Saving the new Attendee object
 */
exports.save = function (attendee) {
    const newAttendee = new Attendee(attendee);
    const promise = newAttendee.save();
    return promise;
};


/**
 * Returning the Attendee object in the response
 */
exports.get = function (attendeeId) {
    const promise = Attendee.findById(attendeeId).exec();
    return promise
};

/**
 * Updating the Attendee object based on the id parameter passed
 */
exports.update = function (attendee) {
    attendee.modified_date = new Date();
    const promise = Attendee.findOneAndUpdate({_id: attendee._id}, attendee).exec();
    return promise;
};

/**
 * Deleting the Attendee object based on the id parameter passed
 */
exports.delete = function (attendeeId) {
    const promise = Attendee.remove({_id: attendeeId});
    return promise;
};