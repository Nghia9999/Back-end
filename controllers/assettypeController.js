import AssetType from '../models/AssetType.js';

// Tạo loại tài sản mới
export const createAssetType = async (req, res) => {
  try {
    const { name } = req.body;
    const newAssetType = new AssetType({ name });
    const savedAssetType = await newAssetType.save();
    res.status(201).json(savedAssetType);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};