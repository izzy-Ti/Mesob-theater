export const verifyRegistration = (req,res,next) =>{
    const {First_name, Last_name, email, username, password} = req.body
    if(!First_name || !Last_name || !email || !username || !password ){
        return res.status(400).json({ message: 'All fields are required' });
    } else {
        next();
    }
}
export const verifyLogin = (req,res,next) =>{
    const {username, password} = req.body
    if(!username || !password){
        return res.status(400).json({ message: 'All fields are required' });
    } else {
        next();
    }
}
export const verifyBooking = (req,res,next) =>{
    const {movieId, date, amount, seats} = req.body
    if(!movieId || !date || !amount || !seats){
        return res.status(400).json({ message: 'All fields are required' });
    } else {
        next();
    }
}
export const verifySearch = (req,res,next) =>{
    const {movieName} = req.body
    if(!movieName){
        return res.status(400).json({ message: 'All fields are required' });
    } else {
        next();
    }
}