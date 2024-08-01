import express from 'express'
import cors from 'cors'
import { connectdb } from './config/db.js';
import foodRouter from './routes/foodRouts.js';
import userRouter from './routes/userRouts.js';
import 'dotenv/config'
import cartRouter from './routes/cartRouts.js';
import orderRouter from './routes/orderRouts.js';
import orderModel from './models/orderModel.js';
import path from "path"
//app config
const app = express();
const port = 4000;



//middleware

app.use(express.json())
app.use(cors())

//database connection

connectdb();


//app end points
app.use("/api/food", foodRouter)
app.use('/images', express.static('uploads'))
app.use('/api/user', userRouter)
app.use('/api/cart', cartRouter)
app.use('/api/order', orderRouter)

// app.get('/',(req, res)=>{
//     res.send('API is working')
// })

//deploy
if(process.env.NODE_ENV === "production"){
    const dirPath = path.resolve();
    app.use(express.static("FrontEnd/dist"));
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(dirPath,".FrontEnd/dist","index.html"));
    })
}


app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port} `)
})