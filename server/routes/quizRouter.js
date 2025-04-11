const Router = require('express');
const router = new Router();
// const authMiddleware = require('../middleware/authMiddleware');
const quizController = require('../controllers/quiz');

router.get('/quantity', quizController.getQuantity);



module.exports = router;