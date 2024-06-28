import express from 'express';
import {
  createAsset,
  getAllAssets,
  getAssetById,
  updateAsset,
  deleteAsset,
  getAssetsByDepartment,
  liquidateAsset, // Thêm import cho hàm xử lý thanh lý tài sản
  transferAsset,
  
  getAssetsByFaculties,
} from '../controllers/assetController.js';

const routerAsset = express.Router();

// Định nghĩa các tuyến đường (routes) cho các phương thức API
routerAsset.post('/asset/', createAsset); // Tạo mới một tài sản
routerAsset.get('/asset/', getAllAssets); // Lấy tất cả các tài sản
routerAsset.get('/asset/:id', getAssetById); // Lấy thông tin của một tài sản theo ID
routerAsset.put('/asset/:id', updateAsset); // Cập nhật thông tin của một tài sản
routerAsset.delete('/asset/:id', deleteAsset); // Xóa một tài sản theo ID
routerAsset.get('/asset/department/:departmentId', getAssetsByDepartment);
routerAsset.get('/asset/faculty/:facultyId',getAssetsByFaculties);
//routerAsset.post('/asset/liquidate/:id', liquidateAsset);
// Thêm đường dẫn mới cho phương thức chuyển giao tài sản
//routerAsset.post('/asset/transfer/:id', transferAsset);
export default routerAsset;
