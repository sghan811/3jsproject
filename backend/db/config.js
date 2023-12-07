require("dotenv").config();

const options = {
  query: (e) => {
    console.log(e.query);
  },
};

const pgp = require("pg-promise")(options); //모듈 불러오기

function setDatabase() {
  //DB 로그인
  if (process.env.NODE_ENV === "development" || !process.env.NODE_ENV) {
    return pgp({
      database: process.env.DB,
      port: 5432,
      host: "localhost",
      user: process.env.DB_USER,
      password: process.env.PASS,
    });
  } else if (process.env.NODE_ENV === "production") {
    return pgp(process.env.DB_URL);
  }
}

const db = setDatabase();

module.exports = db;
