import React from 'react';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
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
                            <NavDropdown
                                title="Admin"
                                id="collasible-nav-dropdown"
                            >
                                <LinkContainer to="/admin/postList">
                                    <NavDropdown.Item>
                                        Manage post
                                    </NavDropdown.Item>
                                </LinkContainer>
                                {/* <NavDropdown.Item href="#">
                                    
                                </NavDropdown.Item> */}
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#">
                                    More works
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </header>
    );
};

export default Header;
