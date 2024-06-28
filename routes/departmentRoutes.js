import express from 'express';
import {
  createDepartment,
  getAllDepartments,
  getDepartmentById,
  updateDepartment,
  deleteDepartment,
  getDepartmentsByFaculty,
  getDepartmentsByMultipleFacultyIds,
  getDepartmentsByMultipleDepartmentIds
} from '../controllers/departmentController.js';

const routerDepartment = express.Router();

// Tạo mới một bộ phận
routerDepartment.post('/departments', createDepartment);

// Lấy tất cả các bộ phận
routerDepartment.get('/departments', getAllDepartments);

// Lấy thông tin của một bộ phận theo ID
routerDepartment.get('/departments/:id', getDepartmentById);

// Cập nhật thông tin của một bộ phận
routerDepartment.put('/departments/:id', updateDepartment);

// Xóa một bộ phận theo ID
routerDepartment.delete('/departments/:id', deleteDepartment);

routerDepartment.get('/department/:facultyId', getDepartmentsByFaculty);
routerDepartment.get('/department/faculties/:faculties', getDepartmentsByMultipleFacultyIds);
routerDepartment.get('/departments/staff/:departmentIds', getDepartmentsByMultipleDepartmentIds);

export default routerDepartment;
