import express from 'express'
import { moviebooking } from '../controller/booking.controller.js'

const router = express.Router()


router.post('/booking', moviebooking)

export default router