import { movies } from "../models/movies.js";
import { connectDB } from "../config/db.js"

export const movieAdd = async (req,res) =>{
    const {title, description, category, duration, price, showtimes, image, availableSeats} = req.body
    const newMovie = new movies({
        title, 
        description, 
        category, 
        duration, 
        price, 
        showtimes, 
        image, 
        availableSeats
    })
    await newMovie.save()
    res.send('Movie saved')
}
export const movieList = async (req,res) =>{
    const movie = movies.find()
    res.json(movie)
}
export const movieSearch = async (req,res) =>{
    const {movieName} = req.body
    const resultMovie = movies.find({movieName: { $regex: movieName, $options: 'i' }})
    res.json(resultMovie)
}