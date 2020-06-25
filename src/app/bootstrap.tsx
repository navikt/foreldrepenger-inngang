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

if (typeof (Intl.NumberFormat as any).__addLocaleData === 'function') {
    (Intl.NumberFormat as any).__addLocaleData(require('@formatjs/intl-numberformat/dist/locale-data/nb.json'));
}

if (!Intl.PluralRules) {
    require('@formatjs/intl-pluralrules/polyfill');
    require('@formatjs/intl-pluralrules/dist/locale-data/nb');
}

Sentry.init({
    dsn: 'https://94b48adfe3f54da89bba5e481e3c0f31@sentry.gc.nav.no/5',
    environment: window.location.hostname,
    integrations: [new Sentry.Integrations.Breadcrumbs({ console: false })],
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
