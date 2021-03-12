import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import Header from './components/Header.component.jsx';
import Footer from './components/Footer.component.jsx';
import HomePage from './pages/HomePage.js';
import PostPage from './pages/PostPage.js';
import LogInPage from './pages/LogInPage.js';
import PostListPage from './pages/PostListPage.js';

const App = () => {
    return (
        <Router>
            <Header />
            <main>
                <Container className="my-3">
                    <Route path="/" component={HomePage} exact />
                    <Route path="/login" component={LogInPage} />
                    <Route path="/post/:id" component={PostPage} />
                    <Route path="/admin/postList" component={PostListPage} />
                </Container>
            </main>
            <Footer />
        </Router>
    );
};

export default App;
