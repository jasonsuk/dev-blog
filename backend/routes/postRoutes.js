import express from 'express';

import { getPosts, getPostById } from '../controllers/postController.js';

// Instantiate a router
const router = express.Router();

// Routing for CRUD operations
router.route('/').get(getPosts);
router.route('/:id').get(getPostById);

// Export the router
export default router;
