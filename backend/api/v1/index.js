const router = require("express").Router();

//api 경로 분류
router.use("/user", require("./user"));

module.exports = router;
