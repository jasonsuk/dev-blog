import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
import getUserToken from '../utils/getUserToken.js';

// DESC   : Sign in a user
// ROUTE  : POST /api/users
// ACCESS : Public

export const signInUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email: email });
    if (user && (await user.verifyPassword(password))) {
        res.json({
            id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: getUserToken(user._id),
        });
    } else {
        res.status(401);
        throw new Error(`Log in failed: invalid email or password`);
    }
});

// DESC   : Get a user profile
// ROUTE  : GET /api/users/profile
// ACCESS : Private (protect middleware)

export const getUserProfile = asyncHandler(async (req, res) => {
    // Get user found by token @ protect middleware
    const user = await User.findById(req.user._id);

    if (user) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
        });
    } else {
        res.status(404);
        throw new Error(`User not found`);
    }
});
