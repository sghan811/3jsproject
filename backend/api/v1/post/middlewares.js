const post_upload = (req, res, next) =>
  !req.user ? next(new Error("Authorization required")) : next(); //업로드할때 로그인 되어있는지 체크하는 코드

const post_load = (req, res, next) => next();

module.exports = { post_upload, post_load };
