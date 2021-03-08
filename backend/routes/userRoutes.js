import express from 'express';
import { signInUser, getUserProfile } from '../controllers/userController.js';

import { protect } from '../middleware/auth.js';

const router = express.Router();

router.route('/').post(signInUser);
router.route('/profile').get(protect, getUserProfile);

export default router;
