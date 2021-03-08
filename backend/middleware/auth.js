import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';

export const protect = async (req, res, next) => {
    // Verify user using Bearer token in the header
    // If authorized, return req.user
    let token;
    // Check if Bear token exists

    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
    ) {
        try {
            token = req.headers.authorization.split(' ')[1];
            // Decode token to get user info
            // { userId: '6045b72d0b61b30924cbc812', iat: 1615191164, exp: 1617783164 }
            const decoded = jwt.verify(token, process.env.SECRET_KEY); // Ref1
            // Assign user to req.user without password
            req.user = await User.findById(decoded.userId).select('-password');
            next();
            //
        } catch (error) {
            res.status(401);
            throw new Error('Not authorized - invalid token');
        }
    } else {
        res.status(401);
        throw new Error('Not authorized - no token or invalid token');
    }
};

export const admin = async (req, res, next) => {
    // Allow access only if user is admin
    // Therefore protect routes
    console.log('Admin access only!');
};
