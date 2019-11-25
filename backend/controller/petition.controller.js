const Petition= require('../model/petition.model.js/index.js');

//create a petition error handling
exports.create=(req,res)=>{
    if(!req.body.description){
        return res.status(400).send({
            message:"petition cannot be empty"
        });
    }
// create a petition
const petition = new Petition({
    title: req.body.title || "Untited petition",
    target:req.body.target,
    description: req.body.description,
    mediapath: req.body.mediapath,
    email:req.body.email,
    category:req.body.category,
    username:req.body.username
});

// Save Petition in the database
petition.save()
.then(data => {
    res.send(data);
}).catch(err => {
    res.status(500).send({
        message: err.message || "Some error occurred while creating Petition."
    });
});
};

// get all petition
exports.findAll = (req, res) => {
    Petition.find()
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
    Petition.findById(req.params.petitionId)
    .then(petition => {
        if(!petiton) {
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