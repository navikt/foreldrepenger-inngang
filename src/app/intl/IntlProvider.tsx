import * as React from 'react';
import { addLocaleData, IntlProvider as Provider } from 'react-intl';
import * as en from 'react-intl/locale-data/en';
import * as nb from 'react-intl/locale-data/nb';
import * as nn from 'react-intl/locale-data/nn';

import enMessages from './locales/en_GB.json';
import nnMessages from './locales/nn_NO.json';
import nbMessages from './locales/nb_NO.json';

export type Language = 'nb' | 'nn' | 'en';

const areIntlLocalesSupported = require('intl-locales-supported');
const localesMyAppSupports = [
    'nb-NO'
];

if (global.Intl) {
    if (!areIntlLocalesSupported(localesMyAppSupports)) {
        const IntlPolyfill    = require('intl');
        Intl.NumberFormat   = IntlPolyfill.NumberFormat;
        Intl.DateTimeFormat = IntlPolyfill.DateTimeFormat;
    }
} else {
    global.Intl = require('intl');
}

interface StateProps {
    language: Language;
}

class IntlProvider extends React.Component<StateProps> {
    constructor(props: StateProps) {
        super(props);

        addLocaleData([...nb, ...nn, ...en]);
    }

    render() {
        let messages = nbMessages;
        if (this.props.language === 'en') {
            messages = { ...nbMessages, ...enMessages };
        } else if (this.props.language === 'nn') {
            messages = { ...nbMessages, ...nnMessages };
        }

        return (
            <Provider
                key={this.props.language}
                locale={this.props.language}
                messages={messages || {}}>
                {this.props.children}
            </Provider>
        );
    }
}

export default IntlProvider;
