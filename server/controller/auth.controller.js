import { person } from "../models/users.js"
import { connectDB } from "../config/db.js"
import  jwt from "jsonwebtoken"
import bcrypt from 'bcryptjs';
import cookieParser from "cookie-parser";

await connectDB()

export const  registration = async (req,res) => {
    const {First_name, Last_name, email, username, password,age,profile, role} = req.body
    const hashedPassword  = await bcrypt.hash(password, 10)
    const newUser = person({
        First_name,
        Last_name,
        email,
        username,
        role,
        password:hashedPassword
    })
    await newUser.save()
    res.send(`true`)
}

export const login = async (req,res) => {
    const {username, password} = req.body
    const user = await person.findOne({username})
    if(!user || !(await bcrypt.compare(password , user.password))){
        return res.send('false')
    }
    const token = jwt.sign({id: user._id}, 'Writen#token')
    res.cookie('token', token);
    res.send('true')
}
export const loggedUser = async (req,res) =>{
    const token = req.cookies.token;
    if (!token){
        res.json({loggedin:'false'})
    }
    const userId = jwt.verify(token, 'Writen#token');
    const user = await  person.findById(userId.id)
    if (!user){
        res.json({loggedin:'false'})
    }
    res.json({loggedin:'true', user:user})
}
export const logout = async (req,res) =>{
    const token = req.cookies.token;
    try{
    res.clearCookie('token', {
        httpOnly: true,
        secure: true,
        sameSite: 'strict',
    })
    res.json({ loggedout: true })
    } catch (error){
        res.json({loggedout: false})
    }
}