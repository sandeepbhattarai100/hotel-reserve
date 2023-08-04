import mongoose from "mongoose";

const hotelSchema = new mongoose.Schema({

    "name": {
        type: String,
        required: true,
    },
    "type": {
        type: String,
        required: true,
    },
    "city": {
        type: String,
        required: true,
    },
    "address": {
        type: String,
        required: true,
    },
    "distance": {
        type: String,
        required: true,
    },
    "photos": {
        type: [String],
        // required: true,
    }, "title": {
        type: String,
        required: true,
    },
    "desc": {
        type: String,
        required: true,
    },
    "ratings": {
        type: Number,
        // required: true,
        min: 0,
        max: 5,
    },
    "room": {
        type: [String],

    },
    "cheapestPrice": {
        type: Number,
        required: true,
    },
    "feautred": {
        type: Boolean,
        default: false
    }

}, { timestamps: true });

export default mongoose.model("Hotel", hotelSchema);