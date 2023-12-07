const router = require("express").Router();

//api 버전 분류
router.use("/v1", require("./v1"));

module.exports = router;
