// import Staff from '../models/Staff.js';

// // Tạo mới một nhân viên
// export const createStaff = async (req, res) => {
//   try {
//     const staff = await Staff.create(req.body);
//     res.status(201).json(staff);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

// // Lấy tất cả các nhân viên
// export const getAllStaffs = async (req, res) => {
//   try {
//     const staffs = await Staff.find(req.params.id).populate('faculty');
//     res.status(200).json(staffs);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // Lấy thông tin của một nhân viên theo ID
// export const getStaffById = async (req, res) => {
//   try {
//     const staff = await Staff.findById(req.params.id);
//     if (!staff) {
//       return res.status(404).json({ message: 'Staff not found' });
//     }
//     res.status(200).json(staff);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // Cập nhật thông tin của một nhân viên
// export const updateStaff = async (req, res) => {
//   try {
//     const updatedStaff = await Staff.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     res.status(200).json(updatedStaff);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

// // Xóa một nhân viên theo ID
// export const deleteStaff = async (req, res) => {
//   try {
//     await Staff.findByIdAndDelete(req.params.id);
//     res.status(204).end();
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };
import Staff from '../models/Staff.js';

// Tạo mới một nhân viên
export const createStaff = async (req, res) => {
  try {
    const staff = await Staff.create(req.body);
    res.status(201).json(staff);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Lấy tất cả các nhân viên
export const getAllStaffs = async (req, res) => {
  try {
    const staffs = await Staff.find().populate('faculties');
    res.status(200).json(staffs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Lấy thông tin của một nhân viên theo ID
export const getStaffById = async (req, res) => {
  try {
    const staff = await Staff.findById(req.params.id).populate('faculties');
    if (!staff) {
      return res.status(404).json({ message: 'Staff not found' });
    }
    res.status(200).json(staff);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Cập nhật thông tin của một nhân viên
export const updateStaff = async (req, res) => {
  try {
    const updatedStaff = await Staff.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedStaff);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Xóa một nhân viên theo ID
export const deleteStaff = async (req, res) => {
  try {
    await Staff.findByIdAndDelete(req.params.id);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
