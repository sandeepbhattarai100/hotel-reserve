import express from 'express';
import { createRoom, updateRoom } from '../controllers/roomController.js';
import { isAdmin, authUser } from '../helper/verifyToken.js';

const router = express.Router();

router.post('/:hotelId', authUser, isAdmin, createRoom)
//update room
router.put('/:id', authUser, isAdmin, updateRoom);

export default router;