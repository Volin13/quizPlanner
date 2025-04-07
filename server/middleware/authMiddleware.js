const jwt = require("jsonwebtoken");
const ApiError = require("../error/ApiError");



const authMiddleware = async (req, res, next) => {
   const authHeader = req.headers.authorization;
 

  if (!authHeader) {
    return next(ApiError.unauthorized("Authorization required"));
  }
  const token = authHeader.split(" ")[1];
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return next(ApiError.unauthorized("Unauthorized"));
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
    
  } catch (error) {
    return next(ApiError.unauthorized("Token is not valid"));
  }
};
module.exports = { authMiddleware };
