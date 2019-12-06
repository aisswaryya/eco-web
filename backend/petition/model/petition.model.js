const mongoose = require('mongoose');

const PetitionSchema = mongoose.Schema({
    title: String,
    target: String,
    shortDescription: String,
    briefDescription: String,
    mediapath: String,
    email: String,
    category: String,
    createdby: String
    
}, {
    timestamps: true
});

module.exports = mongoose.model('Petition', PetitionSchema);
