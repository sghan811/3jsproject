const express = require("express");
const passport = require("../utils/auth/local");
const send = require("../utils/send");
const { dash, verify, create, logout } = require("./controller");
const { shouldBeLoggedIn, shouldBeLoggedOut } = require("./middlewares");
const userRouter = express.Router();

//라우터 설정
userRouter.get("/", shouldBeLoggedIn, dash, send);
userRouter.get("/verify", verify, send);
userRouter.get("/logout", shouldBeLoggedIn, logout, send);

userRouter.post("/register", shouldBeLoggedOut, create, send);
userRouter.post(
  "/login",
  shouldBeLoggedOut,
  passport.authenticate("local", {
    successRedirect: "/api/v1/user/verify",
    failureRedirect: "/api/v1/user/logout",
    failureFlash: false,
  }),
  send,
);

module.exports = userRouter;
