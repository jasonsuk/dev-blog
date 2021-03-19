import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import Header from './components/Header.component.jsx';
import Footer from './components/Footer.component.jsx';
import HomePage from './pages/HomePage.js';
import PostPage from './pages/PostPage.js';
import AboutPage from './pages/AboutPage.js';
import ContactPage from './pages/ContactPage.js';
import LogInPage from './pages/LogInPage.js';
import PostListPage from './pages/PostListPage.js';
import PostEditPage from './pages/PostEditPage.js';

const App = () => {
    return (
        <Router>
            <Header />
            <main>
                <Container className="my-3">
                    <Route path="/" component={HomePage} exact />
                    <Route path="/search/:keyword" component={HomePage} />
                    <Route
                        path="/search/:keyword/page/:page"
                        component={HomePage}
                    />
                    <Route path="/page/:page" component={HomePage} exact />
                    <Route path="/about" component={AboutPage} />
                    <Route path="/contact" component={ContactPage} />
                    <Route path="/login" component={LogInPage} />
                    <Route path="/post/:id" component={PostPage} exact />
                    <Route
                        path="/admin/postList"
                        component={PostListPage}
                        exact
                    />
                    <Route
                        path="/admin/postList/page/:page"
                        exact
                        component={PostListPage}
                    />
                    <Route
                        path="/post/:id/edit"
                        component={PostEditPage}
                        exact
                    />
                </Container>
            </main>
            <Footer />
        </Router>
    );
};

export default App;
