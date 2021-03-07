// import asyncHandler from 'express-async-handler';
import Post from '../models/postModel.js';

// DESC   : Get all posts
// ROUTE  : GET /api/posts
// ACCESS : Public
export const getPosts = async (req, res) => {
    try {
        const posts = await Post.find({});
        res.status(200);
        res.json(posts);
    } catch (error) {
        res.status(404);
        throw new Error('Posts not found...');
    }
};

// DESC   : Get a single post found by id
// ROUTE  : GET /api/posts/:id
// ACCESS : Public

export const getPostById = async (req, res) => {
    try {
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
            throw new Error(
                `Post with the id of ${postId} is not in the database.`
            );
        }

        //
    } catch (error) {
        res.status(404);
        throw new Error(`Post with the id of ${postId} not found.`);
    }
};
