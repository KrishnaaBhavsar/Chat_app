import express from "express";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { connectToDb } from "./lib/db.js";
import dotenv from "dotenv";
dotenv.config();
import cookieParser from "cookie-parser"
import cors from "cors";
const app = express();

const PORT=process.env.PORT;


// Middleware to parse JSON requests
app.use(express.json());

app.use(cookieParser());

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
})
);

app.use("/api/auth", authRoutes);
app.use("/api/message",messageRoutes);

app.listen(PORT, () => {
    console.log("server is running on port", PORT);
    connectToDb();
});