// TODO: Implementer i18n
import nbNo from './nb_NO.json';
import nnNo from './nn_NO.json';

export type Language = 'nb' | 'nn';

const translations = {
    nb: nbNo,
    nn: nnNo
};

const translate = (s: string, lang?: Language) => {
    const language = lang && lang in translations ? lang : 'nb';
    return translations[language][s] || `**${s}**`;
};

export default translate;
