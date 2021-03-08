import bcrypt from 'bcryptjs';
import path from 'path';
import dotenv from 'dotenv';

// Path to environmental variable
const __dirname = path.resolve();
dotenv.config({ path: path.join(__dirname, '/.env') });

// Sample users
const users = [
    {
        name: 'admin',
        email: 'admin.blog@gmail.com',
        password: bcrypt.hashSync(process.env.ADMIN_PASSWORD, 10),
        isAdmin: true,
    },
    {
        name: 'John Doe',
        email: 'jdoe@gmail.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: false,
    },
    {
        name: 'Jane Parker',
        email: 'jparker@gmail.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: false,
    },
];

export default users;
