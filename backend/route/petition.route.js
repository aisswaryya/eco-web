module.exports = (app) => {
    const petition = require('../controller/petition.controller.js');

    // Create a new Petition
    app.post('/petition', petition.create);

    // Retrieve all petition as List
    app.get('/petition', petition.findAll);

    // Retrieve a single Todo with todoId
    app.get('/petition/:petitionId', petition.findOne);

    
}