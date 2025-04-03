const ApiError = require("../../error/ApiError");
const { User } = require("../../models/models");
const generateTokens = require("../../helpers/generateTokens"); 

const logIn = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });

    if (!user || !(await user.checkPassword(password))) {
      return next(ApiError.unauthorized("Invalid email or password"));
    }

    // Генеруємо токени
    const { accessToken, refreshToken } = generateTokens(user);

    // Зберігаємо refreshToken в cookie (httpOnly + secure)
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: true, // У production потрібно true (HTTPS)
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 днів
    });

    // Відправляємо accessToken клієнту
    res.json({ accessToken });
  } catch (error) {
    return next(ApiError.internal("Server error"));
  }
};

module.exports = logIn;