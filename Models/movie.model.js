const mongoose=require("mongoose")

const movieSchema=mongoose.Schema({
    title: String,
    genre: [String],
    releaseYear: Number,
    reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }]
})

const movieModel=mongoose.model('movie', movieSchema)

module.exports=movieModel;



// {
//     _id: ObjectId,
//     title: String,
//     genre: [String],
//     releaseYear: Number,
//     reviews: [{ type: ObjectId, ref: 'Review' }]
//   }
  
  