import express from 'express';

import {
    getPosts,
    getPostById,
    createPost,
    updatePost,
} from '../controllers/postController.js';

import { protect, admin } from '../middleware/auth.js';

// Instantiate a router
const router = express.Router();

// Routing for CRUD operations
router.route('/').get(getPosts).post(protect, admin, createPost);
router.route('/:id').get(getPostById).put(protect, admin, updatePost);

// Export the router
export default router;
