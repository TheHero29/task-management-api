function errorHandler(err, req, res, next) {
  const status = err.status || 500;
  const errorResponse = {
    message: err.message || "Internal Server Error",
    code: err.code || "INTERNAL_ERROR",
    status,
    timestamp: new Date().toISOString(),
  };
  
  res.status(status).json(errorResponse);
}

export default errorHandler;
