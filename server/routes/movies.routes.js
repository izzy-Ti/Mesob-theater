import express from 'express'
import { addtoFav, allmovie, deletemovie, movieAdd, movielist, movieSearch } from '../controller/movie.controller.js'
import { verifySearch } from '../middleware/validate.middleware.js'
import { upload } from '../config/cloudnary.js'
import { verifyrole } from '../middleware/role.middleware.js'
import { verifyToken } from '../middleware/auth.middleware.js'

const router = express.Router()


router.post('/movieAdd',verifyToken,upload.fields([
    { name: 'image', maxCount: 1 },
    { name: 'Front_image', maxCount: 1 }
        ]),movieAdd )
router.get('/movielist' ,movielist )
router.get('/allmovie', allmovie)
router.get('/moviesearch' ,verifySearch, movieSearch )
router.delete('/deletemovie',verifyrole ,deletemovie)
router.post('/addfav', verifyToken, addtoFav)

export default router