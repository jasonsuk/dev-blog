import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const ContactPage = () => {
    const rowStyle = {
        position: 'absolute',
        top: '45%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    };

    return (
        <Container>
            <Row style={rowStyle} className="text-center">
                <Col className="mx-4">
                    <a
                        href="mailto:sukjh87@gmail.com"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className="far fa-envelope fa-3x"></i>
                    </a>
                    <h6>Email</h6>
                </Col>
                <Col className="mx-4">
                    <a
                        href="https://github.com/jasonsuk"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className="fab fa-github-square fa-3x"></i>
                    </a>
                    <h6>GitHub</h6>
                </Col>
            </Row>
        </Container>
    );
};

export default ContactPage;
