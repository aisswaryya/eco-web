/**
 * Service for petition operation
 */
'use strict';
/**
 * imports
 *
 * @type {Mongoose}
 */
const Petition= require('../model/petition.model.js');
/**
 * Saves and returns the new petition object.
 *
 * @param petition
 * @returns {Promise|void|*}
 */
exports.save = function (petition) {
    const newPetition = new Petition(petition);
    const promise = newPetition.save();
    return promise;
};

/**
 * Returns Petition List
 * 
 * @returns {Promise|void|*}
 */
exports.findAll = function () {
    const promise = Petition.find();
    return promise;
};

/**
 * Returns Petition 
 * 
 * @returns {Promise|void|*}
 */
exports.findById = function (id) {
    const promise = Petition.findById(id);
    return promise;
};

/**
 * Returns updated Petition 
 * 
 * @returns {Promise|void|*}
 */
exports.findByIdAndUpdate = function (req) {
    const promise = Petition.findByIdAndUpdate(req.params.petitionId, {
        title: req.body.title || "Untited petition",
        target:req.body.target,
        shortDescription: req.body.shortDescription,
        briefDescription: req.body.briefDescription,
        mediapath: req.body.mediapath,
        email:req.body.email,
        category:req.body.category,
        createdby:req.body.createdby
    }, {new: true});
    return promise;
};

/**
 * Returns updated Petition 
 * 
 * @returns {Promise|void|*}
 */
exports.delete = function (id) {
    const promise = Petition.findByIdAndRemove(id);
    return promise;
};

/**
 * Returns Petition By Email ID
 * 
 * @returns {Promise|void|*}
 */
exports.findByEmailId = function (id) {
    const promise = Petition.find({ email:  id})
    return promise;
};