import * as React from 'react';
import { Language } from './intl';

const IntlContext: any = React.createContext({
    lang: 'nb',

    /* tslint:disable:no-empty */
    setLanguage: (lang: Language) => {}
});

export default IntlContext;
