import React from 'react';
import { Link } from 'react-router-dom';
import { Image, Row, Col, Button } from 'react-bootstrap';

import posts from '../posts.json';

const PostPage = ({ match }) => {
    const post = posts.find((post) => post._id.toString() === match.params.id);

    return (
        <div>
            <Link to="/">
                <Button>Go back</Button>
            </Link>

            <Row className="my-3">
                <Col md={4}>
                    <Image src="" fluid />
                </Col>
                <Col md={8}>
                    <h1 className="text-center">{post.title}</h1>
                    <p>{post.body}</p>
                </Col>
            </Row>
        </div>
    );
};

export default PostPage;
