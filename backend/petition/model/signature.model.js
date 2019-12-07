const mongoose = require('mongoose');

const SignatureSchema = mongoose.Schema({
    name: String,
    petitionId: String,
    email: String,
    signed:Boolean
    //signatureId: String
    }, {
    timestamps: true
});

module.exports = mongoose.model('Signature', SignatureSchema);

