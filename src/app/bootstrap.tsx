import * as React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './utils/ScrollToTop';
import App from './App';

import './styles/index.less';
import { Normaltekst } from 'nav-frontend-typografi';

const root = document.getElementById('app');

render(
    <Router>
        <ScrollToTop>
            <Normaltekst tag="div">
                <App />
            </Normaltekst>
        </ScrollToTop>
    </Router>,
    root
);
