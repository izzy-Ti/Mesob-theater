import express from 'express'
import { moviebooking, showBooking } from '../controller/booking.controller.js'
import { verifyToken } from '../middleware/auth.middleware.js'
import { verifyBooking } from '../middleware/validate.middleware.js'

const router = express.Router()


router.post('/booking', moviebooking)
router.get('/mybooking', showBooking)

export default router