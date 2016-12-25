const express = require("express");
const app = express();


app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/app/index.html");
});


app.listen(8080, () => {
    console.log("Server started...");
});