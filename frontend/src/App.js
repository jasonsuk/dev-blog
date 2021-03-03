import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import Header from './components/Header.component.jsx';
import Footer from './components/Footer.component.jsx';
import HomePage from './pages/HomePage.js';

const App = () => {
    return (
        <Router>
            <Header />
            <main>
                <Container className="my-3">
                    <Route to="/" component={HomePage} exact />
                </Container>
            </main>
            <Footer />
        </Router>
    );
};

export default App;
