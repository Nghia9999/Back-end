import express from 'express';
import {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  getDepartmentsByUser,
} from '../controllers/userController.js';

const routerUser = express.Router();

// Tạo mới một người dùng
routerUser.post('/users', createUser);

// Lấy tất cả các người dùng
routerUser.get('/users', getAllUsers);

// Lấy thông tin của một người dùng theo ID
routerUser.get('/users/:id', getUserById);

// Cập nhật thông tin của một người dùng
routerUser.put('/users/:id', updateUser);

// Xóa một người dùng theo ID
routerUser.delete('/users/:id', deleteUser);
routerUser.get('/users/:userId/departments', getDepartmentsByUser);
export default routerUser;
