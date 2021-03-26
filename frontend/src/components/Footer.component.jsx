import React from 'react';
import { Container, Row, Col, TabContainer } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer>
            <TabContainer>
                <Row>
                    <Col className="text-center my-4">
                        Copyright &copy; Junghoon Suk
                    </Col>
                </Row>
            </TabContainer>
        </footer>
    );
};

export default Footer;
