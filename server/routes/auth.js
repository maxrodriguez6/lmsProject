import express from "express";

const router = express.Router();

// controllers
import { register, login, logout, forgotPassword,resetPassword } from "../controllers/auth";

router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);
//router.get("/send-email", sendTestEmail);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);

module.exports = router;
