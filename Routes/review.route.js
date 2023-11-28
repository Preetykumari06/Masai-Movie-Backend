const reviewModel=require("../Models/review.model")
const {Router}=require("express");
const { auth } = require("../middlewares/auth.middleware");
const { userModel } = require("../Models/user.model");
const reviewRouter=Router()


reviewRouter.post("/api/reviews/:movieId", auth, async(req,res)=>{
    const { rating, comment } = req.body;
    const { userId } = req.user;
    const { movieId } = req.params;
  
    const newReview = new reviewModel({
      user: userId,
      movie: movieId,
      rating,
      comment
    });
  
    await newReview.save();
  
    // Update movie's reviews
    await movieModel.findByIdAndUpdate(movieId, { $push: { reviews: newReview._id } });
  
    // Update user's reviews
    await userModel.findByIdAndUpdate(userId, { $push: { reviews: newReview._id } });
  
    res.status(201).json({ message: 'Review added successfully' });
});


reviewRouter.get("/api/reviews/:movieId", async(req,res)=>{
    const reviews = await reviewModel.find({ movie: req.params.movieId }).populate('user');
    res.status(200).json(reviews);
});



reviewRouter.put("/api/reviews/:reviewId", auth, async(req,res)=>{
    const { rating, comment } = req.body;
    await reviewModel.findByIdAndUpdate(req.params.reviewId, { rating, comment });
    res.status(204).json({ message: 'Review updated successfully' });
});


reviewRouter.delete("/api/reviews/:reviewId",auth, async(req,res)=>{
    await reviewModel.findByIdAndDelete(req.params.reviewId);
  res.status(202).json({ message: 'Review deleted successfully' });
})

reviewRouter.get("/api/recommendations", auth, async(req,res)=>{
    const user = await userModel.findById(req.user.userId).populate('watchedMovies reviews');
  const watchedMovies = user.watchedMovies;
  const reviews = user.reviews;

  

  res.status(200).json({ });
})

module.exports={reviewRouter}