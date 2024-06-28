import mongoose, { Schema, Types } from "mongoose";

const DepartmentSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    faculty: {
        type: Schema.Types.ObjectId,
        ref: 'Faculty',
        required: true
    }
    
});
export default mongoose.model("Department", DepartmentSchema);