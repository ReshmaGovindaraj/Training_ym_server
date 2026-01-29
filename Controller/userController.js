import userModel from '../Model/userModel.js';

//user create
export const createUserController=async(req,res)=>{
    try{
        const {name,email,password}=req.body
        const response=await userModel.createUserModel({name,email,password});
    
        res.status(201).json({
            message:"user has been created",
            userId:response
        })
    }
    catch(err){
        res.status(500).json({
            error:err.message
          //message:"Invalid user"
          });
        }
    }
      
    
//get all the users
export const getAllUsersController = async(req,res) => {
    try{
    const data=await userModel.getAllUserModel();
    res.json(data)
    }catch(err){
        res.status(500).json({error:err.message})
    }
}

export  const updateUserPasswordController = async (req,res) => {
    try{
        //const{id}=req.params;
        const{password}=req.body;
        const updatePassword=await userModel.updateUserPasswordModel(req.params.id,{password});
        if(!updatePassword){
            res.json({message:"user not found"})
        }
        else{
            res.json({message:"password has been updated"})
        }
    }
    catch(err){
            res.status(500).json({error:err.message})
    }
}

export const deleteuserController = async(req,res) => {
     try{
        //const{id}=req.params;
        const delte=await userModel.deleteUserModel(req.params.id);
        if(!delte){
            res.json({message:"user not found"})
        }
        else{
            res.status(200).json({message:"user has been removed from ur table"})
        }
    }
    catch(err){
            res.status(500).json({error:err.message})
    }
}

    
