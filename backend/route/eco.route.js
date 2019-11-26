module.exports = (app) => {
    const petition = require('../controller/petition.controller.js');
    const signature = require('../controller/signature.controller.js');

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

    // Create a new Signature
    app.post('/signature', signature.create);

    // Retrieve all signature as List
    app.get('/signature', signature.findAll);

    // Retrieve a single signature with petitionId
    app.get('/signature/:petitionId', signature.findOne);

    
    // Update a signature with petitionId
    app.put('/signature/:petitionId', signature.update);

    // Delete a Signature with petitionId
    app.delete('/signature/:petitionId', signature.delete);
    
    
}