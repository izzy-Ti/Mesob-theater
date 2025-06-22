import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
     title: {type: String, required: true}, 
     description: {type: String, required: true}, 
     category:{type: [String], enum: ['Action', 'Adventure', 'Sci-Fi', 'Comedy', 'Drama', 'Horror'], required: true}, 
     duration:{type:String, required: true}, 
     price: {type: Number, required: true}, 
     showtimes: {type: [Date], required: true}, 
     image: {type: String, required: true}, 
     Front_image: {type: String, required: true}, 
     availableSeats:{type: Number, required: true},
     trailer: {type: String, required: true},
     rating:{type:String, required:true},
     publish_date:{type: Date, required:true}
}, {timestamps:true})
export const movies = mongoose.model('movies', movieSchema)