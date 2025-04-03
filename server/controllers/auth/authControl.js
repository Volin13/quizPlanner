const jwt = require("jsonwebtoken");
const ApiError = require("../../error/ApiError");

const refreshToken = (req, res, next) => {
  try {
    const refreshToken = req.cookies.refreshToken;

    if (!refreshToken) {
      return next(ApiError.unauthorized("No refresh token provided"));
    }

    const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);

    const newAccessToken = jwt.sign(
      { id: decoded.id },
      process.env.JWT_SECRET,
      { expiresIn: "15m" }
    );

    res.json({ accessToken: newAccessToken });
  } catch (error) {
    return next(ApiError.unauthorized("Invalid refresh token"));
  }
};

module.exports = refreshToken;
