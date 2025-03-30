const ApiError = require("../../error/ApiError");
const  {User}  = require('../../models/models');

const logIn = async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ where: { email } });
  
      if (!user || !(await user.checkPassword(password))) {
        return next(ApiError.unauthorized("Invalid email or password"));
      }
  
      res.json({ token: generateToken(user) });
    } catch (error) {
        return next(ApiError.internal("Server error"));
    }
  }