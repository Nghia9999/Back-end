import mongoose, { Schema } from "mongoose";

const LiquidationSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    price: {
        type :String,
        default: null
    },
    dateliquidation: { 
        type: Date, 
        default: null 
    },
    codebill: { 
        type: String, 
        default: null 
    },
    asset: {
        type: Schema.Types.ObjectId,
        ref: 'Asset',
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
    
});
export default mongoose.model("Liquidation", LiquidationSchema);