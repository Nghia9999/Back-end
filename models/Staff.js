// import mongoose, { Schema, Types } from "mongoose";


// const StaffSchema = new mongoose.Schema({
//     account: {
//         type: Schema.Types.ObjectId,
//         ref: 'Account',
//         required: true
//     },
//     name:{
//         type: String,
//         required: true,
//     },
//     gender: {
//         type :String,
//         default: null
//     },
//     phone: { 
//         type: String, 
//         default: null 
//     },
//     address: { 
//         type: String, 
//         default: null },
//     birthday: { 
//         type: Date, 
//         default: null },
//     faculty: {
//         type: Schema.Types.ObjectId,
//         ref: 'Faculty',
//         required: true,

//     }
// });
// export default mongoose.model("Staff", StaffSchema);
import mongoose, { Schema } from "mongoose";

const StaffSchema = new mongoose.Schema({
    account: {
        type: Schema.Types.ObjectId,
        ref: 'Account',
        required: true
    },
    name: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        default: null
    },
    phone: { 
        type: String, 
        default: null 
    },
    address: { 
        type: String, 
        default: null 
    },
    birthday: { 
        type: Date, 
        default: null 
    },
    faculties: [{  // Đổi tên thành faculties và chuyển thành mảng
        type: Schema.Types.ObjectId,
        ref: 'Faculty',
        required: true,
    }]
});

export default mongoose.model("Staff", StaffSchema);
