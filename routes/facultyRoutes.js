import express from 'express';
import {
  createFaculty,
  getAllFaculties,
  getFacultyById,
  updateFaculty,
  deleteFaculty,
  getFacultyByStaffId
} from '../controllers/facultyController.js';


const routerFaculty = express.Router();

// Tạo mới một khoa
routerFaculty.post('/faculty', createFaculty);

// Lấy tất cả các khoa
routerFaculty.get('/faculty', getAllFaculties);

// Lấy thông tin của một khoa theo ID
routerFaculty.get('/faculty/:id', getFacultyById);

// Cập nhật thông tin của một khoa
routerFaculty.put('/faculty/:id', updateFaculty);

// Xóa một khoa theo ID
routerFaculty.delete('/faculty/:id', deleteFaculty);
routerFaculty.get('/faculty/staff/:id', getFacultyByStaffId);


export default routerFaculty;
