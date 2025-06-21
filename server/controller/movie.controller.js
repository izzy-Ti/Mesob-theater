import { movies } from "../models/movies.js";
import { connectDB } from "../config/db.js"

export const movieAdd = async (req,res) =>{
    const {title, description, category ,duration, price, showtimes,  availableSeats, trailer} = req.body
    const {Front_image, image} = req.file;
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
export const movielist = async (req,res) =>{
    const movie =await movies.find()
    .sort({ createdAt: -1 }) 
    .limit(10);  
    res.json(movie)
    console.log('movies fetched')
}
export const movieSearch = async (req,res) =>{
    const {movieName} = req.body
    const resultMovie = await movies.find({movieName: { $regex: movieName, $options: 'i' }})
    if(resultMovie.length === 0){
        res.send('no movie name sorry')
    }
    res.json(resultMovie)
}