import mongoose, { Schema } from "mongoose";

const AssetSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    price: {
        type :String,
        default: null
    },
    description: { 
        type: String, 
        default: null 
    },
    dateuse: { 
        type: String, 
        default: null 
    },
    wearrate: { 
        type: String, 
        default: null 
    },
    devicecode: {
        type: String,
        default: null
    },
    assettype: {
        type: Schema.Types.ObjectId,
        ref: 'AssetType',
        required: true
    },
    department: {
        type: Schema.Types.ObjectId,
        ref: 'Department',
        required: true
    },
    quantity: {
        type: String,
        required: true
    },
    specification: {
        type: String,
        default: null,
    }
});
export default mongoose.model("Asset", AssetSchema);