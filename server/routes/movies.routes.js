import express from 'express'
import { movieAdd, movielist, movieSearch } from '../controller/movie.controller.js'
import { verifySearch } from '../middleware/validate.middleware.js'
import { upload } from '../config/multer.js'

const router = express.Router()


router.post('/movieAdd',upload.single('image'),movieAdd )
router.get('/movielist' ,movielist )
router.get('/moviesearch' ,verifySearch, movieSearch )

export default router