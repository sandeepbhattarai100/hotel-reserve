import Hotel from '../models/hotelModel.js';
import { createError } from '../utils/error.js';
export const createHotel = async (req, res, next) => {
    try {
        const { name, type, city, address, distance, title, desc, room, cheapestPrice } = req.body;
        const newHotel = await Hotel.create({
            name,
            type, city, address, distance, title, desc, room, cheapestPrice
        })
        res.status(200).send({
            success: true,
            message: "hotel created",
            newHotel
        })
    } catch (err) {
        next(err);
    }

};
//search hotels
export const searchHotels = async (req, res, next) => {
    // const { min, max, ...others } = req.query;
    try {
        const searchRes = await Hotel.find({ city: req.query.cities });
        res.status(200).json(searchRes)
    } catch (err) {
        next(err);

    }
}

export const gethotel = async (req, res, next) => {
    try {
        const hotels = await Hotel.findById(req.params.id);
        res.status(200).json(hotels)
    } catch (err) {
        next(err);
    }
};

export const getallhotel = async (req, res, next) => {
    try {
        const hotels = await Hotel.find({});
        res.status(200).json(hotels)
    } catch (err) {
        next(err);
    }
};
//getbyCity
export const countbyCity = async (req, res, next) => {
    const cities = req.query.cities.split(",");

    try {
        const list = await Promise.all(
            cities.map((city) => {
                return Hotel.countDocuments({ city: city })
            })
        );
        // console.log(list);
        res.status(200).json(list);
    } catch (err) {
        next(err);
    }
};

//countbyType
export const countbyType = async (req, res, next) => {
    const cities = req.query.cities.split(",");

    try {
        const list = await Promise.all(
            cities.map((city) => {
                return Hotel.countDocuments({ city: city })
            })
        );
        // console.log(list);
        res.status(200).json(list);
    } catch (err) {
        next(err);
    }
}