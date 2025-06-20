import { booking } from "../models/booking.js";
import { person } from "../models/users.js";

export const moviebooking = async (req,res) =>{
    const {movieId, date, amount, seats} = req.body
    const token = req.cookies.token;
    const decoded = jwt.verify(token, 'Writen#token');
    const userId = await person.find(decoded.id)
    const newbooking =new booking({
        movieId,
        userId,
        date,
        seats,
        amount
    })
    await newbooking.save()
    res.send('booking placed')
}