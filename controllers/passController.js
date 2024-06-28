import Pass from '../models/Pass.js';

// Tạo mới một việc chuyển giao tài sản
export const createPass = async (req, res) => {
  try {
    const pass = await Pass.create(req.body);
    res.status(201).json(pass);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Lấy tất cả các việc chuyển giao tài sản
export const getAllPasses = async (req, res) => {
  try {
    const passes = await Pass.find();
    res.status(200).json(passes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Lấy một việc chuyển giao tài sản theo ID
export const getPassById = async (req, res) => {
  try {
    const pass = await Pass.findById(req.params.id);
    if (!pass) {
      return res.status(404).json({ message: 'Pass not found' });
    }
    res.status(200).json(pass);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Cập nhật thông tin của một việc chuyển giao tài sản
export const updatePass = async (req, res) => {
  try {
    const updatedPass = await Pass.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedPass);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Xóa một việc chuyển giao tài sản theo ID
export const deletePass = async (req, res) => {
  try {
    await Pass.findByIdAndDelete(req.params.id);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
