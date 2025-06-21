import express from 'express'
import { login, registration } from '../controller/auth.controller.js'
import { verifyLogin, verifyRegistration } from '../middleware/validate.middleware.js'

const router = express.Router()

router.post('/registration', verifyRegistration, registration)
router.post('/login',verifyLogin , login)

export default router