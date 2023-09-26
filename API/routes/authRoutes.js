import express from "express";
import {
  register,
  login,
  refreshAccessToken,
} from "../controllers/authController.js";
import { authenticateToken } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", register);

router.post("/login", login);

router.get("/protectedAuth", authenticateToken, (req, res) => {
  res.json({ message: "Berhasil Akses", data: req.body });
});

router.post("/refresh", refreshAccessToken);
export default router;
