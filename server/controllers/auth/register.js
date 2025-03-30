const passport = require("passport");
const generateToken = require("../../helpers/generateTokens"); 
const ApiError = require("../../error/ApiError");

const register = async (req, res, next) => {
    passport.authenticate("register", { session: false }, (err, user, info) => {
      if (err) {
        return next(ApiError.internal("Server error"));
      }
      if (!user) {
        return next(ApiError.badRequest(info.message)); 
      }
  
      // Якщо користувач успішно зареєстрований, створюємо токен
      const token = generateToken(user);
      res.json({ token });
    })(req, res, next);
  };
  
  module.exports = { register };