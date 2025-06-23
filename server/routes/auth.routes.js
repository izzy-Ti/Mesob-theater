import express from 'express'
import { loggedUser, login, logout, registration } from '../controller/auth.controller.js'
import { verifyLogin, verifyRegistration } from '../middleware/validate.middleware.js'
import { upload } from '../config/cloudnary.js'
import { verifyToken } from '../middleware/auth.middleware.js'

const router = express.Router()

router.post('/registration', verifyRegistration, registration)
router.post('/login',verifyLogin , login)
router.get('/loggeduser',verifyToken , loggedUser)
router.post('/logout', logout)

export default router