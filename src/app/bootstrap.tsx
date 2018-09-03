import * as React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './connected-components/App';

import './styles/app.less';

const root = document.getElementById('app');

render(
    <Router>
        <App />
    </Router>,
    root
);
