import mongoose from "mongoose";

const waitSchema = new mongoose.Schema({
    userId: {type: String, required: true},
    movieId: {type: String, required: true}
},{timestamps: true})

export const waitlist = mongoose.model('waitlist', waitSchema)