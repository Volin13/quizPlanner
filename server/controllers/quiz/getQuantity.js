
const { Quiz } = require('../../models/models');
const ApiError = require('../../error/ApiError');


const getQuantity = (req, res, next) => {

  Quiz.count({})
    .then((count) => {
      res.status(200).json(count);
    })
    .catch(() => {
          return next(ApiError.internal('Error fetching quiz count'));
    });
}

module.exports = getQuantity;