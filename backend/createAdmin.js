import dotenv from 'dotenv'
dotenv.config()
import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
import User from './model/userModel.js'

await mongoose.connect(process.env.MONGODB_URI)
console.log("DB connected")

const hash = await bcrypt.hash('admin123', 10)
await User.create({
    name: 'Admin',
    email: 'admin@onecart.com',
    password: hash,
    role: 'admin'
})
console.log('Admin created successfully!')
process.exit()