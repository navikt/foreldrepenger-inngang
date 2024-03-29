import * as React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './utils/ScrollToTop';
import App from './App';
import * as Sentry from '@sentry/browser';
import { Normaltekst } from 'nav-frontend-typografi';
import ErrorBoundary from './components/error-boundary/ErrorBoundary';

import './styles/index.less';

const root = document.getElementById('app');

if (!Intl.PluralRules) {
    require('@formatjs/intl-pluralrules/polyfill');
    require('@formatjs/intl-pluralrules/locale-data/nb');
}

Sentry.init({
    dsn: 'https://94b48adfe3f54da89bba5e481e3c0f31@sentry.gc.nav.no/5',
    environment: window.location.hostname,
    integrations: [new Sentry.Integrations.Breadcrumbs({ console: false })],
});

render(
    <ErrorBoundary>
        <BrowserRouter basename="/">
            <ScrollToTop>
                <Normaltekst tag="div">
                    <App />
                </Normaltekst>
            </ScrollToTop>
        </BrowserRouter>
    </ErrorBoundary>,
    root
);
