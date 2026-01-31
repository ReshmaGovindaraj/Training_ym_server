import { hashpassword, passwordcheck } from "../utils/hash.js";
import { createToken } from "../utils/token.js";
import AuthUserModel from "../Model/authuserModel.js";
import userModel from "../Model/userModel.js";

export const authSignup = async (req,res) => {
    try{
        const {name,email,password,role}=req.body

        const checkEmail = await AuthUserModel.userLoginModel(email)

        if(checkEmail){
            return res.status(500).json({message:"email already exists"})
        }
        const newpassword=await hashpassword(password);

        const id=await AuthUserModel.userSignupModel(
            {
                name:name,
                email: email,
                password: newpassword,
                role:role|| "user"
        })
        res.status(201).json({
            message:"user has been created",
            userid: id
        })
    }catch(err){
        res.status(500).json({error:err.message})
    }
}

export const authlogin=async(req,res) => {
    try{
        const{email,password} = req.body
        const user = await AuthUserModel.userLoginModel(email);
        
        if(!user){
            return res.status(400).json({message:"invalid credentials"})
        }
        
        const userPassword=await passwordcheck(password, user.password)
        if(!userPassword){
            return res.status(400).json({
            message: "wrong password"
        })
    }
    const token=createToken({
        id:user.id,
        role:user.role
    })
    res.status(200).json({message:"login success",token})
    }
    catch(err){
        res.status(500).json({error:err.message})
    }
}