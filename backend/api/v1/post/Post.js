const db = require("../../../db/config");
const { modelUtils, modelStatics } = require("../utils");
const schema = require("./PostSchema");

//Post 변수 지정
function Post({
  id = null,
  title,
  contant,
  img,
  uploader,
  sub,
  uptime,
  category,
}) {
  this.id = this._validate(id, "id");
  this.sub = this._validate(sub, "sub");
  this.uptime = this._validate(uptime, "uptime");
  this.title = this._validate(title, "title");
  this.contant = this._validate(contant, "contant");
  this.img = this._validate(img, "img");
  this.uploader = this._validate(uploader, "uploader");
  this.category = this._validate(category, "category");
}

//posts 값 받아오기 (안쓰임 그래도 지우면 에러남)
const postStatics = modelStatics(db, "posts");
postStatics.findBytitle = (title2) => {
  return db.query(
    `
        SELECT * FROM posts
        WHERE title = $1
        OTDER BY id ASC
    `,
    title2,
  );
};

//posts 테이블 schema 받아오기
Object.setPrototypeOf(Post, postStatics);
Post.prototype = Object.assign(Post.prototype, modelUtils(schema));

//posts 테이블에 값 업로드
Post.prototype.save = function () {
  return db
    .one(
      `
        INSERT INTO posts (
            title, contant, img, uploader, sub, uptime, category
        ) VALUES (
            $/title/, $/contant/, $/img/, $/uploader/, $/sub/, ${Date.now()}, $/category/
        )
        RETURNING *
    `,
      this,
    ) // db 쿼리문
    .then((post) => this._modify(post));
};

function I_load() {
  const posts = db.query(`SELECT * FROM posts ORDER BY id DESC LIMIT 20;`); //posts 테이블에 20개의 값을 불러온다
  return posts;
}
function vPost(req) {
  const posts = db.query(`SELECT * FROM posts where id=${req.query.id};`); //posts 테이블 id 컬럼이 req.query.id 와 같은것을 불러온다
  console.log(req.query.id);
  return posts;
}
function newsPost(req) {
  const posts = db.query(`SELECT * FROM posts where category=${req.query.c};`); //posts 테이블 category 컬럼에 req.query.c 와 같은것을 불러온다
  return posts;
}

module.exports = { Post, I_load, vPost, newsPost };
