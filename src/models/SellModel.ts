import mongoose from "mongoose";

const sellSchema = new mongoose.Schema({
    user_id: { type: String, required: true},
    books: { type: Array, required: true},
    value: Number,
    createdAt: { type: Date, default: Date.now, required: false},
});

export default mongoose.model("Sell", sellSchema);