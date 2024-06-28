import User from '../models/User.js';

// Tạo mới một người dùng
export const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Lấy tất cả các người dùng
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Lấy thông tin của một người dùng theo ID
export const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Cập nhật thông tin của một người dùng
export const updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Xóa một người dùng theo ID
export const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const getDepartmentsByUser = async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await User.findById(userId).populate('departments');

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const departments = await Department.find({ _id: { $in: user.departments } });

    res.status(200).json(departments);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};