import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import morgan from 'morgan';

// Temporary loading sample post data
import posts from './data/posts.js';

import connectDB from './config/db.js';

// Use custom environment variables
dotenv.config();

// Connect to the database
connectDB();

// Instantiate an express server
const app = express();

// Logging middleware - morgan
if (process.env.NODE_ENV == 'development') {
    app.use(morgan('dev'));
}

// Middleware to read req.body in JSON
app.use(express.json());

// Root route
app.get('/', (req, res) => {
    res.send('The server is running!');
});

// Route to send sample posts data
app.get('/api/post', (req, res) => {
    res.json(posts);
});

app.get('/api/post/:id', (req, res) => {
    const post = posts.find((post) => String(post._id) === req.params.id);
    res.json(post);
});

// Listen to the server
const PORT = process.env.PORT || 6000;
app.listen(
    PORT,
    console.log(
        `The server is running in ${process.env.NODE_ENV} mode on PORT ${PORT}`
            .yellow.bold
    )
);
