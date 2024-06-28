import Asset from '../models/Asset.js';

export const createAsset = async (req, res) => {
  try {
    const newAsset = new Asset(req.body);
    const savedAsset = await newAsset.save();
    res.status(201).json(savedAsset);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
export const getAllAssets = async (req, res) => {
    try {
      const assets = await Asset.find()
        .populate({
          path: 'assettype',
          select: 'name'
        })
        .populate({
          path: 'department',
          select: 'name'
        });
      res.status(200).json(assets);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  export const getAssetById = async (req, res) => {
    try {
      const asset = await Asset.findById(req.params.id);
      if (!asset) {
        return res.status(404).json({ message: 'Asset not found' });
      }
      res.status(200).json(asset);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  // export const updateAsset = async (req, res) => {
  //   try {
  //     const updatedAsset = await Asset.findByIdAndUpdate(req.params.id, req.body, { new: true });
  //     res.status(200).json(updatedAsset);
  //   } catch (error) {
  //     res.status(400).json({ message: error.message });
  //   }
  // };
  export const updateAsset = async (req, res) => {
    try {
    
      const updatedAsset = await Asset.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.status(200).json(updatedAsset);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  export const deleteAsset = async (req, res) => {
    try {
      await Asset.findByIdAndDelete(req.params.id);
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
        
  // export const getAssetsByDepartment = async (req, res) => {
  //   try {
  //     const assets = await Asset.find({ department: req.params.departmentId })
  //       .populate({
  //         path: 'assettype',
  //         select: 'name'
  //       })
  //       .populate({
  //         path: 'department',
  //         select: 'name'
  //       });
  //     res.status(200).json(assets);
  //   } catch (error) {
  //     res.status(500).json({ message: error.message });
  //   }
  // };
  export const getAssetsByDepartment = async (req, res) => {
    try {
      const departmentId = req.params.departmentId.split(','); // Chia các departmentIds thành mảng các ID
      
      // Tìm kiếm các tài sản trong các phòng ban có departmentId trong danh sách departmentIds
      const assets = await Asset.find({ department: { $in: departmentId } })
        .populate({
          path: 'assettype',
          select: 'name'
        })
        .populate({
          path: 'department',
          select: 'name'
        });
  
      res.status(200).json(assets);
    } catch (error) {
      console.error("Error in getAssetsByDepartments:", error);
      res.status(500).json({ message: "Server Error", error: error.message });
    }
  };
  export const liquidateAsset = async (req, res) => {
    try {
      const asset = await Asset.findById(req.params.id);
      if (!asset) {
        return res.status(404).json({ message: 'Asset not found' });
      }
      // Thực hiện logic thanh lý tài sản ở đây
      // Ví dụ:
      // asset.status = 'Liquidated';
      // await asset.save();
      res.status(200).json({ message: 'Asset liquidated successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Thêm hàm xử lý chuyển giao tài sản
  export const transferAsset = async (req, res) => {
    try {
      const asset = await Asset.findById(req.params.id);
      if (!asset) {
        return res.status(404).json({ message: 'Asset not found' });
      }
      // Thực hiện logic chuyển giao tài sản ở đây
      // Ví dụ:
      // asset.department = req.body.newDepartmentId;
      // await asset.save();
      res.status(200).json({ message: 'Asset transferred successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

export const getAssetsByFaculties = async (req, res) => {
  try {
      const { facultyId } = req.params;
      const facultyIdsArray = facultyId.split(',');

      const assets = await Asset.find().populate({
          path: 'department',
          populate: {
              path: 'faculty',
              match: { _id: { $in: facultyIdsArray } }
          }
      }).populate('assettype');

      const filteredAssets = assets.filter(asset => asset.department !== null);

      res.json(filteredAssets);
  } catch (error) {
      console.error("Error in getAssetsByFaculties:", error); // Log lỗi để dễ dàng xác định lỗi
      res.status(500).json({ message: "Server Error", error: error.message }); // Trả về phản hồi lỗi chi tiết
  }
};
