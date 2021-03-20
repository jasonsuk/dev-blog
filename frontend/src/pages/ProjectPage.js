// Scalability concern: as more projects are added in,
// I will need to construct a database model for Projects
// for now, I will just present three projects only

import React from 'react';
import { Container, Button, Row, Col, Card } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

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

    const hidden = {
        visibility: 'hidden',
    };

    return (
        <Container>
            <Row className="mb-3">
                <LinkContainer to="/">
                    <Button>Go back</Button>
                </LinkContainer>
            </Row>

            <Row>
                <Col>
                    <Card style={cardStyle}>
                        <Card.Img variant="top" src="images/sample.jpg" fluid />
                        <Card.Body>
                            <a
                                href="https://github.com/jasonsuk/ds-starbucks"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <Card.Title style={cardTitleStyle}>
                                    <h5>Starbucks Offer Classifer</h5>
                                </Card.Title>
                            </a>
                            <Card.Text style={cardTextStyle}>
                                <Row>
                                    <Col>
                                        To explore how customers interact with
                                        offers sent by Starbucks and build a
                                        machine learning classifier to predict
                                        if a practicular offer should be sent or
                                        not to customers with different
                                        characteristics
                                    </Col>
                                </Row>
                            </Card.Text>
                            <Card.Text>
                                <Row>
                                    <Col>
                                        <a
                                            href="https://sukjh87.medium.com/a-10-minute-guide-to-understanding-and-predicting-behaviors-of-customers-using-the-starbucks-533425134e96"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <h6>
                                                Sharing findings on Medium{' '}
                                                <i className="fab fa-medium"></i>
                                            </h6>
                                        </a>
                                    </Col>
                                </Row>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={cardStyle}>
                        <Card.Img variant="top" src="images/sample.jpg" fluid />
                        <Card.Body>
                            <a
                                href="https://github.com/jasonsuk/ds-airbnb"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <Card.Title style={cardTitleStyle}>
                                    <h5>Starbucks Offer Classifer</h5>
                                </Card.Title>
                            </a>
                            <Card.Text style={cardTextStyle}>
                                <Row>
                                    <Col>
                                        To perform an exploratory analysis on
                                        demand and supply side of Airbnb in two
                                        major cities in US (Seattle and Boston)
                                        and gain their business insights. A
                                        simple geographic analysis is a plus.
                                    </Col>
                                </Row>
                            </Card.Text>
                            <Card.Text>
                                <Row>
                                    <Col>
                                        <a
                                            href="https://sukjh87.medium.com/a-sneak-peak-at-airbnb-business-using-useful-python-data-analysis-tools-661d42cad666"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <h6>
                                                Sharing findings on Medium{' '}
                                                <i className="fab fa-medium"></i>
                                            </h6>
                                        </a>
                                    </Col>
                                </Row>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card style={cardStyle}>
                        <Card.Img variant="top" src="images/sample.jpg" fluid />
                        <Card.Body>
                            <a
                                href="https://github.com/jasonsuk/ds-disaster-response"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <Card.Title style={cardTitleStyle}>
                                    <h5>Disaster response classifer</h5>
                                </Card.Title>
                            </a>
                            <Card.Text style={cardTextStyle}>
                                <Row>
                                    <Col>
                                        To build data and machine learning
                                        pipelines that are ready for a disaster
                                        response classifier web API. An example
                                        app was built by a different owner on
                                        Flask.
                                    </Col>
                                </Row>
                            </Card.Text>
                            <Card.Text style={hidden}>
                                <Row>
                                    <Col>
                                        <a
                                            href="/"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <h6>
                                                Sharing findings on Medium{' '}
                                                <i className="fab fa-medium"></i>
                                            </h6>
                                        </a>
                                    </Col>
                                </Row>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default ProjectPage;
