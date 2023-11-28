const mongoose=require("mongoose")

const userSchema=mongoose.Schema({
    username: String,
    email: String,
    password: String,
    watchedMovies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Movie' }],
    reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }]
});

const userModel=mongoose.model('user', userSchema)

module.exports={userModel};





// {
//     _id: ObjectId,
//     username: String,
//     email: String,
//     password: String,
//     watchedMovies: [{ type: ObjectId, ref: 'Movie' }],
//     reviews: [{ type: ObjectId, ref: 'Review' }]
//   }
  
  