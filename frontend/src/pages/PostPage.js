import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Image, Row, Col, Container, Button } from 'react-bootstrap';

// import posts from '../posts.json';
// Get data from backend
import { listPostDetail } from '../redux/actions/postActions.js';

const PostPage = ({ match }) => {
    // Get the id of the post to render
    const postId = match.params.id;

    // Get the dispatched data from the store
    const postDetail = useSelector((state) => state.postDetail);
    const { post } = postDetail;

    // Dispatch data
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listPostDetail(postId));
    }, [dispatch, postId]);

    return (
        <div>
            <Link to="/">
                <Button>Go back</Button>
            </Link>
            <Container>
                <Row className="my-3 justify-content-md-center">
                    <Col md={4}>
                        <Image src={post.image} fluid className="post-image" />
                    </Col>
                    <Col md={6} className="post-detail">
                        <h1>{post.title}</h1>
                        <p>{post.body}</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default PostPage;
