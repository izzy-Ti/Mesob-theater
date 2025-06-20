import { movies } from "../models/movies.js";
import { connectDB } from "../config/db.js"

export const movieAdd = async (req,res) =>{
    const {title, description, category,Front_image ,duration, price, showtimes, image, availableSeats, trailer} = req.body
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
    res.send('Movie saved')
}
export const movieList = async (req,res) =>{
    const movie = movies.find()
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