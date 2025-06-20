import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
    const authHeader = req.headers['authorization']
    if (!authHeader) return res.status(401).json({ message: 'No token provided' })
    next()
}
