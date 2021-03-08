import User from '../models/userModel.js';
import getUserToken from '../utils/getUserToken.js';

// DESC   : Sign in a user
// ROUTE  : POST /api/user
// ACCESS : Public

export const signInUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find user by email
        const user = await User.findOne({ email: email });
        if (user && user.email === email) {
            (await user.verifyPassword(password)) &&
                res.json({
                    id: user._id,
                    name: user.name,
                    email: user.email,
                    isAdmin: user.isAdmin,
                    token: getUserToken(user._id),
                });
        } else {
            res.status(404);
            new Error(`The user with the email of ${email} not found.`);
        }

        //
    } catch (error) {
        res.status(404);
        new Error(`Error: ${error.message}`);
    }
};
