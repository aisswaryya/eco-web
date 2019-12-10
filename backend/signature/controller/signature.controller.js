const Signature= require('../model/signature.model');

/**
 * Import Signature services
 */
const signatureService = require('../service/signature-service');

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
    signed:req.body.signed
    });

// Save signature in the database
signatureService.save(signature)
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
    signatureService.findAll()
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
    signatureService.findByPetitionId(req.params.petitionId)
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
    signatureService.getSignatureCount(req.params.petitionId)
    .then(count => {
        console.log('there are %d signatures', count);
       return  res.status(200).send({
            count
        });
    }).catch(err => {
       return res.status(500).send({
            message: "Error retrieving signature with id " + req.params.petitionId
        });
    });
}; 

// get all signature
exports.getSignatureDocumentCount = (req, res) => {
    signatureService.findAll()
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

//get signature, petition by emailId - signed petition
exports.findByEmailId = (req,res) => {
    signatureService.findByEmailId(req.params.email)
    .then(signature => {
        if(!signature) {
            return res.status(404).send({
                message: "Signature not found with id " + req.params.email
            });            
        }
        res.send(signature);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Signature not found with id " + req.params.email
            });                
        }
        return res.status(500).send({
            message: "Error retrieving signature with id " + req.params.email
        });
    });
};