import mongoose from "mongoose";

const peronSchema = new mongoose.Schema({
    First_name: { type:String, required: true, },
    Last_name: { type:String, required: true, },
    password: {type:String, required: true},
    email: { type:String, required: true, unique:true},
    username:{type:String, required:true, unique:true},
    age: Date,
    profile:{type:String, default:""},
    role: {type:String, enum: ['user', 'admin'], required:true, default:'user'},
    favorites: {type: [String]},
    bookings: {type: [String]},
    waitelist: {type: [String]}
},{timestamps:true, minimize:false})
export const person = mongoose.model("person", peronSchema)