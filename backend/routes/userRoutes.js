import express from "express"
import isAuth from "../middleware/isAuth.js"
import { getAdmin, getCurrentUser } from "../controller/userController.js"
import adminAuth from "../middleware/adminAuth.js"


let userRoutes = express.Router()

// userRoutes.get("/getcurrentuser",isAuth,getCurrentUser)
// userRoutes.get("/getadmin", isAuth, adminAuth, getAdmin)
// userRoutes.get("/test", (req, res) => {
//   res.send("working");
// });
userRoutes.get("/test", (req, res) => {
  res.send("working");
});

userRoutes.get("/getadmin", isAuth, adminAuth, getAdmin)
userRoutes.get("/getcurrentuser", isAuth, getCurrentUser)



export default userRoutes