import { Router } from "express";
import UserController from "../controllers/user.js";

const UserRouter = Router();

UserRouter.post("/register", UserController.regesterUser);
UserRouter.post("/login", UserController.loginUser);

export default UserRouter;
