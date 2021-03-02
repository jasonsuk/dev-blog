import React from 'react';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';

const Header = () => {
    return (
        <header>
            <Container>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="/">
                        Jason's Development Blog
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="#about">About</Nav.Link>
                            <Nav.Link href="#contact">Contact</Nav.Link>
                            <NavDropdown
                                title="Admin"
                                id="collasible-nav-dropdown"
                            >
                                <NavDropdown.Item href="#">
                                    Write blog
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#">
                                    Edit blog
                                </NavDropdown.Item>
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
