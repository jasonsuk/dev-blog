import React from 'react';

import { LinkContainer } from 'react-router-bootstrap';
import { Container, Row, Col, Table, Button } from 'react-bootstrap';

const PostListPage = () => {
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
                        <th>Image</th>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Tags</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
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
                </tbody>
            </Table>
        </Container>
    );
};

export default PostListPage;
