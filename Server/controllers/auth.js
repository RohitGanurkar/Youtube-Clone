
import mongoose from "mongoose"
import User from "../models/User.js"
import bcrypt from "bcryptjs"
import { createError } from "../error.js"
import jwt from "jsonwebtoken"


export const signup = async(req , res , next) =>{
    try{
        console.log(req.body)
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        const newUser = new User({
            ...req.body,
            password:hash
        });

        await newUser.save();
        
        res.status(200).json({
            "success": true,
            "message": "User is successfully Created"
        })
    }
    catch(err){
        next(err);
    }
}


export const signin = async(req , res , next) =>{
    try{
        console.log(req.body)
        const user = await User.findOne({
            name:req.body.name
        })
        if(!user)
        return next(createError(404, "User not found"));

        const isCorrect = await bcrypt.compare(req.body.password, user.password)

        if(!isCorrect)
        return next(createError(404, "Email or Password is Incorrect"))

        const token = jwt.sign({id:user._id}, process.env.JWT)
        const{password , ...otherInfo} = user._doc;

        res.cookie("accesstoken", token , {
            httpOnly:true
        })
        .status(200)
        .json(otherInfo)

    }
    catch(err){
        next(err);
    }
}