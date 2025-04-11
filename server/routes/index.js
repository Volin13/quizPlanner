const Router = require("express");
const router = new Router();

const authRouter = require("./authRouter");
const userRouter = require("./userRouter");
const quizRouter = require("./quizRouter");

router.use("/auth", authRouter);
router.use("/user", userRouter);
router.use("/quiz", quizRouter);


module.exports = router;