import { Language } from '../intl/translate';

export const getContent = (contentPath: string, language: Language) => {
    const path = `../../content/${language}/${contentPath}.json`;

    try {
        const content = require(`../../content/${language}/${contentPath}.json`);
        return content;
    } catch (e) {
        console.error(`Content not found on path "${path}"`);
        return null;
    }
};
