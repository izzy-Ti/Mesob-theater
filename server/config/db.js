import mongoose from 'mongoose'
const MONGOBD_URI ='mongodb+srv://israel:0911700417@cluster0.ce5psug.mongodb.net/Blog'


export const connectDB = async () =>{
    await mongoose.connect(MONGOBD_URI).then(()=>{
        console.log(`Database connected`);
    })
}