import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button } from 'react-bootstrap';

import FormContainer from '../components/FormContainer.component.jsx';

import { listCourseDetail } from '../redux/actions/courseActions.js';

const CourseEditPage = ({ match, history }) => {
    const courseId = match.params.id;

    const dispatch = useDispatch();

    const courseDetail = useSelector((state) => state.courseDetail);
    const { course } = courseDetail;

    const [title, setTitle] = useState(course.title);
    const [school, setSchool] = useState(course.school);
    const [description, setDescription] = useState(course.description);
    const [completionDate, setCompletionDate] = useState(
        course.completedAt.substring(0, 10)
    );
    const [type, setType] = useState(course.type);
    const [isPaid, setIsPaid] = useState(course.isPaid);
    const [totalHours, setTotalHours] = useState(course.totalHours);
    const [credit, setCredit] = useState(course.credit);

    useEffect(() => {
        dispatch(listCourseDetail(courseId));
    }, [dispatch, courseId]);

    const submitHandler = () => {
        console.log('To update');
    };

    return (
        <FormContainer>
            <h1>Update course</h1>
            <Form onSubmit={submitHandler}>
                <Form.Group controlId="title">
                    <Form.Label>Course title</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Write a title of the course"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="school">
                    <Form.Label>Accredited from</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Write a body of the school"
                        value={school}
                        onChange={(e) => setSchool(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="description">
                    <Form.Label>Course description</Form.Label>
                    <Form.Control
                        as="textarea"
                        multiple
                        value={description}
                        rows={3}
                        onChange={(e) => setDescription(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                <Form.Group controlId="project">
                    <Form.Label>Completion date</Form.Label>

                    <Form.Control
                        type="date"
                        rows={3}
                        value={completionDate}
                        onChange={(e) => setCompletionDate(e.target.value)}
                    ></Form.Control>
                </Form.Group>
                <Form.Group controlId="type">
                    <Form.Label>Type of course</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Write a course type (i.e. bootcamp)"
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="totalHours">
                    <Form.Label>Hours required to complete</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Write the total hours required for completion"
                        value={totalHours}
                        onChange={(e) => setTotalHours(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="credit">
                    <Form.Label>Total credits earned</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Write how many credits earned form the course"
                        rows={10}
                        value={credit}
                        onChange={(e) => setCredit(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="idPaid">
                    <Form.Label className="mr-2">
                        Is it a paid course?
                    </Form.Label>
                    <Form.Check
                        type="checkbox"
                        name="isPaid"
                        id="isPaid"
                        value={isPaid}
                        onChange={(e) => setIsPaid(e.target.checked)}
                        inline
                    />
                </Form.Group>
                <Button
                    variant="primary"
                    type="submit"
                    className="btn btn-block"
                >
                    Update
                </Button>
            </Form>
        </FormContainer>
    );
};

export default CourseEditPage;
