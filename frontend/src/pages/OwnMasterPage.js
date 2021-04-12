import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col, ListGroup, Card, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import Loader from '../components/Loader.component.jsx';
import Message from '../components/Message.component.jsx';

import {
    listCourses,
    listCourseDetail,
} from '../redux/actions/courseActions.js';

const OwnMasterPage = ({ match }) => {
    const courseId = match.params.id;

    const dispatch = useDispatch();

    const courseList = useSelector((state) => state.courseList);
    const { loading, error, courses } = courseList;

    const courseDetail = useSelector((state) => state.courseDetail);
    const { loadingDetail, errorDetail, course } = courseDetail;

    useEffect(() => {
        dispatch(listCourses());

        if (courseId) {
            dispatch(listCourseDetail(courseId));
        }
    }, [dispatch, courseId]);

    return (
        <>
            {loading ? (
                <Loader />
            ) : error ? (
                <Message>{error}</Message>
            ) : courses.length < 1 ? (
                <Message>No course in the database</Message>
            ) : (
                <Container>
                    <Row className="mb-3 ml-auto">
                        <LinkContainer to="/">
                            <Button>Go back</Button>
                        </LinkContainer>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <ListGroup as="ul" variant="flush">
                                {courses.map((item) => (
                                    <LinkContainer
                                        key={item._id}
                                        to={`/ownmaster/${item._id}`}
                                    >
                                        <ListGroup.Item as="li">
                                            {item.title}
                                        </ListGroup.Item>
                                    </LinkContainer>
                                ))}
                            </ListGroup>
                        </Col>
                        <Col>
                            {loadingDetail ? (
                                <Loader />
                            ) : errorDetail ? (
                                <Message>errorDetail</Message>
                            ) : (
                                course && (
                                    <Card className="text-center">
                                        <Card.Header>
                                            {course.title}
                                        </Card.Header>
                                        <Card.Body>
                                            <ListGroup className="text-left">
                                                <ListGroup.Item>
                                                    Accredited from:&nbsp;
                                                    {course.school}
                                                </ListGroup.Item>
                                                <ListGroup.Item>
                                                    Description:&nbsp;
                                                    {course.school}
                                                </ListGroup.Item>
                                                <ListGroup.Item>
                                                    Projects:&nbsp;
                                                    {
                                                        <ListGroup>
                                                            {course.projects.map(
                                                                (
                                                                    project,
                                                                    projIdx
                                                                ) => (
                                                                    <ListGroup.Item
                                                                        key={
                                                                            projIdx
                                                                        }
                                                                    >
                                                                        {
                                                                            project
                                                                        }
                                                                    </ListGroup.Item>
                                                                )
                                                            )}
                                                        </ListGroup>
                                                    }
                                                </ListGroup.Item>
                                            </ListGroup>
                                        </Card.Body>
                                        <Card.Footer className="text-muted">
                                            <Row className="justify-contents-center align-items-center">
                                                <Col>{course.type}</Col>
                                                <Col>
                                                    {course.isPaid
                                                        ? 'Paid'
                                                        : 'Free'}
                                                </Col>
                                                <Col>
                                                    {`${course.totalHours} hours`}
                                                </Col>
                                                <Col>{`${course.credit} credits`}</Col>
                                            </Row>
                                        </Card.Footer>
                                    </Card>
                                )
                            )}
                        </Col>
                    </Row>
                </Container>
            )}
        </>
    );
};

export default OwnMasterPage;
