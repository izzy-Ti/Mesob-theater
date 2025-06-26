import { booking } from "../models/booking.js";
import { person } from "../models/users.js";
import { movies } from "../models/movies.js";
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
    const user = await person.findByIdAndUpdate(userId,{$push: {bookings:newbooking._id}})
    await user.save()
    return res.json({ success: true });

}
export const showBooking = async (req,res) =>{
    try{
        const token = req.cookies.token
        const decoded = jwt.verify(token, 'Writen#token');
        const userid = decoded.id
        const user = await person.findById(userid)
        const bookings = user.bookings
        const book = await booking.find({ _id: { $in: bookings } }).populate('movieId').sort({ createdAt: -1 });
        res.json({ success: true, bookings: book })
        console.log(book)
    } catch(error) {
        res.send(error)
    }
}