const Router = require("express");
const router = new Router();

const authRouter = require("./authRouter");
const quizRouter = require("./quizRouter");

router.use("/auth", authRouter);
router.use("/quiz", quizRouter);
module.exports = router;