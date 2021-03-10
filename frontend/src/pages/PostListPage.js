import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { Container, Row, Col, Table, Button } from 'react-bootstrap';

import { listPosts } from '../redux/actions/postActions.js';

const PostListPage = () => {
    // Get state from store
    const postList = useSelector((state) => state.postList);
    const { loading, error, posts } = postList;

    // Instantiate dispatch
    const dispatch = useDispatch();

    useEffect(() => {
        // Dispatch posts when the page is loaded
        dispatch(listPosts());
    }, [dispatch]);

    // Handlers (attached to button) to create & delete a post
    const createPostHandler = () => {
        console.log('Successfully created a new post!');
    };
    const deletePostHandler = () => {
        console.log('Successfully deleted the post!');
    };

    return (
        <Container>
            <Row className="my-5">
                <Col className="ml-2">
                    <h2>Post List</h2>
                </Col>
                <Col className="px-4 text-right">
                    <Button
                        variant="warning"
                        size="md"
                        onClick={() => createPostHandler()}
                    >
                        + Create post
                    </Button>
                </Col>
            </Row>
            <Table striped bordered hover size="sm" className="text-center">
                <thead>
                    <tr>
                        <th>Date created</th>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Tags</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map((post) => (
                        <tr key={post._id}>
                            <td>{post._id}</td>
                            <td>{post.createdAt.substring(0, 10)}</td>
                            <td>{post.title}</td>
                            <td>
                                {post.tags.map((tag, idx) => (
                                    <Row key={idx}>
                                        <Col>{tag}</Col>
                                    </Row>
                                ))}
                            </td>
                            <td>
                                <LinkContainer to="#">
                                    <Button
                                        className="mx-2"
                                        variant="warning"
                                        size="sm"
                                    >
                                        <i class="far fa-edit"></i>
                                    </Button>
                                </LinkContainer>
                                <Button
                                    variant="warning"
                                    size="sm"
                                    onClick={() => deletePostHandler()}
                                >
                                    <i class="far fa-trash-alt"></i>
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
};

export default PostListPage;
