import express from 'express'
import todoRoutes from './routes/todoRoute.js'

const app = express()
const port = 8000

app.use(express.json())
app.use('/todo', todoRoutes)

app.listen(port, ()=>{
    console.log(`Server running at port ${port}`)
})