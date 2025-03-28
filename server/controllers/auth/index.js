const register = require('./register');
const login = require('./login');
const controllerWrapper = require('../../helpers/catchWrapper');


module.exports = {
  register: controllerWrapper(register),
  login: controllerWrapper(login),
};