import express from 'express';
import { signInUser, getUserProfile } from '../controllers/userController.js';

import { protect, admin } from '../middleware/auth.js';

const router = express.Router();

router.route('/').post(signInUser);
router.route('/profile').get(protect, admin, getUserProfile);

export default router;
