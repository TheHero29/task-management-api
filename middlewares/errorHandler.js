import { ZodError } from "zod";

function errorHandler(err, req, res, next) {
  let status = err.status || 500;
  let message = err.message || "Internal Server Error";
  if (err instanceof ZodError) {
    status = 400;
    message = err.errors[0].message;
  }
  const errorResponse = {
    message: message,
    timestamp: new Date().toISOString(),
  };
  if (process.env.NODE_ENV === "development" && err.stack) {
    console.error(err);
  }
  res.status(status).json(errorResponse);
}

export default errorHandler;
