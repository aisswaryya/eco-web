/**
 * Service for fundraiser operation
 */
'use strict';
/**
 * imports
 *
 * @type {Mongoose}
 */
const mongoose = require('mongoose'),
    Fundraiser = mongoose.model('fundraiser');

/**
 * Returns an array of Fundraiser objects matching the search parameters.
 *
 * @param key, value
 * @returns {Promise}
 */
exports.search = function (key, value) {
    const promise = Fundraiser.find({key: value}).exec();
    return promise;
};

/**
 * Saves and returns the new fundraiser object.
 *
 * @param fundraiser
 * @returns {Promise|void|*}
 */
exports.save = function (fundraiser) {
    const newFundraiser = new Fundraiser(fundraiser);
    const promise = newFundraiser.save();
    return promise;
};

/**
 * Returns the Fundraiser object matching the id.
 *
 * @param fundraiserId
 * @returns {Promise}
 */
exports.get = function (fundraiserId) {
    const promise = Fundraiser.findById(fundraiserId).exec();
    return promise;
}

/**
 * Updates and returns the fundraiser object.
 *
 * @param fundraiser
 * @returns {Promise}
 */
exports.update = function (fundraiser) {
    fundraiser.modifiedDate = new Date();
    const promise = Fundraiser.findOneAndUpdate({_id: fundraiser._id}, fundraiser, {new: true}).exec();
    return promise;
};

/**
 * Deletes the fundraiser object matching the id.
 *
 * @param fundraiserId
 * @returns {*}
 */
exports.delete = function (fundraiserId) {
    const promise = Fundraiser.remove({_id: fundraiserId});
    return promise;
}
