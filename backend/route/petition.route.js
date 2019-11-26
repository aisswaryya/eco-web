module.exports = (app) => {
    const petition = require('../controller/petition.controller.js');

    // Create a new Petition
    app.post('/petition', petition.create);

    // Retrieve all petition as List
    app.get('/petition', petition.findAll);

    // Retrieve a single petition with petitionId
    app.get('/petition/:petitionId', petition.findOne);

    
    // Update a Petition with petitionId
    app.put('/petition/:petitionId', petition.update);

    // Delete a Petition with petitionId
    app.delete('/petition/:petitionId', petition.delete);

    
    
}