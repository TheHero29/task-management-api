import { Router } from "express";
import TaskRouter from "./task.js";
import UserRouter from "./user.js";

const router = Router();

router.use('/tasks', TaskRouter);
router.use('/auth', UserRouter);
export default router;
