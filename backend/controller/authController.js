import User from "../model/userModel.js";
import validator from "validator"
import bcrypt from "bcryptjs"
import { genToken, genToken1 } from "../config/token.js";


export const registration = async (req,res) => {
  try {
    const {name , email, password} = req.body;
    const existUser = await User.findOne({email})
    if(existUser){
        return res.status(400).json({message:"User already exist"})
    }
    if(!validator.isEmail(email)){
         return res.status(400).json({message:"Enter valid Email"})
    }
    if(password.length < 8){
        return res.status(400).json({message:"Enter Strong Password"})
    }
    let hashPassword = await bcrypt.hash(password,10)

    const user = await User.create({name,email,password:hashPassword})
    let token = await genToken(user._id)
    res.cookie("token",token,{
        httpOnly:true,
        secure:false,
        sameSite: "Strict",
        maxAge: 7 * 24 * 60 * 60 * 1000
    })
    return res.status(201).json(user)
  } catch (error) {
    console.log("registration error")
    return res.status(500).json({message:`registration error ${error}`})
  }
    
}


export const login = async (req,res) => {
    try {
        let {email,password} = req.body;
        let user = await User.findOne({email}) 
        if(!user){
            return res.status(404).json({message:"User is not Found"})
        }
        let isMatch = await bcrypt.compare(password,user.password)
        if(!isMatch){
            return res.status(400).json({message:"Incorrect password"})
        }
        let token = await genToken(user._id)
        res.cookie("token",token,{
        httpOnly:true,
        secure:false,
        sameSite: "Strict",
        maxAge: 7 * 24 * 60 * 60 * 1000
    })
    return res.status(201).json(user)

    } catch (error) {
         console.log("login error")
    return res.status(500).json({message:`Login error ${error}`})
        
    }
    
}
export const logOut = async (req,res) => {
try {
    res.clearCookie("token")
    return res.status(200).json({message:"logOut successful"})
} catch (error) {
    console.log("logOut error")
    return res.status(500).json({message:`LogOut error ${error}`})
}
    
}


export const googleLogin = async (req,res) => {
    try {
         console.log("BODY:", req.body);
        let {name , email} = req.body;
         let user = await User.findOne({email}) 
        if(!user){
          user = await User.create({
            name,email,
            password:"google-auth"
        })
        }
       
        let token = await genToken(user._id)
        res.cookie("token",token,{
        httpOnly:true,
        secure:false,
        sameSite: "Lax",
        maxAge: 7 * 24 * 60 * 60 * 1000
    })
    return res.status(200).json(user)

    } catch (error) {
         console.log("ERROR:", error)
    return res.status(500).json({message:`googleLogin error ${error}`})
    }
    
}


export const adminLogin = async (req,res) => {
  try {
    let {email , password} = req.body;

    let user = await User.findOne({email}).select("+role");
    console.log("USER FROM DB:", user);
        console.log("ROLE:", user.role);
    if(!user){
      return res.status(400).json({message:"User not found"});
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if(!isMatch){
      return res.status(400).json({message:"Invalid credentials"});
    }

    if(user.role !== "admin"){
      return res.status(400).json({message:"Not an admin"});
    }

    let token = await genToken1(user._id);

    res.cookie("token",token,{
      httpOnly:true,
      secure:false,
      sameSite: "Strict",
      maxAge: 1 * 24 * 60 * 60 * 1000
    });

    return res.status(200).json(user);

  } catch (error) {
    console.log(error);
    return res.status(500).json({message:"AdminLogin error"});
  }
};
