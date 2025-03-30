const Router = require('express');
const router = new Router();
const authMiddleware = require('../middleware/authMiddleware');
const authController = require('../controllers/auth');

router.post('/register', authController.register);
router.post('/login',  authController.login);

module.exports = router;

// router.get("/profile", authMiddleware, async (req, res) => {
//   res.json({ user: req.user });
// });