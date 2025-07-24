import express from "express";
import dotenv from "dotenv";
// import authRouter from "./src/routes/auth.routes.js";
// import errorHandler from "./src/middlewares/error.middleware.js";

dotenv.config();

const app = express();
app.use(express.json());

// Routes
// app.use("/api/auth", authRouter);

// Global error handler
// app.use(errorHandler);

export default app;
