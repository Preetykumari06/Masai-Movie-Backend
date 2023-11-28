const express=require("express");
const { userRouter } = require("./Routes/user.route");
const cors=require("cors");
const { connection } = require("./Config/db");
const { movieRouter } = require("./Routes/movie.route");
const { reviewRouter } = require("./Routes/review.route");
require('dotenv').config()

const port=process.env.PORT || 3000;

const app=express();
app.use(express.json());
app.use(cors());

app.use("/", userRouter);
app.use("/", movieRouter);
app.use("/", reviewRouter)


app.get("/", (req,res) => {
    res.send("Welcome to Masai Movie Backend...")
});

app.listen(port, async()=>{
    try{
        await connection
        console.log("Connected to the DB.")
    } catch(error){
     console.log(error.message)
    }
    console.log(`Server running at ${port}`);
});