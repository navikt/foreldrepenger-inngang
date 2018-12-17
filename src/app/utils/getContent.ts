import { Language } from '../intl/intl';
import { StrukturertTekst } from './strukturertTekst';

export const getContent = (contentPath: string, language: Language): StrukturertTekst => {
    try {
        const content = require(`../../content/${language}/${contentPath}.json`);
        return content;
    } catch (e) {
        if (process.env.NODE_ENV === 'development') {
            /* tslint:disable */
            console.error('No content found:', e);
        }

        return [];
    }
};
