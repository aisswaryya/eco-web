/**
 * Service for signature operation
 */
'use strict';
/**
 * imports
 *
 * @type {Mongoose}
 */
const Signature= require('../../signature/model/signature.model');
/**
 * Saves and returns the new signature object.
 *
 * @param signature
 * @returns {Promise|void|*}
 */
exports.save = function (signature) {
    const newSignature = new Signature(signature);
    const promise = newSignature.save();
    return promise;
};

/**
 * Returns Signature List
 * 
 * @returns {Promise|void|*}
 */
exports.findAll = function () {
    const promise = Signature.find();
    return promise;
};

/**
 * Returns Signature By Petition ID
 * 
 * @returns {Promise|void|*}
 */
exports.findByPetitionId = function (id) {
    const promise = Signature.find({ petitionId:  id})
    return promise;
};

/**
 * Returns Signature By Petition ID
 * 
 * @returns {Promise|void|*}
 */
exports.getSignatureCount = function (id) {
    const promise = Signature.countDocuments({ petitionId:  id});
    return promise;
};

/**
 * Returns Signature By Petition ID
 * 
 * @returns {Promise|void|*}
 */
exports.findByEmailId = function (id) {
    const promise = Signature.find({ email:  id})
    return promise;
};