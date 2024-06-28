import Liquidation from '../models/Liquidation.js';

// Tạo mới một việc thanh lý tài sản
export const createLiquidation = async (req, res) => {
  try {
    const liquidation = await Liquidation.create(req.body);
    res.status(201).json(liquidation);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
export const getAllLiquidations = async (req, res) => {
    try {
      const liquidations = await Liquidation.find();
      res.status(200).json(liquidations);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Lấy một việc thanh lý tài sản theo ID
  export const getLiquidationById = async (req, res) => {
    try {
      const liquidation = await Liquidation.findById(req.params.id);
      if (!liquidation) {
        return res.status(404).json({ message: 'Liquidation not found' });
      }
      res.status(200).json(liquidation);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Cập nhật thông tin của một việc thanh lý tài sản
  export const updateLiquidation = async (req, res) => {
    try {
      const updatedLiquidation = await Liquidation.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.status(200).json(updatedLiquidation);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Xóa một việc thanh lý tài sản theo ID
  export const deleteLiquidation = async (req, res) => {
    try {
      await Liquidation.findByIdAndDelete(req.params.id);
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };