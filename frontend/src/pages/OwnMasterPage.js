import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col, ListGroup, Card, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import Loader from '../components/Loader.component.jsx';
import Message from '../components/Message.component.jsx';

import {
    listCourses,
    listCourseDetail,
    createCourse,
} from '../redux/actions/courseActions.js';

import { COURSE_CREATE_RESET } from '../redux/constants/courseConstants.js';

const OwnMasterPage = ({ match, history }) => {
    const courseId = match.params.id;

    const dispatch = useDispatch();

    const courseList = useSelector((state) => state.courseList);
    const { loading, error, courses } = courseList;

    const courseDetail = useSelector((state) => state.courseDetail);
    const { loading: loadingDetail, error: errorDetail, course } = courseDetail;

    const courseCreate = useSelector((state) => state.courseCreate);
    const { success: successCreate, course: newCourse } = courseCreate;

    useEffect(() => {
        if (successCreate) {
            dispatch({ type: COURSE_CREATE_RESET });
            history.push(`/course/${newCourse._id}/edit`);
        } else {
            if (courses.length > 0 && courseId) {
                dispatch(listCourseDetail(courseId));
            } else {
                dispatch(listCourses());
            }
        }
    }, [dispatch, courseId, courses, history, successCreate, newCourse]);

    const addCourseHandler = (e) => {
        dispatch(createCourse());
    };

    return (
        <>
            {loading ? (
                <Loader />
            ) : error ? (
                <Message>{error}</Message>
            ) : (
                <Container>
                    <Row className="mb-3 align-items-center">
                        <Col className="ml-auto">
                            <LinkContainer to="/">
                                <Button>Go back</Button>
                            </LinkContainer>
                        </Col>
                        <Col className="mr-auto text-right">
                            <Button
                                variant="warning"
                                size="md"
                                onClick={() => addCourseHandler()}
                            >
                                + Add course
                            </Button>
                        </Col>
                    </Row>
                    {courses.length < 1 ? (
                        <Message>No course in the database</Message>
                    ) : (
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
                                                        Completion date:&nbsp;
                                                        {Object.keys(course)
                                                            .length !== 0
                                                            ? course.completedAt.split(
                                                                  'T'
                                                              )[0]
                                                            : 'course.completedAt'}
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
                    )}
                </Container>
            )}
        </>
    );
};

export default OwnMasterPage;
