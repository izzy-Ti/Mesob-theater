import jwt from 'jsonwebtoken';
import { person } from '../models/users.js';

export const verifyToken = async (req, res, next) => {
    const token = req.cookies.token;
    if(!token){
        return res.send('please login')
    }
    const userId = jwt.verify(token, 'Writen#token');
    const user = await  person.findById(userId.id)
    if(!user){
        res.send('please login')
    } else {
        req.user = user;
        next()
    }
}
