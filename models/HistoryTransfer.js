import mongoose, { Schema } from "mongoose";

const HistoryTransferSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    quantity: {
        type: String,
        required: true,
    },
    // currentDepartment: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'Department',
    //     required: true,
    // },
    department: {
        type: String,
    
        required: true,
    },
    // newDepartment: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'Department',
    //     required: true,
    // },
    newDepartment: {
        type: String,
        required: true,
    },
    transferDate: {
        type: String,
        //default: Date.now,
    },
});

export default mongoose.model("HistoryTransfer", HistoryTransferSchema);
