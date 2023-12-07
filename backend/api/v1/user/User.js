const db = require("../../../db/config");
const { modelUtils, modelStatics } = require("../utils");
const schema = require("./UserSchema");

//User 내용 정하는 코드
function User({ id = null, username, password_digest, nickname }) {
  this.id = this._validate(id, "id");
  this.username = this._validate(username, "username");
  this.password_digest = this._validate(password_digest, "password_digest");
  this.nickname = this._validate(nickname, "nickname");
}

//users table 내용 불러오기 (안쓰임)
const userStatics = modelStatics(db, "users");
userStatics.findByUserName = (username) => {
  return db.one(
    `
    SELECT * FROM users
    WHERE username = $1
    ORDER BY id ASC
  `,
    username,
  );
};

//users 테이블 schema 불러오기
Object.setPrototypeOf(User, userStatics);
User.prototype = Object.assign(User.prototype, modelUtils(schema));

User.prototype.save = function () {
  return db
    .one(
      `
    INSERT INTO users (
      username, nickname, password_digest
    ) VALUES (
      $/username/, $/nickname/, $/password_digest/
    )
    RETURNING *
  `,
      this,
    ) //회원가입 코드
    .then((user) => this._modify(user));
};

module.exports = User;
