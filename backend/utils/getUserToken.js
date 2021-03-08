import jwt from 'jsonwebtoken';
import path from 'path';
import dotenv from 'dotenv';

const __dirname = path.resolve();
dotenv.config({ path: path.join(__dirname, '/.env') });

const getUserToken = (userId) => {
    return jwt.sign({ userId }, process.env.SECRET_KEY, {
        expiresIn: '30d',
    });
};

export default getUserToken;
