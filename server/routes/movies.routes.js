import express from 'express'
import { movieAdd, movielist, movieSearch } from '../controller/movie.controller.js'
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
router.get('/moviesearch' ,verifySearch, movieSearch )

export default router