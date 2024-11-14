import jwt from "jsonwebtoken";
import dotenv from "dotenv";  
dotenv.config();

const authMiddleware = (req, res, next) => {
  try {
    const token = req.headers.token;
    if(!token) throw new Error("Token not found").status(401);
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user_id = decoded.user_id;
    next();
  } catch (err) {
    next(err);
  }
};

export default authMiddleware;