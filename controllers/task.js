import Task from "../models/task.js";
import { z } from "zod";
import apiError from "../utils/apiError.js";
let taskController = {};

const validTaskSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  description: z.string().min(1, { message: "Description is required" }),
  status: z.enum(["pending", "in-progress", "completed"], {
    message: "Status is required",
  }),
  priority: z.enum(["low", "medium", "high"], {
    message: "Priority is required",
  }),
  // dueDate: z.date({ message: "Due date is required" }),
});



taskController.createTask = async (req, res, next) => {
  try {
    let validTask = validTaskSchema.parse(req.body);
    validTask.userId = req.user_id;
    const task = await Task.create(validTask);
    res.status(201).json(task);
  } catch (error) {
    next(error);
  }
};

taskController.getTasks = async (req, res, next) => {
  try {
    const tasks = await Task.find();
    if(!tasks) throw new apiError("No tasks available",404);
    res.status(200).json(tasks);
  } catch (error) {
    next(error);
  }
};

taskController.getTask = async (req, res, next) => {
  try {
    const task = await Task.findById(req.params.id);
    if(!task) throw new apiError("Task not found",404);
    res.status(200).json(task);
  } catch (error) {
    next(error);
  }
};

taskController.updateTask = async (req, res, next) => {
  try {
    const body = req.body;
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if(!task) throw new apiError("Task not found",404);
    res.status(200).json(task);
  } catch (error) {
    next(error);
  }
};

taskController.deleteTask = async (req, res, next) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if(!task) throw new apiError("Task not found",404);
    res.status(200).json(task);
  } catch (error) {
    next(error);
  }
};

export default taskController;
