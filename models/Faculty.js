import mongoose, { Schema } from "mongoose";

const FacultySchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    }
    
});
export default mongoose.model("Faculty", FacultySchema);