import React from 'react';

import Header from './components/Header.component.jsx';
import Footer from './components/Footer.component.jsx';

const App = () => {
    return (
        <div>
            <Header />
            <main>
                <h1>My Blog App</h1>
            </main>
            <Footer />
        </div>
    );
};

export default App;
