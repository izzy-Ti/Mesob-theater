import express from 'express'
import { movieAdd, movieList, movieSearch } from '../controller/movie.controller.js'
import { verifySearch } from '../middleware/validate.middleware.js'

const router = express.Router()

router.post('/movieAdd',movieAdd )
router.get('/movielist', movieList )
router.get('/moviesearch', verifySearch, movieSearch )

export default router