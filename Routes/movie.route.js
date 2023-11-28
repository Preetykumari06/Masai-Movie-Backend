const movieModel=require("../Models/movie.model")
const {Router}=require("express");
const movieRouter=Router()


movieRouter.get("/api/movies", async(req,res)=>{
   const movies=await movieModel.find();
   res.status(200).send(movies)
})

movieRouter.get("/api/movies/:id", async(req,res)=>{
    const movie = await movieModel.findById(req.params.id);
    res.status(200).json(movie);
});



module.exports={movieRouter}