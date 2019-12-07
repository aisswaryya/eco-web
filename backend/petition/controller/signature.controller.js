const Signature= require('../model/signature.model.js');

//create a signature error handling
exports.create=(req,res)=>{
    if(!req.body.petitionId){
        return res.status(400).send({
            message:"petitionId cannot be empty"
        });
    }
// create a signature
const signature = new Signature({
    name: req.body.name || "Untited signature",
    petitionId:req.body.petitionId,
    email:req.body.email,
    signed:false
    //signatureId:req.body.signatureId
});

// Save signature in the database
signature.save()
.then(data => {
    res.send(data);
}).catch(err => {
    res.status(500).send({
        message: err.message || "Some error occurred while creating signature."
    });
});
};

// get all signature
exports.findAll = (req, res) => {
    Signature.find()
    .then(signatureList => {
        res.send(signatureList);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving signature list."
        });
    });
};

//get signature by ID 
exports.findOne =(req,res) => {
    Signature.find({ petitionId: req.params.petitionId})
    .then(signature => {
        if(!signature) {
            return res.status(404).send({
                message: "Signature not found with id " + req.params.petitionId
            });            
        }
        res.send(signature);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Signature not found with id " + req.params.petitionId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving signature with id " + req.params.petitionId
        });
    });
};

//count of signature wrt petitionId
exports.getSignatureCount = (req, res) => {
    Signature.countDocuments({ petitionId:  req.params.petitionId}, function (err, count) {
        console.log('there are %d signatures', count);
       // res.sendStatus(count);
       return  res.status(200).send({
            count
        });
      });
} 

// get all signature
exports.getSignatureDocumentCount = (req, res) => {
    Signature.find()
    .then(signatureList => {
        var count = signatureList.length;
        return res.status(200).send({
            count
        });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving signature list."
        });
    });
};

    // Update a signature identified by Id error handling
    exports.update = (req, res) => {
    // Validate Request
    if(!req.body.petitionId) {
        return res.status(400).send({
            message: "signature petitionID can not be empty"
        });
    }

    // Find signature by petitionId and update it with the request body
        Signature.findByIdAndUpdate(req.params.petitionId, {
        name: req.body.name || "Untited signature",
        petitionId:req.body.petitionId,
        email:req.body.email,
        signature:req.body.signature
}, {new: true})
.then(signature => {
    if(!signature) {
        return res.status(404).send({
            message: "Signature not found with id " + req.params.petitionId
        });
    }
    res.send(signature);
}).catch(err => {
    if(err.kind === 'ObjectId') {
        return res.status(404).send({
            message: "signature not found with id " + req.params.petitionId
        });                
    }
    return res.status(500).send({
        message: "Error updating signature with id " + req.params.petitionId
    });
});
};

// Delete a signature by petitionId 
exports.delete = (req, res) => {
    Signature.findByIdAndRemove(req.params.petitionId)
    .then(signature => {
        if(!signature) {
            return res.status(404).send({
                message: "Signature not found with id " + req.params.petitionId
            });
        }
        res.send({message: "signature deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "signature not found with id " + req.params.petitionId
            });                
        }
        return res.status(500).send({
            message: "Can not delete signature with the provided petitionId " + req.params.petitionId
        });
    });
};




