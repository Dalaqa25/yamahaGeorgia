import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import productRoutes from "./routes/productRoutes.js";
import { sql } from "./config/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors())
app.use(helmet()) // this will help us to secure a application
app.use(morgan("dev")); // log requests

//get request
app.use("/api/products", productRoutes)

async function initDB() {
    try {
        await sql `
            CREATE TABLE IF NOT EXISTS motorcycles (
                id SERIAL PRIMARY KEY,
                brand VARCHAR(255) NOT NULL,
                name VARCHAR(255) NOT NULL,
                image VARCHAR(255) NOT NULL,
                price DECIMAL(10, 2) NOT NULL,
                engine VARCHAR(255) NOT NULL,
                inStock BOOLEAN NOT NULL,
                transmission VARCHAR(255) NOT NULL,
                year INT NOT NULL,
                description TEXT NOT NULL,
                createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `
        console.log("Database initialized!")
    } catch(error) {
        console.log("error while initDB", error)
    }
}

initDB().then(() => {
    app.listen(PORT, () => {
        console.log("Server running on port " + PORT);
    })    
})  