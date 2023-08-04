import express from 'express';
import { countbyCity, createHotel, getallhotel, gethotel, searchHotels } from '../controllers/hotelController.js';
import { authUser, isAdmin } from '../helper/verifyToken.js';
const router = express.Router();


router.post('/register-hotel', authUser, isAdmin, createHotel)
router.get('/', getallhotel)
router.get('/city', searchHotels)
router.get('/countbycity', countbyCity)
router.get('/:id',gethotel)

export default router;