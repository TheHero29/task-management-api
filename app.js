import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import routes from "./routes/index.js";
import errorHandler from "./middlewares/errorHandler.js";
import logger from "./middlewares/logger.js";
import authMiddleware from "./middlewares/auth.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 8080;

//connecting to database
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Failed to connect to MongoDB...", err));

//Middlewares
app.use(express.json());
app.use(cors());
app.use(logger);

//Routes
app.use("/",authMiddleware,routes);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;