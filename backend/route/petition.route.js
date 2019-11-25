module.exports = (app) => {
    const petition = require('../controller/petition.controller.js');

    // Create a new Petition
    app.post('/petition', petition.create);

    
}