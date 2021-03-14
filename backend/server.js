import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import morgan from 'morgan';
import connectDB from './config/db.js';
import postRouter from './routes/postRoutes.js';
import userRouter from './routes/userRoutes.js';
import fileUploadRouter from './routes/fileUploadRoute.js';
import { notFoundError, errorHandler } from './middleware/error.js';

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

// Routes
app.use('/api/posts', postRouter);
app.use('/api/users', userRouter);
app.use('/api/uploads', fileUploadRouter);

// Static route for image uploads
const __dirname = path.resolve();
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

// Error handling middleware
app.use(notFoundError);
app.use(errorHandler);

// Listen to the server
const PORT = process.env.PORT || 6000;
app.listen(
    PORT,
    console.log(
        `The server is running in ${process.env.NODE_ENV} mode on PORT ${PORT}`
            .yellow.bold
    )
);
