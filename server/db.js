const { Sequelize } = require("sequelize");


let dbName = process.env.DB_NAME || "quizDB";
let user = process.env.DB_USER || "quizDB_owner";
let password = process.env.DB_PASSWORD
let host = process.env.DB_HOST || "ep-old-hall-a2v7cigv-pooler.eu-central-1.aws.neon.tech";
let port = process.env.DB_PORT || 5432;

module.exports = new Sequelize(dbName, user, password, {
  host: host,
  dialect: "postgres",
  port: port,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

