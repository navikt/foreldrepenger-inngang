import { IntlShape } from 'react-intl';

type MessageValue = string | number | boolean | Date | null | undefined;

const getTranslation = (id: string, intl: IntlShape, value?: { [key: string]: MessageValue }): string =>
    intl.formatMessage({ id }, value);

export default getTranslation;
