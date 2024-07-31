var Userdb=require('../model/model');

//create and save new user
exports.create=(req,res)=>{

    const user=new Userdb({
        name:req.body.name,
        gender:req.body.gender,
        status:req.body.status
    })
    //save user in the databse
    user
    .save(user)
    .then(data=>{
        // res.send(data)
        res.redirect('/add-user');
    })
    .catch(err=>{
        res.status(500).send({
            message:err.message||"Some error occured while creating a crete operation"
        });
    });
}


//retrive and return all users 
exports.find=(req,res)=>{
Userdb.find()
.then(user=>{
    res.send(user)
})
.catch(err=>{
    res.status(500).send({message:err.message ||"error occurred file retriving information"})
})
}



//update a new user
exports.update=(req,res)=>{
   

    const id=req.params.id;
    Userdb.findByIdAndUpdate(id,req.body,{useFindAndModify:false})
    .then(data=>{
        if(!data){
            res.status(400).send({message:"cannot update user with ${id}"})
        }
        else{
            res.send(data)
        }
    })
    .catch(err=>{
        res.status(500).send({message:err.message ||"error occurred file retriving information"})
    })


}

//delete a new user with specified user id 

exports.delete=(req,res)=>{
    const id=req.params.id;
    Userdb.findByIdAndDelete(id)
    .then(data=>{
        if(!data){
            res.status(400).send({message:`cannot delete with id ${id}.may be id is wrong`})
        }
        else{
            res.send({
                message:"user was deleted successfully"
            })
        }
    })
    .catch(err=>{
        res.status(500).send({
            message:"could not delete user id="+id
        });
    });
}