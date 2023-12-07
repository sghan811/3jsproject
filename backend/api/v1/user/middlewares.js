const shouldBeLoggedIn = (req, res, next) =>
  !req.user ? next(new Error("Authorization required")) : next(); //로그인 된 상태인지 확인

const shouldBeLoggedOut = (req, res, next) =>
  req.user ? next(new Error("Already logged in")) : next(); //로그아웃 된 상태인지 확인

module.exports = {
  shouldBeLoggedIn,
  shouldBeLoggedOut,
};
