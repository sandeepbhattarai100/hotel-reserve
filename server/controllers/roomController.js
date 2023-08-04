import Room from '../models/roomModel.js';
import Hotel from '../models/hotelModel.js';
import { createError } from '../utils/error.js';


export const createRoom = async (req, res, next) => {
    const hotelId = req.params.hotelId;
    const newRoom = Room.create(req.body);
    try {
        const savedRoom = await newRoom;

        try {
            await Hotel.findByIdAndUpdate(hotelId, {
                $push: { room: savedRoom._id },
            });
        } catch (err) {
            // next(err);
            console.log(err);

        }

        res.status(500).json({
            success: true,
            message: "room created",
            savedRoom
        })

    } catch (err) {
        next(err);

    }
};

export const updateRoom = async (req, res, next) => {

    try {
        const updatedRoom = await Room.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {
            new: true
        })
        res.status(200).json({
            updatedRoom
        })
    } catch (err) {
        next(err);
    }

};