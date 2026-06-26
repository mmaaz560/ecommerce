import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    image: {
        type: String,
        required: false,
    },
    name: {
        type: String,
        required: false,
    },
    price: {
        type: Number,
        required: false,
    },
});

export const postProduct = mongoose.model("postProduct", postSchema);