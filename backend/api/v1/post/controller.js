const { Post, I_load, vPost, newsPost } = require("./Post");

module.exports = {
  create: (req, res, next) => {
    const post = req.body; //포스트 내용 받아오기
    const user = req.user.username;
    const nickname = req.user.nickname;
    console.log(nickname);
    var in_data = true;
    var category_list = ["news", "test", "servers", "events", "issues"]; // 카테고리 종류
    if (category_list.indexOf(post.category) < 0) {
      //포스트에서 정해진 카테고리 종류가 존재하는지 확인
      in_data = false;
    }
    console.log(in_data);
    if (in_data) {
      console.log(typeof user);
      try {
        //Post 정하는 코드
        new Post({
          uploader: nickname,
          ...post,
        })
          .save() //Post 업로드
          .then(() => {
            return next();
          })
          .catch((err) => next(err)); //도중 에러시 에러 프린트
      } catch (err) {
        next(err);
      }
    } else {
      next("unknown category"); //없으면 unkown category 프린트
    }
  },
  index_load: async (req, res, next) => {
    try {
      res.locals.data.posts = await I_load(); //함수로 받아온값 반환
      next();
    } catch (err) {
      next(err);
    }
  },
  View_post: async (req, res, next) => {
    try {
      res.locals.data.posts = await vPost(req); //함수로 받아온값 반환
      console.log(res.locals.data.posts);
      next();
    } catch (err) {
      next(err);
    }
  },
  View_news: async (req, res, next) => {
    try {
      res.locals.data.posts = await newsPost(req); //함수로 받아온값 반환
      console.log(res.locals.data.posts);
      next();
    } catch (err) {
      next(err);
    }
  },
};
