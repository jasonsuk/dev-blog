import mongoose from 'mongoose';
import dotenv from 'dotenv';
import color from 'colors';
import connectDb from './config/db.js';

import posts from './data/posts.js';
import users from './data/users.js';
// import users from './data/users/js';

import Post from './models/postModel.js';
import User from './models/userModel.js';

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

        // Insert static data to the database
        const userList = await User.insertMany(users);
        const adminUser = userList[0]._id;
        const completePosts = posts.map((post) => {
            return { ...post, user: adminUser };
        });

        await Post.insertMany(completePosts);

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
