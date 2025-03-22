import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors())
app.use(helmet()) // this will help us to secure a application
app.use(morgan("dev")); // log requests

//get request
app.get("/", (req, res) => {
    console.log(res.getHeaders())
    res.send("hello backend")
})

app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
})