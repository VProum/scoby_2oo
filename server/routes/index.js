var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
    console.log("toto");
    res.json("hello world");
});

router.get("/toto", function(req, res, next) {
    console.log("toto");
    res.json("hello world");
});

module.exports = router;