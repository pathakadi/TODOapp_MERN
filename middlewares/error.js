class ErrorHandler extends Error {
  constructor(message, statusCode) {
    // The super keyword is used to call the constructor of its parent class to access the parent's properties and methods.
    // Like Inheritance
    super(message);
    this.statusCode = statusCode;
  }
}

export const errorMiddleware = (err, req, res, next) => {
  err.message = err.message || "Internal Server Error";
  err.statusCode = err.statusCode || 500;

  return res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};

export default ErrorHandler;
