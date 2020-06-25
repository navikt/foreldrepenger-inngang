import * as React from 'react';
import { IntlProvider as Provider } from 'react-intl';
import moment from 'moment';
import areIntlLocalesSupported from 'intl-locales-supported';

import enMessages from './locales/en_GB.json';
import nnMessages from './locales/nn_NO.json';
import nbMessages from './locales/nb_NO.json';

export type Language = 'nb' | 'nn' | 'en';

interface StateProps {
    language: Language;
}

const localesMyAppSupports = ['nb-NO'];

if (global.Intl) {
    if (!areIntlLocalesSupported(localesMyAppSupports)) {
        const IntlPolyfill = require('intl');
        Intl.NumberFormat = IntlPolyfill.NumberFormat;
        Intl.DateTimeFormat = IntlPolyfill.DateTimeFormat;

        if (typeof (Intl.NumberFormat as any).__addLocaleData === 'function') {
            (Intl.NumberFormat as any).__addLocaleData(require('@formatjs/intl-numberformat/dist/locale-data/nb.json'));
        }
    }
} else {
    global.Intl = require('intl');
}

moment.locale('nb');

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
