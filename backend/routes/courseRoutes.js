import express from 'express';
import {
    getCourses,
    getCourseById,
    createCourse,
    updateCourse,
    deleteCourse,
} from '../controllers/courseController.js';

const router = express.Router();

import { protect, admin } from '../middleware/auth.js';

router.route('/').get(getCourses).post(protect, admin, createCourse);
router
    .route('/:id')
    .get(getCourseById)
    .put(protect, admin, updateCourse)
    .delete(protect, admin, deleteCourse);

export default router;
