import { movies } from "../models/movies.js";
import { connectDB } from "../config/db.js"
import { person } from "../models/users.js";

export const movieAdd = async (req,res) =>{
    try{
        const {title, description, category,rating,
            publish_date ,duration, price, showtimes,  
            availableSeats, trailer} = req.body
        const image = req.files['image']?.[0]?.path
        const Front_image = req.files['Front_image']?.[0]?.path
        const newMovie = new movies({
            title, 
            description, 
            category, 
            duration, 
            rating,
            publish_date,
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
        console.log(error)
    }
}
export const movielist = async (req,res) =>{
    const movie =await movies.find()
    .sort({ createdAt: -1 }) 
    .limit(4);  
    res.json(movie)
}
export const allmovie = async (req,res) =>{
    const movie = await movies.find().sort({ createdAt: -1 })
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
export const deletemovie = async (req,res) =>{
    const movie = req.body
    await movies.findByIdAndDelete(movie)
    res.send('movie deleted')
}
export const addtoFav = async (req,res) => {
    const movieId = req.body
    const token = req.cookies.token;
    const userId = jwt.verify(token, 'Writen#token');
    const user = await  person.findById(userId.id, 
        { $push: { favorites: movieId } },
        { new: true })

}