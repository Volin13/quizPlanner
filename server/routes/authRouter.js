const Router = require('express');
const router = new Router();

import authMiddleware from "../middleware/authMiddleware";
import authController from "../controllers/auth";

router.post('/register', authController.register);
router.post('/login',  authController.login);


router.get("/profile", authMiddleware, async (req, res) => {
  res.json({ user: req.user });
});