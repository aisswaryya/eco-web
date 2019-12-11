'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 *  Schema for Event object.
 */
let Event = new Schema({

    /**
     * Name of the Event.
     */
    name: {
        type: String
    },


    /**
     * Cause of the event
     */
    cause: {
        type: String
    },


    /**
     * Venue of the event
     */
    venue: {
        type: String
    },


    /**
     * Latitude of the event to show in google maps
     */
    lat: {
        type: Number
    },


    /**
     * longitude of the event to show in google maps
     */
    lng: {
        type: Number
    },


    /**
     * Description of the event
     */
    description: {
        type: String
    },


    /**
     * Status of the Event (UPCOMING, COMPLETED, CANCELLED).
     */
    status: {
        type: String
    },


    /**
     * Event Start date.
     */
    dateOfEvent: {
        type: Date
    },


    /**
     * Event created date.
     */
    createdDate: {
        type: Date,
        default: Date.now
    },
    

    /**
     * Name of the host who initialized the event
     */
    hostName: {
        type: String
    },


    /**
     * Private/Public event
     */
    creatorEmailId: {
        type: String
    },


    /**
     * Time storing the time of the event
     */
    time: {
        hour: {
            type: Number
        }
        ,
        minute: {
            type: Number
        }
    },


    /**
     * Date information storing it in year, month and date
     */
    dateOfEvent:
    {
        year: {
            type: Number
        }
        ,

        month: {
            type: Number
        }
        ,
        day: {
            type: Number
        }
    },
    

    /**
     * The number of users attending the event
     */
    attendeeCount: {
        type: Number
    },
    

    /**
     * Max attendees
     */
    maxAttendees: {
        type: Number
    }
}, {
    versionKey: false
});

// Duplicate the id field as mongoose returns _id field instead of id.
Event.virtual('id').get(function () {
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
Event.set('toJSON', {
    virtuals: true
});

module.exports = mongoose.model('event', Event);