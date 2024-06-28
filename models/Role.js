import mongoose, { Schema } from "mongoose";

const RoleSchema = new mongoose.Schema({
    name:{
        type: String,
        enum: ["admin", "staff", "user"],
        required: true,
    }
    
});
export default mongoose.model("Role", RoleSchema);