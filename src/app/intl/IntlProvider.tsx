import * as React from 'react';
import { IntlProvider as Provider } from 'react-intl';

import enMessages from './locales/en_GB.json';
import nnMessages from './locales/nn_NO.json';
import nbMessages from './locales/nb_NO.json';

import areIntlLocalesSupported from 'intl-locales-supported';

export type Language = 'nb' | 'nn' | 'en';

const localesMyAppSupports = ['nb-NO'];

if (global.Intl) {
    if (!areIntlLocalesSupported(localesMyAppSupports)) {
        const IntlPolyfill = require('intl');
        Intl.NumberFormat = IntlPolyfill.NumberFormat;
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
    }

    render() {
        let messages = nbMessages;
        if (this.props.language === 'en') {
            messages = { ...nbMessages, ...enMessages };
        } else if (this.props.language === 'nn') {
            messages = { ...nbMessages, ...nnMessages };
        }

        return (
            <Provider key={this.props.language} locale={this.props.language} messages={messages || {}}>
                {this.props.children}
            </Provider>
        );
    }
}

export default IntlProvider;
