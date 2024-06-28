import mongoose, { Schema } from "mongoose";

const AdminSchema = new mongoose.Schema({
    account: {
        type: Schema.Types.ObjectId,
        ref: 'Account',
        required: true
    },
    name:{
        type: String,
        required: true,
    },
    gender: {
        type :Boolean,
        default: null
    },
    phone: { 
        type: String, 
        default: null 
    },
    address: { 
        type: String, 
        default: null },
    birthday: { 
        type: Date, 
        default: null }
});
export default mongoose.model("Admin", AdminSchema);