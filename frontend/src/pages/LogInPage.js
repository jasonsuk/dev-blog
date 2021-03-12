import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button } from 'react-bootstrap';

import FormContainer from '../components/FormContainer.component.jsx';
import Loader from '../components/Loader.component.jsx';
import Message from '../components/Message.component.jsx';

import { logInUser } from '../redux/actions/userActions.js';

const LogInPage = ({ history, location }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const userLogIn = useSelector((state) => state.userLogIn);
    const { loading, error, userInfo } = userLogIn;

    const dispatch = useDispatch();

    useEffect(() => {
        const redirect = location.search ? location.search.split('=')[1] : '/';

        if (userInfo && userInfo.id) {
            history.push(redirect);
        }
    }, [dispatch, location, history, userInfo]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(logInUser(email, password));
    };

    return (
        <>
            <FormContainer>
                <h1>Sign in</h1>
                {loading ? (
                    <Loader />
                ) : error ? (
                    <Message>{error}</Message>
                ) : (
                    <Form onSubmit={submitHandler}>
                        <Form.Group controlId="email">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Enter password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Form.Group>

                        <Button
                            variant="primary"
                            type="submit"
                            className="btn btn-block"
                        >
                            Submit
                        </Button>
                    </Form>
                )}
            </FormContainer>
        </>
    );
};

export default LogInPage;
