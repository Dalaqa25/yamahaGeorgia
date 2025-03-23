import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import productRoutes from "./routes/productRoutes.js";
import accessoryRoutes from "./routes/accessoryRoutes.js";
import { sql } from "./config/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors({
    origin: ['https://yamahageo.netlify.app', 'http://localhost:5173'],
    credentials: true
}));
app.use(helmet({
    crossOriginResourcePolicy: { policy: "cross-origin" }
}));
app.use(morgan("dev")); // log requests

// Log incoming requests
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// Use the productRoutes router
app.use("/api/products", productRoutes);

// Use the accessoryRoutes router
app.use("/api/accessories", accessoryRoutes);

async function initDB() {
    try {
        await sql`
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
        `;
        await sql`
            CREATE TABLE IF NOT EXISTS accessories (
                id SERIAL PRIMARY KEY,
                brand VARCHAR(255) NOT NULL,
                name VARCHAR(255) NOT NULL,
                image VARCHAR(255) NOT NULL,
                price DECIMAL(10, 2) NOT NULL,
                size VARCHAR(255) NOT NULL,
                inStock BOOLEAN NOT NULL,
                description TEXT NOT NULL,
                createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `;
        console.log("Database initialized!");
    } catch (error) {
        console.log("Error while initializing database:", error);
    }
}
// Root route to handle requests to "/"
app.get("/", (req, res) => {
    res.send("Server is running!");
});

initDB().then(() => {
    app.listen(PORT, () => {
        console.log("Server running on port " + PORT);
    });
});