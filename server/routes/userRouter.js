const Router = require('express');
const router = new Router();
// const authMiddleware = require('../middleware/authMiddleware');
const userController = require('../controllers/user');

router.post('/checkLogin', userController.checkLogin);


module.exports = router;