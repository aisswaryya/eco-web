const mongoose = require('mongoose');

const PetitionSchema = mongoose.Schema({
    title: String,
    description: String,
    mediapath: String,
    email: String,
    category: String,
    username: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Petition', PetitionSchema);
