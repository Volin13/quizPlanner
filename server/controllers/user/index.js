const checkLogin = require('./checkUserLogin');

const controllerWrapper = require('../../helpers/catchWrapper');


module.exports = {
    checkLogin: controllerWrapper(checkLogin),

};