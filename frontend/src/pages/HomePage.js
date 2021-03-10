import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Styling
import { Row, Col } from 'react-bootstrap';

// Components
import Post from '../components/Post.component.jsx';

// Data
// import posts from '../posts.json';
import { listPosts } from '../redux/actions/postActions.js';

const HomePage = () => {
    // Dispatch data
    const dispatch = useDispatch();

    const postList = useSelector((state) => state.postList);
    const { posts } = postList;

    useEffect(() => {
        dispatch(listPosts());
    }, [dispatch]);

    return (
        <>
            <h1>Welcome to my development blog</h1>
            <Row>
                {posts &&
                    posts.map((post) => (
                        <Col key={post._id} sm={12} md={6} lg={4} xl={3}>
                            <Post post={post} />
                        </Col>
                    ))}
            </Row>
        </>
    );
};

export default HomePage;
