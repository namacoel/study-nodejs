const express = require("express");
const admin = require("./routes/admin");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Hello express");
});

app.get("/fastcampus", (req, res) => {
    res.send("Hello fastcampu111");
});
app.use("/admin", admin);
app.listen(port, () => {
    console.log("Express listening on port", port);
});
