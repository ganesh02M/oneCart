import jwt from 'jsonwebtoken'

const adminAuth = (req, res, next) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: "Not Authorized" })
    }

    if (req.user.role !== "admin") {
      return res.status(403).json({ message: "Not an admin" })
    }

    next()
  } catch (error) {
    console.log("adminAuth error:", error)
    return res.status(500).json({ message: "Admin auth error" })
  }
}

export default adminAuth