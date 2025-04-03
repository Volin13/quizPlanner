const ApiError = require('../../error/ApiError');
const { Quiz, Question } = require('../../models/models');

const getOne = async (req, res, next) => {
  // Отримуємо девайс за його айді

  const { id } = req.params;
  const device = await Quiz.findOne({
    where: { id },
    include: [
      {
        model: Question,
        as: 'questions',
      },
    ],
  });

  if (!device) {
    return next(ApiError.badRequest(e.message));
  }
  return res.json(device);
};

module.exports = getOne;