import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// middlewares
app.use(express.json());
app.use(cors());

// routes

// error handling

// server running
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})