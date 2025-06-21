import { movies } from "../models/movies.js";
import { connectDB } from "../config/db.js"

export const movieAdd = async (req,res) =>{
    try{
            const {title, description, category ,duration, price, showtimes,  availableSeats, trailer} = req.body
        const image = req.files['image']?.[0]?.path
        const Front_image = req.files['Front_image']?.[0]?.path
        const newMovie = new movies({
            title, 
            description, 
            category, 
            duration, 
            price, 
            showtimes, 
            image,
            Front_image,
            availableSeats,
            trailer
        })
        await newMovie.save()
        res.send('movie added')
    } catch (error) {
        res.send('Some thing is wrong')
    }
}
export const movielist = async (req,res) =>{
    const movie =await movies.find()
    .sort({ createdAt: -1 }) 
    .limit(10);  
    res.json(movie)
}
export const movieSearch = async (req,res) =>{
    const {movieName} = req.body
    const resultMovie = await movies.find({movieName: { $regex: movieName, $options: 'i' }})
    if(resultMovie.length === 0){
        res.send('no movie name sorry')
    }
    res.json(resultMovie)
}