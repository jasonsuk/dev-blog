import mongoose from 'mongoose';

const courseSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please specify the course title'],
    },
    school: {
        type: String,
        required: [true, 'Please specify the educational instituation'],
    },
    description: {
        type: String,
        required: [true, 'Please describe the course (i.e. curriculum'],
    },
    completedAt: {
        type: Date,
        required: [
            true,
            'Please write the completed date in format of YYYY-mm-dd',
        ],
    },
    type: {
        type: String,
        required: [
            true,
            'Please specify the type of the course (i.e. online bootcamp, short courses, Youtube, etc.)',
        ],
    },
    isPaid: {
        type: Boolean,
        default: false,
    },
    totalHours: {
        type: Number,
    },
    credit: {
        type: Number,
        required: [true, 'Please specify the relevant credit'],
    },
});

const Course = mongoose.model('Course', courseSchema);

export default Course;
