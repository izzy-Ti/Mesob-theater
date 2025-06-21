import express from 'express'
import cors from 'cors';
import userrouter from './routes/auth.routes.js'
import moviesrouter from './routes/movies.routes.js'
import bookingrouter from './routes/bookings.routes.js'
import { verifyToken } from './middleware/auth.middleware.js'
import cookieParser from 'cookie-parser'
import { verifyBooking, verifyLogin, verifyRegistration , verifySearch} from './middleware/validate.middleware.js'

const app = express()
const PORT = 3000

app.use(cors()); 
app.use(cookieParser())
app.use(express.json())
app.use('/user',  userrouter)
app.use('/movies', moviesrouter)
app.use('/book', verifyToken, verifyBooking, bookingrouter)
app.listen(PORT,() =>[
    console.log(`server is running on http://localhost:${PORT}`)
])