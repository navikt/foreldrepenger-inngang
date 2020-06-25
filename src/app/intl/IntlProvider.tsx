import * as React from 'react';
import { IntlProvider as Provider } from 'react-intl';
import { NumberFormat, toLocaleString } from '@formatjs/intl-numberformat';
import moment from 'moment';

import enMessages from './locales/en_GB.json';
import nnMessages from './locales/nn_NO.json';
import nbMessages from './locales/nb_NO.json';

export type Language = 'nb' | 'nn' | 'en';

interface StateProps {
    language: Language;
}

NumberFormat.__addLocaleData(require('@formatjs/intl-numberformat/dist/locale-data/nb.json'));

new NumberFormat('nb', {
    style: 'unit',
    unit: 'bit',
    unitDisplay: 'long',
}).format(1000);

toLocaleString(1000, 'nb', {
    style: 'unit',
    unit: 'bit',
    unitDisplay: 'long',
});

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
