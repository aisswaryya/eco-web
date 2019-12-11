

    // //Retrieve petition by emailId
    // app.get('/petition/email/:email',petition.findByEmailId);
    /**
 * route function
 *
 * @param app
 */
'use strict';
module.exports = function (app) {
const petitionController = require('../controller/petition.controller');

//Signature route for create and browse
app.route('/petition')
.get(petitionController.findAll)
.post(petitionController.create);

//Signature for getById, updatebyId,deleteById
app.route('/petition/:petitionId')
.get(petitionController.findOne)
.put(petitionController.update)
.delete(petitionController.delete);

app.route('/petition/email/:email')
.get(petitionController.findByEmailId);

}
