import HistoryLiquidate from '../models/HistoryLiquidate.js';

export const createHistoryLiquidate = async (req, res) => {
    try {
      const newHistory = new HistoryLiquidate(req.body);
      const savedHistory = await newHistory.save();
      res.status(201).json(savedHistory);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Lấy tất cả các lịch sử thanh lý tài sản
  export const getAllHistoryLiquidates = async (req, res) => {
    try {
      const histories = await HistoryLiquidate.find();
      res.status(200).json(histories);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };