import mongoose from 'mongoose';

// Build a schema for Post model
const postSchema = await mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, 'Please write the title of your blog.'],
        },
        body: {
            type: String,
            required: [true, 'Please write the content of your blog.'],
            minLength: [
                10,
                'Your blog content must consist of at least 10 letters.',
            ],
        },
        tags: {
            type: [String],
            lowercase: true,
            trim: true,
            validate: {
                validator: function () {
                    return !(this.tags.length > 3);
                },
                message: 'The number of tags must be less than or equal to 3',
            },
        },
        image: {
            type: String,
            required: [true, 'Please attach an image for your blog.'],
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

// Construct the model and export
const Post = mongoose.model('Post', postSchema);
export default Post;
