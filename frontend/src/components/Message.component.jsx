import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';

const Message = ({ children }) => {
    return (
        <Jumbotron fluid>
            <Container className="text-center">
                <h2>Oops...something went wrong</h2>
                <p>{children}</p>
            </Container>
        </Jumbotron>
    );
};

export default Message;
