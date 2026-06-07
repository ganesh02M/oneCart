import User from "../model/userModel.js"


export const getCurrentUser = async (req,res) => {
    try {
        let user = await User.findById(req.user._id).select("-password")
        if(!user){
           return res.status(404).json({message:"user is not found"}) 
        }
        return res.status(200).json(user)
    } catch (error) {
         console.log(error)
    return res.status(500).json({message:`getCurrentUser error ${error}`})
    }
}

export const getAdmin = async (req, res) => {
    try {
        let user = await User.findById(req.user._id).select("-password")
        if (!user) {
            return res.status(404).json({message: "Admin not found"})
        }
        if (user.role !== "admin") {
            return res.status(403).json({message: "Not an admin"})
        }
        return res.status(200).json({
            email: user.email,
            role: user.role,
            name: user.name
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({message: `getAdmin error ${error}`})
    }
}