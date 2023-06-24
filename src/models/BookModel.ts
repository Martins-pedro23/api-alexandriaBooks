import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    pageNumbers: { type: Number, required: false},
    stock: Number,
    genre: { type: String, required: false},
    createdAt: { type: Date, default: Date.now, required: false},
});

export default mongoose.model("Book", bookSchema);