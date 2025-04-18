const Router = require('express');
const router = new Router();
const authMiddleware = require('../middleware/authMiddleware');
const authController = require('../controllers/auth');

router.post('/register', authController.register);
router.post('/login',  authController.login);
router.post("/refresh-token", authController.refreshToken);
module.exports = router;

