const gatAllQuizes = require('./getAll');
const getQuiozById = require('./getOne');
const editQuizById = require('./editOneByID');
const createQuiz = require('./createQuiz');
const controllerWrapper = require('../../helpers/catchWrapper');


module.exports = {
  gatAllQuizes: controllerWrapper(gatAllQuizes),
  getQuiozById: controllerWrapper(getQuiozById),
  editQuizById: controllerWrapper(editQuizById),
  createQuiz: controllerWrapper(createQuiz),
};