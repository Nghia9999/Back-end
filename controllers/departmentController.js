import Department from '../models/Department.js';

// Tạo mới một bộ phận
export const createDepartment = async (req, res) => {
  try {
    const { name, faculty } = req.body;
    const newDepartment = new Department({ name, faculty });
    const savedDepartment = await newDepartment.save();
    res.status(201).json(savedDepartment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Lấy tất cả các bộ phận
export const getAllDepartments = async (req, res) => {
  try {
    const departments = await Department.find(req.params.id).populate('faculty');
    
    res.status(200).json(departments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Lấy một bộ phận theo ID
export const getDepartmentById = async (req, res) => {
  try {
    const department = await Department.findById(req.params.id);
    if (!department) {
      return res.status(404).json({ message: 'Department not found' });
    }
    res.status(200).json(department);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Cập nhật thông tin của một bộ phận
export const updateDepartment = async (req, res) => {
  try {
    const updatedDepartment = await Department.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedDepartment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Xóa một bộ phận theo ID
export const deleteDepartment = async (req, res) => {
  try {
    await Department.findByIdAndDelete(req.params.id);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const getDepartmentsByFaculty = async (req, res) => {
  try {
    const departments = await Department.find({ faculty: req.params.facultyId });
    res.status(200).json(departments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const getDepartmentsByMultipleFacultyIds = async (req, res) => {
  try {
    // Tách các ID thành mảng
    const faculties = req.params.faculties.split(',');
    // Tìm kiếm các bộ phận với faculty là một trong các ID đã tách
    const departments = await Department.find({ faculty: { $in: faculties } }).populate('faculty');
    
    res.status(200).json(departments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const getDepartmentsByMultipleDepartmentIds = async (req, res) => {
  try {
    // Tách các ID của phòng thành mảng
    
    const departmentIds = req.params.departmentIds.split(',');
    
    // Tìm kiếm các bộ phận với _id là một trong các ID đã tách
    const departments = await Department.find({ _id: { $in: departmentIds } }).populate('faculty');

    res.status(200).json(departments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};