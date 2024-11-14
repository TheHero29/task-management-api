import { Router } from "express";
import taskController from "../controllers/task";

const TaskRouter = Router();

TaskRouter.post("/", taskController.createTask);

TaskRouter.get("/", taskController.getTasks);

TaskRouter.get("/:id", taskController.getTask);

TaskRouter.put("/:id", taskController.updateTask);

TaskRouter.delete("/:id", taskController.deleteTask);

export default TaskRouter;
