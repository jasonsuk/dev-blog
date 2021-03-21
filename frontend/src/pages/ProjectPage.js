// Scalability concern: as more projects are added in,
// I will need to construct a database model for Projects
// for now, I will just present three projects only

import React from 'react';
import { Container, Button, Row, Col, Card } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import projects from '../data/projects.js';

const ProjectPage = () => {
    const cardStyle = {
        margin: '5px 10px',
        padding: '5px ',
    };

    const cardTitleStyle = {
        minHeight: '4rem',
    };

    const cardTextStyle = {
        minHeight: '14rem',
    };

    return (
        <Container>
            <Row className="mb-3 ml-auto">
                <LinkContainer to="/">
                    <Button>Go back</Button>
                </LinkContainer>
            </Row>
            <Row>
                {projects.map((proj, id) => (
                    <Col key={id}>
                        <Card style={cardStyle}>
                            <Card.Img variant="top" src={proj.image} fluid />
                            <Card.Body>
                                <a
                                    href={proj.url}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <Card.Title style={cardTitleStyle}>
                                        <h5>{proj.title}</h5>
                                    </Card.Title>
                                </a>
                                <Card.Text style={cardTextStyle}>
                                    {proj.body}
                                </Card.Text>
                                <Card.Text
                                    style={{
                                        visibility: proj.isPublished
                                            ? 'visible'
                                            : 'hidden',
                                    }}
                                >
                                    <a
                                        href={proj.publication}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <h6>
                                            Sharing findings on Medium{' '}
                                            <i className="fab fa-medium"></i>
                                        </h6>
                                    </a>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default ProjectPage;
