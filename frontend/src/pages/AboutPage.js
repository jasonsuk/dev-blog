import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';

const AboutPage = () => {
    const cardStyle = {
        padding: 'auto 2px',
        letterSpacing: '1px',
        fontSize: '1rem',
    };

    const badgeStyle = {
        padding: '5px 10px',
        borderRadius: '15px',
    };

    const skillListWeb = [
        'Javascript',
        'HTML',
        'CSS/SASS',
        'React',
        'Node',
        'Express',
        'MongoDB',
    ];

    const skillListData = [
        'Python',
        'Data wrangling',
        'Basic knowledge of statistics',
        'Machine learning',
        'MySQL/PostgreSQL',
        'Tableau',
    ];

    return (
        <Container>
            <Row>
                <Col md={3}>
                    <Card
                        style={{
                            width: '18rem',
                            margin: '15px 20px',
                            padding: '5px ',
                        }}
                    >
                        <Card.Img
                            variant="top"
                            src="images/profile.jpeg"
                            style={{ maxHeight: '25rem' }}
                        />
                        <Card.Body>
                            <Card.Title>Hi I am Junghoon Suk!</Card.Title>
                            <Card.Text>
                                <p>
                                    It is boring to stick to a thing so I love
                                    exploring.
                                </p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="offset-md-1" md={8}>
                    <h5>Quick introduction of myself</h5>
                    <Row>
                        <Col>
                            <Card body style={cardStyle}>
                                My background is hospitality / tourism
                                management. I spent 5 years in an entertainment
                                business running touristic attractions with
                                expertise in retail & commercial, operations,
                                project management and commercial analysis.
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Card body style={cardStyle}>
                                I hate the feeling of comfort and complacence
                                which I experienced from my previous job, and
                                started to find a cool thing to develop.
                                And...the answer was a tech! It has been almost
                                a year through and I love building things on the
                                web and using technology to perform advanced
                                analysis beyond Excel spreadsheets!
                            </Card>
                        </Col>
                    </Row>

                    <h5>Technology skills that I learned so far</h5>
                    <Row>
                        {skillListWeb.map((skill, idx) => (
                            <Col key={idx} md={4}>
                                <Badge variant="danger" style={badgeStyle}>
                                    {skill}
                                </Badge>
                            </Col>
                        ))}
                        {skillListData.map((skill, idx) => (
                            <Col key={idx} md={4}>
                                <Badge variant="success" style={badgeStyle}>
                                    {skill}
                                </Badge>
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default AboutPage;
