import Admin from '../models/Admin.js';

// Tạo mới một admin
export const createAdmin = async (req, res) => {
  try {
    const admin = await Admin.create(req.body);
    res.status(201).json(admin);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
