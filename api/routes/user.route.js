import express from 'express'
import { text, updateUser, deleteUser } from '../controllers/user.controller.js';
import { verifyToken } from '../utills/verifyUser.js';

const router = express.Router();

router.get("/text", text);
router.post('/update/:id', verifyToken, updateUser );
router.delete('/delete/:id', verifyToken, deleteUser );

export default router;