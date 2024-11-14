import { Router } from "express";
import TaskRouter from "./task.js";
import UserRouter from "./user.js";
import authMiddleware from "../middlewares/auth.js";

const router = Router();

router.use('/tasks', authMiddleware,TaskRouter);
router.use('/auth', UserRouter);
export default router;
