import mongoose, { Schema } from "mongoose";

const AssetTypeSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    }
    
});
export default mongoose.model("AssetType", AssetTypeSchema);