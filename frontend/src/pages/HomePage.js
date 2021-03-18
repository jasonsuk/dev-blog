import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Styling
import { Row, Col, Container } from 'react-bootstrap';

// Components
import Post from '../components/Post.component.jsx';
import Loader from '../components/Loader.component.jsx';
import Message from '../components/Message.component.jsx';
import Paginate from '../components/Paginate.component.jsx';

// Data
// import posts from '../posts.json';
import { listPosts } from '../redux/actions/postActions.js';

const HomePage = ({ match }) => {
    // Set keyword for search if any
    const keyword = match.params.keyword;

    // Dispatch data
    const dispatch = useDispatch();

    const postList = useSelector((state) => state.postList);
    const { loading, error, posts } = postList;

    const pageCount = 8;
    const pageNumber = 1;

    useEffect(() => {
        dispatch(listPosts(keyword));
    }, [dispatch, keyword]);

    return (
        <>
            {loading ? (
                <Loader />
            ) : error ? (
                <Message>{error}</Message>
            ) : (
                <Container>
                    <h1>Welcome to my development blog</h1>
                    <Row>
                        {posts &&
                            posts.map((post) => (
                                <Col
                                    key={post._id}
                                    sm={12}
                                    md={6}
                                    lg={4}
                                    xl={3}
                                >
                                    <Post post={post} />
                                </Col>
                            ))}
                    </Row>
                    <Paginate
                        pageNumber={pageNumber}
                        pageCount={pageCount}
                        keyword={keyword}
                    />
                </Container>
            )}
        </>
    );
};

export default HomePage;
