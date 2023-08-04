import User from '../models/userModel.js';
import { createError } from '../utils/error.js';
import { comparePassword, hashPassword } from '../helper/authHelper.js';
import jwt from 'jsonwebtoken';

export const register = async (req, res, next) => {
    try {
        const { username, email, password, country, city, phone } = req.body;
        const user = await User.findOne({ email });
        if (user) {
            next(createError(400, "user is already registered with this username"))
        }
        const hashedPassword = await hashPassword(password);
        const newUser = await User.create({
            username,
            email,
            password: hashedPassword,
            country,
            city,
            phone


        })
        res.status(200).send({
            success: true,
            newUser
        })

    } catch (err) {
        next(err);

    }
};

export const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) return next(createError(404, "user not found"));
        const compare = comparePassword(password, user.password);
        if (compare) {
            const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, {
                expiresIn: '7d'
            });

            res.status(200).send({
                success: true,
                message: "login successful",
                user: {
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                    role: user.role
                },
                token
            })
        }
        else {
            console.log(false);
        }

    } catch (err) {
        next(err);

    }
}