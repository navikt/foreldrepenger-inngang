import { Language } from '../intl/intl';

export const getContent = (contentPath: string, language: Language) => {
    try {
        const content = require(`../../content/${language}/${contentPath}.json`);
        return content;
    } catch (e) {
        return null;
    }
};
