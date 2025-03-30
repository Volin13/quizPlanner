const sequelize = require("../db");
const { DataTypes, Model } = require("sequelize");
const bcrypt = require("bcrypt");


class Quiz extends Model {}
class User extends Model {
    async checkPassword(password) {
        return bcrypt.compare(password, this.password);
      }
}
class Question extends Model {}

User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      role: {
        type: DataTypes.ENUM("user", "admin"),
        defaultValue: "user",
      },
    },
    {
      sequelize,
      tableName: "users",
      hooks: {
        beforeCreate: async (user) => {
          const salt = await bcrypt.genSalt(10);
          user.password = await bcrypt.hash(user.password, salt);
        },
        beforeUpdate: async (user) => {
          if (user.changed("password")) {
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(user.password, salt);
          }
        },
      },
    }
  );


  Quiz.init(
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      title: { type: DataTypes.STRING, allowNull: false },
      subTitle: { type: DataTypes.STRING, allowNull: false },
      description: { type: DataTypes.TEXT, allowNull: false },
    },
    {
      sequelize,
      tableName: "quizzes",
      timestamps: true,
    }
  );

Question.init(
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      question: { type: DataTypes.TEXT, allowNull: false },
      questionType: { type: DataTypes.STRING, 
        allowNull: false, 
        defaultValue: "text" },
      answers: {
        type: DataTypes.ARRAY(DataTypes.STRING), 
        allowNull: false,
      },
      correctAnswer: { type: DataTypes.STRING, allowNull: false },
    },
    {
      sequelize,
      tableName: "questions",
      timestamps: true,
    }
  );


module.exports = {
Quiz,
User,
Question
};