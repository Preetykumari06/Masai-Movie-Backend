const mongoose=require("mongoose")

const reviewSchema=mongoose.Schema({
    user : { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    movie : { type: mongoose.Schema.Types.ObjectId, ref: 'Movie' },
    rating: Number,
    comment: String,
    timestamp: Date
})

const reviewModel=mongoose.model('review', reviewSchema)

module.exports=reviewModel;



// {
//     _id: ObjectId,
//     user : { type: ObjectId, ref: 'User' },
//     movie : { type: ObjectId, ref: 'Movie' },
//     rating: Number,
//     comment: String,
//     timestamp: Date
// }

