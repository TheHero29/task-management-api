const statusMessages = {
  200: "OK",
  201: "Created",
  400: "Bad Request",
  401: "Unauthorized",
  404: "Not Found",
  500: "Internal Server Error",
};

export const createSuccessResponse = (data,status = '200') => {
  return {
    status: status,
    code: statusMessages[status],
    data: data,
    error: null,
  };
};

export const createErrorResponse = (message="Something went wrong",status = '500') => {
  return {
    status: status,
    code: statusMessages[status],
    data: null,
    error: {
      message: message,
      timestamp: new Date().toISOString(),
    },
  };
};
