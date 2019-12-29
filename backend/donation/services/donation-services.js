/**
 * Service for donation operation
 */
'use strict';
/**
 * imports
 *
 * @type {Mongoose}
 */
const mongoose = require('mongoose'),
    Donation = mongoose.model('donation');

/**
 * Returns an array of Donation objects matching the search parameters.
 *
 * @returns {Promise}
 * @param searchkey
 * @param value
 */
exports.search = function (searchkey, value) {
    // Search by email Id
    if(searchkey === 'emailId') {
        const promise = Donation.find({emailId: value}).exec();
        return promise;
    } else if(searchkey === 'fundraiserId') {
        //search by fundraiserId
        const promise = Donation.find({fundraiserId: value}).exec();
        return promise;
    } else {
        // regular search
        const promise = Donation.find({fundraiserId: value}).exec();
        return promise;
    }
};

/**
 * Saves and returns the new donation object.
 *
 * @param donation
 * @returns {Promise|void|*}
 */
exports.save = function (donation) {
    const newDonation = new Donation(donation);
    const promise = newDonation.save();
    return promise;
};

/**
 * Returns the Donation object matching the id.
 *
 * @param donationId
 * @returns {Promise}
 */
exports.get = function (donationId) {
    const promise = Donation.findById(donationId).exec();
    return promise;
}
