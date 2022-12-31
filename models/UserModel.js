import { Int32 } from "mongodb";
import mongoose from "mongoose";

const User = mongoose.Schema({
    addonname: {
        type: String,
        required: true
    },
    addondailyrate: {
        type: Number,
        required: true
    },
    ratevalidupto: {
        type: Date,
        required: true
    }
});

export default mongoose.model('Users', User);