/**
 * Service for social feed operations.
 */

'use strict';
const mongoose = require('mongoose'),
    Socialfeed = mongoose.model('socialfeeds'); 

/**
 * 
 * @param {Object} searchBy {Search parameters}
 * @param {String} value {Search parameters}
 * 
 */
exports.search = function (searchBy, value) {
    if(searchBy === 'emailId') {
        const promise = Socialfeed.find({emailId: value}).sort({createdDate: 'descending'}).exec();
        return promise;
    }
    else {
        const promise = Socialfeed.find().sort({createdDate: 'descending'}).exec();
        return promise;
    }
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