import HistoryTransfer from '../models/HistoryTransfer.js';

// export const createHistoryTransfer = async (req, res) => {
//     try {
//         const newHistoryTransfer = new HistoryTransfer(req.body);
//         const savedHistoryTransfer = await newHistoryTransfer.save();
//         res.status(201).json(savedHistoryTransfer);
//     } catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// };
export const createHistoryTransfer = async (req, res) => {
    try {
        // Loại bỏ trường '_id' khỏi đối tượng 'req.body'
        const { _id, ...dataWithoutId } = req.body;

        const newHistoryTransfer = new HistoryTransfer(dataWithoutId);
        const savedHistoryTransfer = await newHistoryTransfer.save();
        res.status(201).json(savedHistoryTransfer);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
export const getAllHistoryTransfers = async (req, res) => {
    try {
        const historyTransfers = await HistoryTransfer.find()
            .populate({
                path: 'department',
                select: 'name',
            })
            .populate({
                path: 'newDepartment',
                select: 'name',
            });
        res.status(200).json(historyTransfers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
