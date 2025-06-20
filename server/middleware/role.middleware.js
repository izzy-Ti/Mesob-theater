import { person } from "../models/users";

export const verifyrole = async (req,res,next) =>{
    const token = req.cookies.token;
    const userId = jwt.verify(token, 'Writen#token');
    const user = await  person.findById(userId.id)
    if(user.role === 'admin'){
        next()
    } else {
        res.send('please ur not admin')
    }
}