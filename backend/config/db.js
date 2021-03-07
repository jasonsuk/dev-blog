import mongoose from 'mongoose';
import colors from 'colors';

const connectDB = async () => {
    try {
        // Connect to the database
        const db = await mongoose.connect(process.env.MONGO_URI, {
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
        console.log(`MongoDB connected: ${db.connection.host}`.cyan.underline);
    } catch (error) {
        console.error(`Failed to connect: ${error.message}`.red.underline.bold);
    }
};

export default connectDB;
