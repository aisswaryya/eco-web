'use strict';
//mongoose for db
const mongoose = require('mongoose');
require('../models/event.js');
const Event = mongoose.model('event');


/**
 * Finding the Event based on id
 */
exports.find = function () {
    const promise = Event.find().exec();
    return promise;
};


/**
 * Saving the new Event object
 */
exports.save = function (todo) {
    const newEvent = new Event(todo);

    console.log(newEvent);

    const promise = newEvent.save();
    return promise;
};


/**
 * Returning the Event object in the response
 */
exports.get = function (eventId) {
    const promise = Event.findById(eventId).exec();
    return promise
};

/**
 * Updating the Event object based on the id parameter passed
 */
exports.update = function (event) {
    event.modified_date = new Date();
    const promise = Event.findOneAndUpdate({_id: event._id}, event).exec();
    return promise;
};

/**
 * Deleting the Event object based on the id parameter passed
 */
exports.delete = function (eventId) {
    const promise = Event.remove({_id: eventId});
    return promise;
};


/**
 * Finding the Events based on the attendees Emaild
 */
exports.findByCreatorEmail = function (value) {
    console.log(value);
    const promise = Event.find({creatorEmailId: value}).exec();
    return promise;
};