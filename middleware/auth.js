
import User from "../models/User.js";
export const authorizeRoles = (...roles) => {
    return (req, res, next) => {
      if (!roles.includes(req.user.role)) {
        return next(
          new ErrorHander(
            `Role: ${req.user.role} is not allowed to access this resource`,
            403
          )
        );
      }
  
      next();
    };
};