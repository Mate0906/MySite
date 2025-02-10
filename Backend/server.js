const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("A szerver fut!");
});

app.listen(3000, () => console.log("A szerver fut a http://localhost:3000 címen"));