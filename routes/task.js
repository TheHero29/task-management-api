import { Router } from "express";
import Task from "../models/task.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});






export default router;
