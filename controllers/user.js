import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import apiError from "../utils/apiError.js";
import dotenv from "dotenv";
import { z } from "zod";

dotenv.config();
let userController = {};

const validUserSchema = z.object({
  name: z.string().min(1, { message: "User name is required" }),
  email: z.string().min(1, { message: "Email is required" }),
  password: z.string().min(1, { message: "Password is required" }),
});
userController.regesterUser = async (req, res, next) => {
  try {
    const body = req.body;

    const userExists = await User.findOne({ email: body.email });
    if (userExists) throw new apiError("User already exists",400);

    const validUser = validUserSchema.parse(body);

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(validUser.password, salt);

    validUser.password = hashedPassword;
    const user = User.create(validUser);

    return res.status(201).json({
      success: true,
      message: "user created successfully",
    });
  } catch (err) {
    next(err);
  }
};

userController.loginUser = async (req, res, next) => {
  try {
    const body = req.body;
    const user = await User.findOne({ email: body.email });
    if (!user) throw new apiError("User not found",404);

    const isValid = await bcrypt.compare(req.body.password, user.password);
    if (!isValid) throw new apiError("Invalid password",401);

    const token = jwt.sign({ user_id: user._id }, process.env.JWT_SECRET);

    res.status(200).send({
      message: "User logged in successfully",
      token: token,
    });
  } catch (err) {
    next(err);
  }
};

export default userController;
