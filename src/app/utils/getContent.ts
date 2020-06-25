import { StrukturertTekst } from './strukturertTekst';
import { IntlShape } from 'react-intl';

export const getContent = (contentPath: string, intl: IntlShape): StrukturertTekst => {
    try {
        const content = require(`../../content/${intl.locale}/${contentPath}.json`);
        return content;
    } catch (e) {
        if (process.env.NODE_ENV === 'development') {
            /* tslint:disable */
            console.error('No content found:', e);
        }

        return [];
    }
};
