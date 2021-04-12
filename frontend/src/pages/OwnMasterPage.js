import React from 'react';
import { Container, Row, Col, ListGroup, Card, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const OwnMasterPage = () => {
    return (
        <Container>
            <Row className="mb-3 ml-auto">
                <LinkContainer to="/">
                    <Button>Go back</Button>
                </LinkContainer>
            </Row>
            <Row>
                <Col md={6}>
                    <ListGroup as="ul" variant="flush">
                        <ListGroup.Item as="li" active>
                            Cras justo odio
                        </ListGroup.Item>
                        <ListGroup.Item as="li" active>
                            Cras justo odio
                        </ListGroup.Item>
                        <ListGroup.Item as="li" active>
                            Cras justo odio
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col>
                    <Card className="text-center">
                        <Card.Header>Featured</Card.Header>
                        <Card.Body>
                            <Card.Title>Special title treatment</Card.Title>
                            <Card.Text>
                                With supporting text below as a natural lead-in
                                to additional content.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="text-muted">
                            2 days ago
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default OwnMasterPage;
