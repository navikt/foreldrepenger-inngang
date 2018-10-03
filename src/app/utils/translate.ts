// TODO: Implementer i18n
import nbNo from './translations/nb_NO.json';

const translations = {
    no: nbNo
};

const translate = (s: string) => translations.no[s] || `**${s}**`;
export default translate;
