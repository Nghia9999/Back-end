import mongoose, { Schema } from "mongoose";

const PassSchema = new mongoose.Schema({
    asset: {
        type: Schema.Types.ObjectId,
        ref: 'Asset',
        required: true
    },
    quantity: {
        type: String,
        required: true
    },
    datepass: { 
        type: Date, 
        default: null 
    },
    devicecode: {
        type: String,
        default: null
    },
    
    departmentfrom: {
        type: Schema.Types.ObjectId,
        ref: 'Department',
        required: true
    },
    departmentto: {
        type: Schema.Types.ObjectId,
        ref: 'Department',
        required: true
    },
    
    
});
export default mongoose.model("Pass", PassSchema);