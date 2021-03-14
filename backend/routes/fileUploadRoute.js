import path from 'path';
import express from 'express';
import multer from 'multer';

// Use multer middleware for handling multipart/form-data
// Validation codes are referred to https://stackoverflow.com/questions/60408575/how-to-validate-file-extension-with-multer-middleware

// Instantiate router
const router = express.Router();

// Set a disk storage @ '/uploads' static folder
const storage = multer.diskStorage({
    destination: './uploads',
    filename: function (_req, file, cb) {
        cb(
            null,
            file.fieldname + '-' + Date.now() + path.extname(file.originalname) // file name
        );
    },
});

const checkFileType = (file, cb) => {
    // Allowed ext
    const filetypes = /jpeg|jpg|png|gif/;
    // Check ent
    const extname = filetypes.test(
        path.extname(file.originalname).toLowerCase()
    );
    //  Check mime
    const mimetype = filetypes.test(file.mimetype);

    if (mimetype && extname) {
        return cb(null, true); // accept the file
    } else {
        cb('Error: Images only!'); // error message
    }
};

const upload = multer({
    storage: storage,
    // Filter to upload only image files
    fileFilter: function (_req, file, cb) {
        checkFileType(file, cb);
    },
});

// Create a route @ /uploads
// req.file is the `image`(key) file
router.route('/').post(upload.single('image'), (req, res) => {
    res.send(`/${req.file.path}`);
});

export default router;
