import jwt from "jsonwebtoken";
import User from "../models/models";
import ApiError from "../error/ApiError";



const authMiddleware = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1]; // "Bearer TOKEN"

  if (!token) {
    return next(ApiError.unauthorized("Authorization required"));
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    { id };
    const user = await User.findByPk(decoded.id);

    if (!user) {
      return next(ApiError.unauthorized("Token is not valid"));
    }

    req.user = user;
    next();
  } catch (error) {
    return next(ApiError.unauthorized("Token is not valid"));
  }
};

export default authMiddleware;