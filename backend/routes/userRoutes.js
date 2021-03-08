import express from 'express';
import { signInUser } from '../controllers/userController.js';

const router = express.Router();

router.route('/').post(signInUser);

export default router;
