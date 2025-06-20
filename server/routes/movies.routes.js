import express from 'express'
import { movieAdd, movieList, movieSearch } from '../controller/movie.controller.js'

const router = express.Router()

router.post('/movieAdd',movieAdd )
router.get('/movielist', movieList )
router.get('/moviesearch', movieSearch)

export default router