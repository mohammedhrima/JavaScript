require("dotenv");
const express = require("express");
const app = express();
const cors = require("cors")

app.use(cors())
app.use(express.json());

let PORT = process.env.PORT || 4000;
let list = [
    {
        id: 0,
        name: "user1",
    },
    {
        id: 2,
        name: "user2",
    },
];

app.get("/", (req, res) => {
    res.status(200).json(list);
});

app.listen(PORT, () => {
    console.log("connection set succefully on port", PORT);
});
