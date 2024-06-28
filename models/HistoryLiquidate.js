import mongoose, { Schema } from "mongoose";

const HistoryLiquidateSchema = new mongoose.Schema({
    name: {
        type: String,
       // required: true,
    },
    quantity: {
        type: String,
       // required: true,
    },
    price: {
        type: String,
        //required: true,
    },
    dateliquidate: {
        type: String,
        //required: true,
    }
});

export default mongoose.model("HistoryLiquidate", HistoryLiquidateSchema);
