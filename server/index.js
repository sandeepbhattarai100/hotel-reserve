import express from "express";
import { dbConfig } from './utils/dbConnect.js';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';
import hotelRoutes from './routes/hotelRoutes.js';
import roomRoutes from './routes/roomRoutes.js'
import cors from 'cors';
import morgan from "morgan";

dotenv.config();

dbConfig();


const app = express();

//middlewares
app.use(express.json());
app.use(morgan());
app.use(cors({
    origin: '*'
}));

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/hotel', hotelRoutes);
app.use('/api/v1/rooms', roomRoutes);


app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "someting went wrong";
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack
    })
});
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`server running on port ${port}`);
})