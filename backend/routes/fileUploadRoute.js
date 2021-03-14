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
            file.fieldname + '-' + Date.now() + path.extname(file.originalname)
        );
    },
});

const upload = multer({ storage: storage });

// Create a route @ /uploads
// req.file is the `image`(key) file
router.route('/').post(upload.single('image'), (req, res) => {
    res.send(`/${req.file.path}`);
});

export default router;
