import jwt from 'jsonwebtoken'
import User from '../model/userModel.js'   // 👈 add this

const isAuth = async (req, res, next) => {
    try {
        // Cookie se lo, nahi toh header se lo
        let token = req.cookies.token
        if(!token) {
            const authHeader = req.headers.authorization
            if(authHeader && authHeader.startsWith("Bearer ")) {
                token = authHeader.split(" ")[1]
            }
        }
        if(!token) {
            return res.status(401).json({message: "No token"})
        }
        let verifyToken = jwt.verify(token, process.env.JWT_SECRET)
        const user = await User.findById(verifyToken.userId).select("-password")
        if(!user) {
            return res.status(404).json({message: "User not found"})
        }
        req.user = user
        next()
    } catch (error) {
        console.log("isAuth error:", error)
        return res.status(500).json({message: "Auth error"})
    }
}

export default isAuth