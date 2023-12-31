const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const init = require("./passport");
const User = require("../../user/User");
const { comparePass } = require("..");

const options = {};

init();

passport.use(
  new LocalStrategy(options, (username, password, done) => {
    User.findByUserName(username)
      .then((user) => {
        if (!user) {
          return done(null, false, { message: "유저 정보 없음" });
        }
        if (!comparePass(password, user.password_digest)) {
          return done(null, false, { message: "비밀번호 불일치" });
        } else {
          return done(null, user);
        }
      })
      .catch((err) => {
        console.log(err.message);
        if (err.message == "No data returned from the query.") {
          return done("유저 정보 없음");
        } else {
          return done(err);
        }
      });
  }),
);

module.exports = passport;
