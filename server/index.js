import express from 'express'
import userrouter from './routes/auth.routes.js'
import moviesrouter from './routes/movies.routes.js'

const app = express()
const PORT = 3000

app.use(express.json())
app.use('/user', userrouter)
app.use('/movies', moviesrouter)

app.listen(PORT,() =>[
    console.log(`server is running on http://localhost:${PORT}`)
])