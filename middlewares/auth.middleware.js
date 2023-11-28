require('dotenv').config();

const {userModel}=require("../Models/user.model")
const jwt=require("jsonwebtoken")

const auth=async(req,res,next)=>{
    const token=req.headers.token;
    if(token){
        try{
         let decodedToken=jwt.verify(token,process.env.accesstoken);

         req.body.userID=decodedToken.userID;
         req.body.review=decodedToken.review;
         next()
        }catch(error){
            res.status(400).send({"error":error.message});
        }
    } else {
        res.status(400).send({"success":false,"error":"Please login first."});  
    }
}

module.exports={auth}