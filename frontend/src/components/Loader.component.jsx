import React from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';

const Loader = () => {
    const loaderStyle = {
        position: 'absolute',
        top: '220%',
    };

    return (
        <Container className="d-flex flex-column align-items-center">
            <Row style={loaderStyle}>
                <Spinner animation="grow" variant="primary" />
                <Spinner animation="grow" variant="secondary" />
                <Spinner animation="grow" variant="success" />
                <Spinner animation="grow" variant="danger" />
                <Spinner animation="grow" variant="warning" />
                <Spinner animation="grow" variant="info" />
                <Spinner animation="grow" variant="light" />
                <Spinner animation="grow" variant="dark" />
            </Row>
            <Row>
                <span className="sr-only">Loading...</span>
            </Row>
        </Container>
    );
};

export default Loader;
