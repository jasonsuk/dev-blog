import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import { logout } from '../redux/actions/userActions.js';

const Header = () => {
    const dispatch = useDispatch();

    const userLogIn = useSelector((state) => state.userLogIn);
    const { userInfo } = userLogIn;

    const logoutHandler = () => {
        dispatch(logout());
    };

    return (
        <header>
            <Container>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <LinkContainer to="/">
                        <Navbar.Brand>Jason's Development Blog</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto">
                            <LinkContainer to="/about">
                                <Nav.Link>About</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/contact">
                                <Nav.Link>Contact</Nav.Link>
                            </LinkContainer>
                            {userInfo && userInfo.isAdmin === true && (
                                <NavDropdown
                                    title="Admin"
                                    id="collasible-nav-dropdown"
                                >
                                    <LinkContainer to="/admin/postList">
                                        <NavDropdown.Item>
                                            Manage post
                                        </NavDropdown.Item>
                                    </LinkContainer>
                                </NavDropdown>
                            )}
                            {userInfo && userInfo.id ? (
                                <Nav.Link onClick={logoutHandler}>
                                    Log out
                                </Nav.Link>
                            ) : (
                                <LinkContainer to="/login">
                                    <Nav.Link>Login</Nav.Link>
                                </LinkContainer>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </header>
    );
};

export default Header;
