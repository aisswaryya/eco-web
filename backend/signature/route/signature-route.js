'use strict';
module.exports = function (app) {
const signatureController = require('../controller/signature.controller');

//Signature route for create and browse
app.route('/signature')
.get(signatureController.findAll)
.post(signatureController.create);

//Signature for getById, updatebyId,deleteById
app.route('/signature/:petitionId')
.get(signatureController.findOne);

app.route('/signature/total/count')
.get(signatureController.getSignatureDocumentCount);

app.route('/signature/count/:petitionId')
.get(signatureController.getSignatureCount);

app.route('/signature/email/:email')
.get(signatureController.findByEmailId);
};
