import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Image, Row, Col, Container, Button } from 'react-bootstrap';

// Components
import Loader from '../components/Loader.component.jsx';
import Message from '../components/Message.component.jsx';
import Meta from '../components/Meta.component.jsx';

// import posts from '../posts.json';
// Get data from backend
import { listPostDetail } from '../redux/actions/postActions.js';

const PostPage = ({ match }) => {
    // Get the id of the post to render
    const postId = match.params.id;

    // Get the dispatched data from the store
    const postDetail = useSelector((state) => state.postDetail);
    const { loading, error, post } = postDetail;

    // Dispatch data
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listPostDetail(postId));
    }, [dispatch, postId]);

    return (
        <>
            {loading ? (
                <Loader />
            ) : error ? (
                <Message>{error}</Message>
            ) : (
                <Container>
                    <Meta title={post.title} />
                    <Link to="/">
                        <Button>Go back</Button>
                    </Link>
                    <Row className="my-3 justify-content-md-center">
                        <Col md={4}>
                            <Image
                                src={post.image}
                                fluid
                                className="post-image"
                            />
                        </Col>
                        <Col md={6} className="post-detail">
                            <h1>{post.title}</h1>
                            <p>{post.body}</p>
                        </Col>
                    </Row>
                </Container>
            )}
        </>
    );
};

export default PostPage;
