import Faculty from '../models/Faculty.js';
import Staff from '../models/Staff.js';

// Tạo mới một khoa
export const createFaculty = async (req, res) => {
  try {
    const { name } = req.body;
    const newFaculty = new Faculty({ name });
    const savedFaculty = await newFaculty.save();
    res.status(201).json(savedFaculty);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Lấy tất cả các khoa
export const getAllFaculties = async (req, res) => {
  try {
    const faculties = await Faculty.find();
    res.status(200).json(faculties);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Lấy một khoa theo ID
export const getFacultyById = async (req, res) => {
  try {
    const faculty = await Faculty.findById(req.params.id);
    if (!faculty) {
      return res.status(404).json({ message: 'Faculty not found' });
    }
    res.status(200).json(faculty);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Cập nhật thông tin của một khoa
export const updateFaculty = async (req, res) => {
  try {
    const updatedFaculty = await Faculty.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedFaculty);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Xóa một khoa theo ID
export const deleteFaculty = async (req, res) => {
  try {
    await Faculty.findByIdAndDelete(req.params.id);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const getFacultyByStaffId = async (req, res) => {
  const { id } = req.params;
  try {
    const staff = await Staff.findById(id).populate('faculties');
    if (!staff) {
      return res.status(404).json({ message: 'Staff not found' });
    }
    res.json(staff.faculties);
  } catch (error) {
    res.status(500).json({ message: 'Failed to get faculties' });
  }
};