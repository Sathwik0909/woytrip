import jwt from 'jsonwebtoken';
import { AppError } from '../utils/appError.js';
import { catchAsync } from '../utils/catchAsync.js';
import Admin from '../models/Admin.js';
// Add this to your middlewares
export const protect = catchAsync(async (req, res, next) => {
  let token;
  if (req.headers.authorization?.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) return next(new AppError('Not authenticated', 401));

  // Verify token
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  
  // Check if token exists in database
  const admin = await Admin.findOne({
    _id: decoded.id,
    'tokens.token': token
  });

  if (!admin) return next(new AppError('Session expired', 401));

  req.admin = admin;
  next();
});