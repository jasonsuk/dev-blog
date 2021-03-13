import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { Container, Row, Col, Table, Button } from 'react-bootstrap';
import Loader from '../components/Loader.component.jsx';
import Message from '../components/Message.component.jsx';

import {
    listPosts,
    deletePost,
    createPost,
} from '../redux/actions/postActions.js';

const PostListPage = ({ history }) => {
    // Get state from store
    const postList = useSelector((state) => state.postList);
    const { loading, error, posts } = postList;

    const postDelete = useSelector((state) => state.postDelete);
    const { success: successDelete } = postDelete;

    const postCreate = useSelector((state) => state.postCreate);
    const { success: successCreate, post: newPost } = postCreate;

    // Instantiate dispatch
    const dispatch = useDispatch();

    useEffect(() => {
        // When a sample post is newly created
        // Immediately directed to PostEdit page
        if (successCreate) {
            history.push(`/post/${newPost._id}/edit`);
        } else {
            // Dispatch posts when the page is loaded
            dispatch(listPosts());
        }
    }, [dispatch, successDelete, successCreate, history, newPost]);

    // Handlers (attached to button) to create & delete a post
    const createPostHandler = () => {
        dispatch(createPost());
    };

    const deletePostHandler = (postId) => {
        if (window.confirm('Are you sure?')) {
            dispatch(deletePost(postId));
        }
    };

    return (
        <>
            {loading ? (
                <Loader />
            ) : error ? (
                <Message>{error}</Message>
            ) : (
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
                    <Table
                        striped
                        bordered
                        hover
                        size="sm"
                        className="text-center"
                    >
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
                                                <i className="far fa-edit"></i>
                                            </Button>
                                        </LinkContainer>
                                        <Button
                                            variant="warning"
                                            size="sm"
                                            onClick={() =>
                                                deletePostHandler(post._id)
                                            }
                                        >
                                            <i className="far fa-trash-alt"></i>
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Container>
            )}
        </>
    );
};

export default PostListPage;
