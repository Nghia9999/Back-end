import express from 'express';
import {
  createStaff,
  getAllStaffs,
  getStaffById,
  updateStaff,
  deleteStaff,
} from '../controllers/staffController.js';
import { authorizeRoles } from '../middleware/auth.js';


const routerStaff = express.Router();

// Tạo mới một nhân viên
routerStaff.post('/staffs', createStaff);

// Lấy tất cả các nhân viên
routerStaff.get('/staffs', getAllStaffs);

// Lấy thông tin của một nhân viên theo ID
routerStaff.get('/staffs/:id', getStaffById);

// Cập nhật thông tin của một nhân viên
routerStaff.put('/staffs/:id', updateStaff);

// Xóa một nhân viên theo ID
routerStaff.delete('/staffs/:id', deleteStaff);

export default routerStaff;
