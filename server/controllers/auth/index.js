const register = require('./register');
const login = require('./login');
const refreshToken = require('./authControl');
const controllerWrapper = require('../../helpers/catchWrapper');


module.exports = {
  register: controllerWrapper(register),
  login: controllerWrapper(login),
  refreshToken: controllerWrapper(refreshToken),
};