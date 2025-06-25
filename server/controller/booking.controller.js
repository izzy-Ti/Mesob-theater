import { booking } from "../models/booking.js";
import { person } from "../models/users.js";
import jwt from 'jsonwebtoken';


export const moviebooking = async (req,res) =>{
    const {movieId, date, amount, seats} = req.body
    const token = req.cookies.token;
        if(!token){
        return res.json({ success: false });
    }
    const decoded = jwt.verify(token, 'Writen#token');
    const userId = decoded.id;
    const status = 'paid'
    const newbooking =new booking({
        movieId,
        userId,
        date,
        seats,
        status,
        amount
    })
    await newbooking.save()
    return res.json({ success: true });
    console.log('booking placed')
}