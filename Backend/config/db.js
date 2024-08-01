import mongoose from "mongoose";

export const connectdb = async ()=>{
    await mongoose.connect(process.env.MONGO_URI||'mongodb://localhost:27017/food-del').then(console.log('Database connected'))
}