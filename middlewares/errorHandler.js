function errorHandler(err, req, res, next) {
  const status = err.status || 500;
  const errorResponse = {
    message: err.message || "Internal Server Error",
    timestamp: new Date().toISOString(),
  };
  if (process.env.NODE_ENV === "development" && err.stack) {
    console.error(err);
  }
  res.status(status).json(errorResponse);
}

export default errorHandler;
