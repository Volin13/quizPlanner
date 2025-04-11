require("dotenv").config();
const express = require("express");
const passport = require("./config/pasport");
const cookieParser = require("cookie-parser");
const sequelize = require("./db");
const models = require("./models/models");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const router = require("./routes/index");
const errorHandler = require("./middleware/erorrHandlerMiddleware");
const path = require("path");

const PORT = process.env.PORT || 5000;

const app = express();
// app.use(cors());
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));
app.use(passport.initialize());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(fileUpload({}));
app.use("/api", router);
app.use(express.static(path.resolve(__dirname, "static")));



app.use(errorHandler);

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    // sequelize.sync({ force: true });
    app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
  } catch (e) {
    console.error("Database connection error:", e);
    process.exit(1); 
  }
};

start();