import InjectedIntl = ReactIntl.InjectedIntl;
import MessageValue = ReactIntl.MessageValue;

const getTranslation = (id: string, intl: InjectedIntl, value?: { [key: string]: MessageValue }): string =>
    intl.formatMessage({ id }, value);

export default getTranslation;
