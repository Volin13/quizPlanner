const { Op } = require("sequelize");
const { Quiz } = require("../../models/models");

const getAll = async (req, res, next) => {
  try {
    let { query, limit, page } = req.query;

    // Перетворюємо параметри на числа та встановлюємо значення за замовчуванням
    page = parseInt(page, 10) || 1;
    limit = parseInt(limit, 10) || 8;
    
    // Переконуємося, що limit і page >= 1
    if (limit < 1) limit = 8;
    if (page < 1) page = 1;

    const offset = (page - 1) * limit;

    const whereCondition = {};

    if (query) {
      const words = query.trim().split(/\s+/); // Розбиваємо по пробілах

      const wordConditions = words.map((word) => ({
        title: { [Op.iLike]: `%${word}%` }, // Пошук по title
      }));

      whereCondition[Op.or] = wordConditions;
    }

    const quizes = await Quiz.findAndCountAll({
      where: whereCondition,
      limit,
      offset,
    });

    return res.json(quizes);
  } catch (error) {
    next(error); // Передаємо помилку в middleware
  }
};

module.exports = getAll;
