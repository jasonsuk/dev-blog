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
    // Construct query for keyword search
    const keyword = req.query.keyword
        ? {
              $or: [
                  {
                      title: {
                          $regex: req.query.keyword,
                          $options: 'i', // Case insensitivity to match upper and lower cases
                      },
                  },
                  {
                      tags: {
                          $regex: req.query.keyword,
                          $options: 'i', // Case insensitivity to match upper and lower cases
                      },
                  },
              ],
          }
        : {};

    // Instatiate pagination variables
    const pageSize = 8;
    const pageNumber = Number(req.query.page) || 1;

    // Get the total number of posts
    const countPosts = await Post.countDocuments({ ...keyword });

    const posts = await Post.find({ ...keyword })
        .limit(pageSize)
        .skip(pageSize * (pageNumber - 1));
    res.status(200);
    res.json({
        posts,
        pageSize,
        pageNumber,
        pageCount: Math.ceil(countPosts / pageSize),
    });
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

// DESC   : Create a post with sample data
// ROUTE  : POST /api/post
// ACCESS : Private, admin

export const createPost = asyncHandler(async (req, res) => {
    // Instantiate a post with the random data
    const post = await Post({
        image: '/images/sample.jpg',
        title: 'Sample post',
        body:
            'After this sample post is created, a new frontend route will automatically lead to update post page.',
        tags: ['Sample Post', 'Frontend', 'Backend'],
        user: req.user._id,
    });
    // Save the new post to db
    const newPost = await post.save();
    // Send data to client side
    res.status(201);
    res.json(newPost);
});

// DESC   : Update a post
// ROUTE  : PUT /api/posts/:id
// ACCESS : Private, admin

export const updatePost = asyncHandler(async (req, res) => {
    // Get a post to update
    const postId = req.params.id;
    const post = await Post.findById(postId);
    // Check if the post exists in db
    if (post) {
        // Destructor req.body for data to update with
        const { title, body, tags, image } = req.body;
        // Reconstruct post
        post.title = title || post.title;
        post.body = body || post.body;
        post.tags = tags || post.tags;
        post.image = image || post.image;
        // Save the updated post to db
        const updatedPost = await post.save();
        // Sent the updated post to client side
        res.status(200).json(updatedPost);
        //
    } else {
        res.status(404);
        throw new Error(`The post ${postId} not found`);
    }

    // Save the new post to db
    const newPost = await post.save();
    // Send data to client side
    res.status(201);
    res.json(newPost);
});

// DESC   : Delete a post
// ROUTE  : Delete /api/posts/:id
// ACCESS : Private, admin

export const deletePost = asyncHandler(async (req, res) => {
    // Find a post to delete
    const postId = req.params.id;
    const post = await Post.findById(postId);
    // Check if post exists in db
    if (post) {
        await post.remove();
        res.status(200).json({
            message: `Successfully deleted the request post ${postId}`,
        });
    } else {
        res.status(404);
        throw new Error(`The post ${postId} not found`);
    }
});
