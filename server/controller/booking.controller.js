import { booking } from "../models/booking.js";
import { person } from "../models/users.js";

export const moviebooking = async (req,res) =>{
    const {movieId, date, amount, seats} = req.body
    const token = req.cookies.token;
        if(!token){
        res.send('false')
    }
    const userId = jwt.verify(token, 'Writen#token');
    const newbooking =new booking({
        movieId,
        userId,
        date,
        seats,
        amount
    })
    await newbooking.save()
    res.send('true')
}