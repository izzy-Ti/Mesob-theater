import { person } from "../models/users.js"
import { connectDB } from "../config/db.js"
import  jwt from "jsonwebtoken"
import bcrypt from 'bcryptjs';

await connectDB()


export const  registration = async (req,res) => {
    const {First_name, Last_name, email, username, password} = req.body
    const hashedPassword  = await bcrypt.hash(password, 10)
    const newUser = person({
        First_name,
        Last_name,
        email,
        username,
        password:hashedPassword
    })
    await newUser.save()
    res.send(`user ${First_name} registered successfully`)
}

export const login = async (req,res) => {
    const {username, password} = req.body
    const user = await person.findOne({username})
    if(!user || !(await bcrypt.compare(password , user.password))){
        res.send('Invalid credentials')
    }
    const token = jwt.sign({id: user._id}, 'Writen#token')
    res.set('Authorization', `Bearer ${token}`)
    res.send('welcome')
}