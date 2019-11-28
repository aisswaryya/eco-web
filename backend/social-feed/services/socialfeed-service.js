/**
 * Service for social feed operations.
 */

'use strict';
const mongoose = require('mongoose'),
    Socialfeed = mongoose.model('socialfeeds'); 

/**
 * Returns an array of socialfeed object matching the search parameters.
 *
 * @param {Object} params {Search parameters}
 */
exports.search = function (params) {
    const promise = Socialfeed.find(params).exec();
    return promise;
};

/**
 * Saves and returns the new socialfeed object.
 *
 * @param {Object} socialfeed {socialfeed object}
 */
exports.save = function (socialfeed) {
    const newSocialfeed = new Socialfeed(socialfeed);
    const promise = newSocialfeed.save();
    return promise;
};

/**
 * Returns the socialfeed object matching the id.
 *
 * @param {string} socialfeedId {Id of the socialfeed object}
 */
exports.get = function (socialfeedId) {
    const promise = Socialfeed.findById(socialfeedId).exec();
    return promise
};

/**
 * Updates and returns the socialfeed object.
 *
 * @param {Object} socialfeed {socialfeed object}
 */
exports.update = function (socialfeed) {
    const promise = Socialfeed.findOneAndUpdate({_id: socialfeed._id}, socialfeed, {new:true}).exec();
    return promise;
};

/**
 * Deletes the socialfeed object matching the id.
 *
 * @param {string} socialfeedId {Id of the socialfeed object}
 */
exports.delete = function (socialfeedId) {
    const promise = Socialfeed.remove({_id: socialfeedId});
    return promise;
};