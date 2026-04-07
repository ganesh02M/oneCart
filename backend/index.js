import express from 'express'
import dotenv from 'dotenv'
import connectDb from './config/db.js'
import cookieParser from 'cookie-parser'
import authRoutes from './routes/authRoutes.js'
dotenv.config()
import cors from "cors"
import userRoutes from './routes/userRoutes.js'
import productRoutes from './routes/productRoutes.js'
import cartRoutes from './routes/cartRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
import bcrypt from "bcryptjs";
 import User from "./model/userModel.js";

let port = process.env.PORT || 6000

let app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors({
 origin:["http://localhost:5173" , "http://localhost:5174"],
 credentials:true
})) 

app.use("/api/auth",authRoutes)
app.use("/api/user",userRoutes)
app.use("/api/product",productRoutes)
app.use("/api/cart",cartRoutes)
app.use("/api/order",orderRoutes)


const fixPassword = async () => {
  try {
    const hashed = await bcrypt.hash("12345678", 10);

    const result = await User.updateOne(
      { email: "ganesh@test.com" },
      { $set: { password: hashed } }
    );

    console.log("UPDATE RESULT:", result); // ✅ ab sahi

  } catch (error) {
    console.log("ERROR:", error);
  }
};

app.listen(port,async ()=>{
    console.log("Hello From Server")
    connectDb()

       await fixPassword();
})


