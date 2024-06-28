import express from 'express';
import {
  createPass,
  getAllPasses,
  getPassById,
  updatePass,
  deletePass,
} from '../controllers/passController.js';


const routerPass = express.Router();

// Tạo mới một việc chuyển giao tài sản
routerPass.post('/passes', createPass);

// Lấy tất cả các việc chuyển giao tài sản
routerPass.get('/passes', getAllPasses);

// Lấy thông tin của một việc chuyển giao tài sản theo ID
routerPass.get('/passes/:id', getPassById);

// Cập nhật thông tin của một việc chuyển giao tài sản
routerPass.put('/passes/:id', updatePass);

// Xóa một việc chuyển giao tài sản theo ID
routerPass.delete('/passes/:id', deletePass);

export default routerPass;
