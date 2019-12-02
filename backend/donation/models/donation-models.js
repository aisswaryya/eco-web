/**
 * Model for donation object
 * @type {Mongoose}
 */

const mongoose = require('mongoose');


//import schema from mongoose
const Schema = mongoose.Schema;

let DonationModel = new Schema({

    //Foreign key to fundraiser table
    fundraiserId: {
        type: String
    },

    //email id of the donor
    emailId: {
        type: String,
        required: "Email is required"
    },

    //Donation amount
    amount: {
        type: Number,
        default: 0
    },

    //creation Date
    createdDate: {
        type: Date,
        default: Date.now()
    }
}, {
    versionKey: false
});


// Duplicate the id field as mongoose returns _id field instead of id.
DonationModel.virtual('id').get(function () {
    return this._id.toHexString();
});

//Ensure virtual fields are serialized
DonationModel.set('toJSON', {
    virtuals: true
});

module.exports = mongoose.model('donation', DonationModel);
