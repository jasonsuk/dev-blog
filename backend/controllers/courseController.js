import asyncHandler from 'express-async-handler';
import Course from '../models/courseModel.js';

// DESC   : Get all courses
// ROUTE  : GET /api/courses/
// ACCESS : Public
// USE    ; Display a list of course summaries

export const getCourses = asyncHandler(async (req, res) => {
    const courses = await Course.find({});
    res.status(200).json(courses);
});

// DESC   : Get a single course found by id
// ROUTE  : GET /api/courses/:id
// ACCESS : Public
// USE    ; Display detailed page

export const getCourseById = asyncHandler(async (req, res) => {
    const courseId = req.params.id;
    const course = await Course.findById(courseId);

    if (course) {
        res.status(200).json(course);
    } else {
        res.status(404);
        throw new Error(`Course ${courseId} not found`);
    }
});

// DESC   : Create a placeholder course
// ROUTE  : POST /api/courses
// ACCESS : Private, admin
// USE    ; A button click to create a placeholder (to be updated immediately)

export const createCourse = asyncHandler(async (req, res) => {
    // Construct a placeholder course
    const placeholderCourse = await Course({
        title: 'Placeholder course',
        school: 'Oxford University',
        description:
            'ETL pipeline and machine learning pipeline. Analysis of user behaviour using natural process language and computer vision techniques.',
        projects: [
            'Hotel guests satisfaction analysis: most satisfied and dissatisfied factors using NLP',
            'Collect retail floor footage data using physical censors and CV',
        ],
        type: 'MicroMasters',
        isPaid: False,
        // Most colleges and universities award 3 Semester Credit Hours (SCH) (45-48 contact hours)
        // for the successful completion of a study class. Source: https://en.wikipedia.org/wiki/Course_credit
        totalHours: 50,
        credit: 3,
    });

    // Save the placeholder to db
    const newCourse = await placeholderCourse.save();
    // Send data to client side
    res.status(201);
    res.json(newCourse);
});

// DESC   : Update the placeholder course
// ROUTE  : PUT /api/courses/:id
// ACCESS : Private, admin

export const updateCourse = asyncHandler(async (req, res) => {
    const courseId = req.params.id;
    const course = await findById(courseId);

    if (course) {
        const {
            title,
            school,
            description,
            projects,
            type,
            isPaid,
            totalHours,
            credit,
        } = req.body;

        course.title = title || course.title;
        course.school = school || course.school;
        course.description = description || course.description;
        course.projects = projects || course.projects;
        course.type = type || course.type;
        course.isPaid = isPaid || course.isPaid;
        course.totalHours = totalHours || course.totalHours;
        course.credit = credit || course.credit;

        // Save the change to db
        const updatedCourse = await course.save();
        // Send data to client side
        res.status(200);
        res.json(updatedCourse);
        //
    } else {
        res.status(404);
        throw new Error(`The course ${courseId} not found`);
    }
});

// DESC   : Delete a course
// ROUTE  : DELETE /api/courses/:id
// ACCESS : Private, admin

export const deleteCourse = asyncHandler(async (req, res) => {
    const courseId = req.params.id;
    const course = await Course.findById(courseId);

    if (course) {
        await course.remove();
        res.json({
            message: `Successfully deleted the requested course ${courseId}`,
        });
    } else {
        res.status(404);
        throw new Error(`The course ${courseId} not found`);
    }
});
