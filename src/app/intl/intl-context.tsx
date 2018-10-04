import * as React from 'react';
import { Language } from './translate';

const IntlContext = React.createContext({
    lang: 'nb',
    toggle: (language: Language) => {}
});

export const withLang = (Component: any) => {
    return (props: any) => {
        return (
            <IntlContext.Consumer>
                {(context: { lang: string; toggle: any }) => (
                    <Component {...props} lang={context.lang} toggleLanguage={context.toggle} />
                )}
            </IntlContext.Consumer>
        );
    };
};

const { Provider } = IntlContext;
export default Provider;
