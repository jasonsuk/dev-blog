import React from 'react';
import { Row, Col } from 'react-bootstrap';

import Post from '../components/Post.component.jsx';

import posts from '../posts.json';

const HomePage = () => {
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
