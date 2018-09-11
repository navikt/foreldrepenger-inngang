import * as React from 'react';
import moment from 'moment';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

import './styles/app.less';

moment.locale('nb');
const root = document.getElementById('app');

render(
    <Router>
        <App />
    </Router>,
    root
);
