import express from 'express';
import {
  createLiquidation,
  getAllLiquidations,
  getLiquidationById,
  updateLiquidation,
  deleteLiquidation,
} from '../controllers/liquidationController.js';


const routerLiquidation = express.Router();

// Tạo mới một việc thanh lý tài sản
routerLiquidation.post('/liquidations', createLiquidation);

// Lấy tất cả các việc thanh lý tài sản
routerLiquidation.get('/liquidations', getAllLiquidations);

// Lấy thông tin của một việc thanh lý tài sản theo ID
routerLiquidation.get('/liquidations/:id', getLiquidationById);

// Cập nhật thông tin của một việc thanh lý tài sản
routerLiquidation.put('/liquidations/:id', updateLiquidation);

// Xóa một việc thanh lý tài sản theo ID
routerLiquidation.delete('/liquidations/:id', deleteLiquidation);

export default routerLiquidation;
