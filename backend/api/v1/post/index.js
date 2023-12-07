const express = require("express");
const passport = require("../utils/auth/local");
const send = require("../utils/send");

const {
  create,
  index_load,
  View_post,
  View_news,
  View_server,
} = require("./controller");
const { post_upload, post_load } = require("./middlewares");
const postRouter = express.Router();

postRouter.post("/upload", post_upload, create, send); //라우터를 정하는 코드

postRouter.get("/", post_load, index_load, send);

postRouter.get("/view", post_load, View_post, send);

postRouter.get("/category", post_load, View_news, send);

module.exports = postRouter;
