import express from "express";
import { config } from "dotenv";

config();

const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hello word!")
});

app.listen(port, () => console.log(`listen on port ${port}!`));
