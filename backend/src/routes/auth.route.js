import express from "express";

const router = express.Router();
import { checkAuth,signup, login, logout,updateProfile } from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";


router.post("/signup",signup);

router.post("/login",login);

router.post("/logout",logout);



// for updating a profile pic
router.put("/update-profile", protectRoute , updateProfile);

router.get("/check",protectRoute,checkAuth);

export default router;

