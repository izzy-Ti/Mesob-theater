import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
    userId: {type: String, required: true},
    movieId: {type: String, required: true},  
    date: {type: Date, required: true},   
    seats: {type: [String], required: true},     
    amount: {type: Number, required: true},
    status: {type: String, required: true, enum: ['paid','unpaid']}
},{timestamps:true})
export const booking = mongoose.model('booking', bookingSchema)