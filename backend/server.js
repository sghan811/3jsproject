require("dotenv").config();

const express = require("express");
const logger = require("morgan");
const flash = require("connect-flash");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const passport = require("passport");
const cors = require("cors");
const helmet = require("helmet");
const corsOptions = {
  credentials: true,
  origin: "http://localhost:5173",
};

const app = express();

app.use(helmet()); //보안 모듈
app.use(flash());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json()); //서버 모듈
app.options("*", cors(corsOptions));
app.use(cors(corsOptions));
app.use(cookieParser()); //쿠키 모듈

app.use(
  session({
    secret: process.env.SECRET_KEY,
    resave: false,
    secret: "itissosecret",
    saveUninitialized: true,
  }),
); //세션
app.use(passport.initialize());
app.use(passport.session());
app.use((req, res, next) => {
  res.locals.data = {};
  next();
});

app.use("/api", require("./api")); //api 불러오기

const PORT = process.env.PORT || 3000; //포트 정하기

//서버 시작
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
