const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("contacts 이후 url");
});

router.get("/lists", (req, res) => {
    res.send("contacts lists");
});

module.exports = router;
