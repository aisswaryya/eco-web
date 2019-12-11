'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 *  Schema for Attendee object.
 */
let Attendee = new Schema({

    /**
     * Attendee name.
     */
    eventId: {
        type: String
    },


    /**
     * Attendee email storing the origin user email 
     */
    emailId: {
        type: String
    },


    /**
     * The event name this attendee will attend
     */
    eventName: {
        type: String
    },

    /**
     * The event date this attendee will attend
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
    }
    
}, {
    versionKey: false
});

// Duplicate the id field as mongoose returns _id field instead of id.
Attendee.virtual('id').get(function(){
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
Attendee.set('toJSON', {
    virtuals: true
});

module.exports = mongoose.model('attendee', Attendee);