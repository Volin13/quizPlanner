const { User } = require("../../models/models");
const ApiError = require("../../error/ApiError");

const logout = async (req, res, next) => {
  try {
    const user = await User.findByPk(req.user.id);

    if (!user) {
      return next(ApiError.notFound("User not found"));
    }

    user.refreshToken = null;
    await user.save();

    res.clearCookie("refreshToken"); 
    return res.status(204).send();
  } catch (error) {
    next(error); 
  }
};

module.exports = logout;
