import express from 'express'
import dotenv from "dotenv/config";
import todoRoutes from './routes/todoRoute.js'

import connectToDB from "./config/dbConnection.js";
connectToDB();

const app = express()

app.use(express.json())
app.use('/todo', todoRoutes)

app.listen(process.env.PORT, ()=>{
    console.log(`Server running at port ${process.env.PORT}`)
})