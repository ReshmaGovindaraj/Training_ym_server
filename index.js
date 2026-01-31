// define middleware and define code

import { connectDB } from "./Db/db.js";
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import userRoute from "./Routes/userRoutes.js";
import authUserRoute from "./Routes/authUserRoutes.js";


dotenv.config();

const app=express();
const PORT=process.env.PORT||5000;
//MIDDLEWARE
app.use(express.json())
app.use(cors())
//connectivity
connectDB()
//routes definition
app.use('/api/users',userRoute);
app.use('/api/auth',authUserRoute)
app.listen(PORT,()=>{
    console.log(`your server is running in ${PORT}`);
}
)

