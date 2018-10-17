import * as React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './utils/ScrollToTop';
import App from './App';

import './styles/app.less';

const root = document.getElementById('app');

render(
    <Router>
        <ScrollToTop>
            <App />
        </ScrollToTop>
    </Router>,
    root
);
