import mongoose from 'mongoose';
import dotenv from 'dotenv';
import color from 'colors';
import connectDb from './config/db.js';

import posts from './data/posts.js';
import users from './data/users.js';
import courses from './data/courses.js';

// import users from './data/users/js';

import Post from './models/postModel.js';
import User from './models/userModel.js';
import Course from './models/courseModel.js';

// Get environment variables
dotenv.config();

// Connect to the database
connectDb();

// Import data to db
const importData = async () => {
    try {
        // Clear database
        await Post.deleteMany();
        await User.deleteMany();
        await Course.deleteMany();

        // Insert static data to the database

        // User
        const userList = await User.insertMany(users);

        // Post
        const adminUser = userList[0]._id;
        const completePosts = posts.map((post) => {
            return { ...post, user: adminUser };
        });

        await Post.insertMany(completePosts);

        // Course
        await Course.insertMany(courses);

        // Print success message & exit
        console.log('Successfully imported data!'.green.inverse);
        process.exit();
        //
    } catch (error) {
        console.log(`Error: ${error.message}`.red.bold.underline);
        process.exit(1);
    }
};

// Completely clear database
const destroyData = async () => {
    try {
        // Delete the entire data from database
        await Post.deleteMany();
        await User.deleteMany();
        await Course.deleteMany();

        // Print success message & exit
        console.log(`Successfully destroyed data!`.yellow.inverse);
        process.exit();
    } catch (error) {
        // Print error message & exit with failure
        console.error(`Error: ${error.message}.red.underline.bold`);
        process.exit(1);
    }
};

// Import / destory db on command line
if (process.argv[2] == '-d') {
    destroyData();
} else {
    importData();
}
