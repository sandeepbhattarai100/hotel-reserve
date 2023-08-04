import jwt from 'jsonwebtoken';
import { createError } from '../utils/error.js';
import User from '../models/userModel.js';

export const authUser = (req, res, next) => {

    try {
        const decode = jwt.verify(req?.headers?.authorization, process.env.SECRET_KEY);
        req.user = decode;
        next();

    } catch (err) {
        next(err)

    }
}

export const isAdmin = async (req, res, next) => {

    try {
        const user = await User.findById(req.user.id);
        if (!user?.role) {
            next(createError(401, "unauthorized access"));
        }
        else {
            next();
        }
    } catch (err) {
        next(err);

    }

}