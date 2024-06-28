import mongoose, { Schema, Types } from "mongoose";


const UserSchema = new mongoose.Schema({
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
        default: null },
    departments: [{
        type: Schema.Types.ObjectId,
        ref: 'Department'
          }]
    
});
export default mongoose.model("User", UserSchema);