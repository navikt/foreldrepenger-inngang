import * as React from 'react';
import nbNo from './nb_NO.json';
import nnNo from './nn_NO.json';
import IntlContext from './IntlContext';

export type Language = 'nb' | 'nn';
export interface IntlProps {
    lang: Language;
    setLanguage: (lang: Language) => void;
}

const translations = {
    nb: nbNo,
    nn: nnNo
};

export const getTranslation = (id: string, lang?: Language) => {
    const language = lang && lang in translations ? lang : 'nb';
    return translations[language][id] || `**${id}**`;
};

export const withIntl = (Component: any) => {
    return (props: any) => {
        return (
            <IntlContext.Consumer>
                {(context: { lang: string; setLanguage: any }) => (
                    <Component {...props} lang={context.lang} setLanguage={context.setLanguage} />
                )}
            </IntlContext.Consumer>
        );
    };
};

const { Provider } = IntlContext;
export default Provider;
