import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import productRoutes from "./routes/productRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors())
app.use(helmet()) // this will help us to secure a application
app.use(morgan("dev")); // log requests

//get request
app.use("/api/products", productRoutes)

app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
})