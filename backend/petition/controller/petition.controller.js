const Petition= require('../model/petition.model.js');

/**
 * Import petition services
 */
const petitionService = require('../service/petition-service');

//create a petition error handling
exports.create=(req,res)=>{
    if(!req.body.briefDescription){
        return res.status(400).send({
            message:"petition cannot be empty"
        });
    }
// create a petition
const petition = new Petition({
    title: req.body.title || "Untited petition",
    target:req.body.target,
    shortDescription: req.body.shortDescription,
    briefDescription: req.body.briefDescription,
    mediapath: req.body.mediapath,
    email:req.body.email,
    category:req.body.category,
    createdby:req.body.createdby,
    victory:false
});

petitionService.save(petition)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating Petition."
            });
        });
};

// get all petition
exports.findAll = (req, res) => {
    petitionService.findAll()
    .then(petitionList => {
        res.send(petitionList);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving petition list."
        });
    });
};

//get petition by ID 
exports.findOne =(req,res) => {
    petitionService.findById(req.params.petitionId)
    .then(petition => {
        if(!petition) {
            return res.status(404).send({
                message: "Petition not found with id " + req.params.petitionId
            });            
        }
        res.send(petition);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Petition not found with id " + req.params.petitionId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving petition with id " + req.params.petitionId
        });
    });
};

// Update a petition identified by Id error handling
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.briefDescription) {
        return res.status(400).send({
            message: "Petition description can not be empty"
        });
    }

    // Find petition by petitionID and update it with the request body
petitionService.findByIdAndUpdate(req)
.then(petition => {
    if(!petition) {
        return res.status(404).send({
            message: "Petition not found with id " + req.params.petitionId
        });
    }
    res.send(petition);
}).catch(err => {
    if(err.kind === 'ObjectId') {
        return res.status(404).send({
            message: "petition not found with id " + req.params.petitionId
        });                
    }
    return res.status(500).send({
        message: "Error updating petition with id " + req.params.petitionId
    });
});
};

// Delete a petition by petitionId 
exports.delete = (req, res) => {
    petitionService.delete(req.params.petitionId)
    .then(petition => {
        if(!petition) {
            return res.status(404).send({
                message: "Petition not found with id " + req.params.petitionId
            });
        }
        res.send({message: "Petition deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Petition not found with id " + req.params.petitionId
            });                
        }
        return res.status(500).send({
            message: "Can not delete petition with the provided petitionid " + req.params.petitionId
        });
    });
};

//get petition by emailID - petition started
exports.findByEmailId =(req,res) => {
    petitionService.findByEmailId(req.params.email)
    .then(petition => {
        if(!petition) {
            return res.status(404).send({
                message: "Petition not found with id " + req.params.email
            });            
        }
        res.send(petition);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Petition not found with id " + req.params.email
            });                
        }
        return res.status(500).send({
            message: "Error retrieving petition with id " + req.params.email
        });
    });
};





