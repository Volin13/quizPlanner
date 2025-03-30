const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const {User} = require("../models/models");

passport.use(
  "register",
  new LocalStrategy(
    {
      usernameField: "email", 
      passwordField: "password",
      passReqToCallback: true, 
    },
    async (req, email, password, done) => {
      try {
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
          return done(null, false, { message: "User already exists" });
        }

        // Хешуємо пароль перед створенням користувача
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({ email, password: hashedPassword });

        return done(null, newUser);
      } catch (error) {
        return done(error);
      }
    }
  )
);

// Серіалізація користувача
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// Десеріалізація користувача
passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findByPk(id);
    done(null, user);
  } catch (error) {
    done(error);
  }
});

module.exports = passport;
