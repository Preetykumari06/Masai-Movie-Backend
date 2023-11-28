const {Router}=require("express");
const {userSignup, userLogin} = require("../Controllers/user.controller");
const userRouter=Router()


userRouter.post("/api/register", userSignup);
userRouter.post("/api/login", userLogin);

module.exports={userRouter}