import asyncHandler from 'express-async-handler';
import Post from '../models/postModel.js';

// Revision need after using asyncHandler
// 1. no try-catch block needed
// 2. Therefore, no error message needed
// (custom error handler will take care)
// 3. no next() for middleware needed
// Example : GET /api/posts --> { "message": "Not found -- /api/posts", "stack": "..." }

// DESC   : Get all posts
// ROUTE  : GET /api/post
// ACCESS : Public
export const getPosts = asyncHandler(async (req, res) => {
    const posts = await Post.find({});
    res.status(200);
    res.json(posts);
});

// DESC   : Get a single post found by id
// ROUTE  : GET /api/posts/:id
// ACCESS : Public

export const getPostById = asyncHandler(async (req, res) => {
    // Get the post id to search for
    const postId = req.params.id;
    // Find a post that matches with the id
    const post = await Post.findById(postId);

    // Check if post exists or throw error
    if (post) {
        res.status(200);
        res.json(post);
    } else {
        res.status(404);
        throw new Error(`Post ${postId} not found`);
    }
});
