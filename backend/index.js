const express = require("express");
const app = express();

app.get("/", (req,res) => {
    res.json("hi mambo this is anshul")
})

app.listen(3000);