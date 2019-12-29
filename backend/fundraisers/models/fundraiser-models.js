/**
 * Model for fundraiser object
 * @type {Mongoose}
 */

const mongoose = require('mongoose');


//import schema from mongoose
const Schema = mongoose.Schema;

// Fundraiser Model
let FundraiserModel = new Schema({

    //Title of the fundraiser
    title: {
        type: String,
        required: "title is required"
    },

    //Category of the Fundraiser. Should be changed to enum
    category: {
        type: String,
        required: "Category is required"
    },

    //Set to inactive once target amount is reached
    active: {
        type: Boolean,
        default: true
    },

    // email id of the creator
    emailId: {
        type: String,
        required: "Email is required"
    },

    // short description of Fundraiser
    shortDescription: {
        type: String,
    },

    //description of Fundraiser
    longDescription: {
        type: String,
    },

    //target Amount to be reached
    targetAmount: {
        type: Number,
        default: 0
    },

    //bank account number
    accountNo: {
        type: String,
        default: '0000000000'
    },

    //bank routing number
    routingNo: {
        type: String,
        default: '00000000'
    },


    // Collected amount incremented as people donate money
    collectedAmount: {
        type: Number,
        default: 0
    },

    //creation Date
    createdDate: {
        type: Date,
        default: Date.now()
    },

    //modified date
    modifiedDate: {
        type: Date,
        default: Date.now
    }
}, {
    versionKey: false
});


// Duplicate the id field as mongoose returns _id field instead of id.
FundraiserModel.virtual('id').get(function () {
    return this._id.toHexString();
});

//Ensure virtual fields are serialized
FundraiserModel.set('toJSON', {
    virtuals: true
});

module.exports = mongoose.model('fundraiser', FundraiserModel);
