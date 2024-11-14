import { Router } from "express";
import TaskRouter from "./task";
const router = Router();

router.use('/tasks', TaskRouter);

export default router;
