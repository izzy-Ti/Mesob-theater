import express from 'express'
import { login, registration } from '../controller/auth.controller.js'

const router = express.Router()

router.post('/registration', registration)
router.post('/login', login)

export default router