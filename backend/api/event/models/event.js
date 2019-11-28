'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 *  Schema for Event object.
 */
let Event = new Schema({

    /**
     * Event title.
     */
    title: {
        type: String
    },

    description: {
        type: String
    },

    cause: {
        type: String
    },

    /**
     * Status of the Event note.
     */
    completed: {
        type: Boolean,
        default: false
    },
    
    /**
     * Event created date.
     */
    createdDate: {
        type: Date,
        default: Date.now
    },

    /**
     * Due date.
     */
    dueDate: {
        type: Date,
        default: Date.now
    },

    // attendees: [
    //     {
    //         ref: 'Attendee',
    //         type: mongoose.Schema.Types.ObjectId
    //     }
    // ]

    attendees: {
        // ref: 'Attendee',
        // type: mongoose.Schema.Types.ObjectId

        name: {
            type: String
        },
    
        email: {
            type: String
        }

    }
    
}, {
    versionKey: false
});

// Duplicate the id field as mongoose returns _id field instead of id.
Event.virtual('id').get(function(){
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
Event.set('toJSON', {
    virtuals: true
});

module.exports = mongoose.model('event', Event);