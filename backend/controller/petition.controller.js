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


}