import * as React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './utils/ScrollToTop';
import App from './App';
import * as Sentry from '@sentry/browser';
import { Normaltekst } from 'nav-frontend-typografi';
import ErrorBoundary from './components/error-boundary/ErrorBoundary';

import './styles/index.less';

const root = document.getElementById('app');

Sentry.init({
    dsn: 'https://d3f3fc7e51f24438bdfb44c9ca3cd9bc@sentry.nav.no/19',
    environment: window.location.hostname,
    integrations: [new Sentry.Integrations.Breadcrumbs({ console: false })]
});

render(
    <ErrorBoundary>
        <Router>
            <ScrollToTop>
                <Normaltekst tag="div">
                    <App />
                </Normaltekst>
            </ScrollToTop>
        </Router>
    </ErrorBoundary>,
    root
);
