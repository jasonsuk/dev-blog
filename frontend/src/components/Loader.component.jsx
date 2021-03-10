import React from 'react';
import { Container, Spinner } from 'react-bootstrap';

const Loader = () => {
    return (
        <>
            <Container className="center-obj">
                <Spinner animation="grow" variant="primary" />
                <Spinner animation="grow" variant="secondary" />
                <Spinner animation="grow" variant="success" />
                <Spinner animation="grow" variant="danger" />
                <Spinner animation="grow" variant="warning" />
                <Spinner animation="grow" variant="info" />
                <Spinner animation="grow" variant="light" />
                <Spinner animation="grow" variant="dark" />
            </Container>
            <span className="sr-only">Loading...</span>
        </>
    );
};

export default Loader;
