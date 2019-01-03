import * as React from 'react';
import { injectIntl, InjectedIntl } from 'react-intl';
import BEMHelper from './utils/bem';
import getTranslation from './utils/i18nUtils';
import IntlProvider, { Language } from './intl/IntlProvider';
import moment from 'moment';
import Router from './Router';
import TypografiBase from 'nav-frontend-typografi';
import './app.less';

const cls = BEMHelper('app');
const DEFAULT_LANG: Language = 'nb';

// Feature-toggling? Aldri hørt om.
const ENABLE_LANGUAGE_TOGGLER = false;

interface State {
    currentLanguage: Language;
}

class App extends React.Component<{}, State> {
    constructor(props: {}) {
        super(props);

        this.state = {
            currentLanguage: DEFAULT_LANG
        };

        moment.locale(DEFAULT_LANG);
    }

    setLanguage = (lang: Language) => {
        moment.locale(lang);
        this.setState({
            currentLanguage: lang
        });
    };

    toggleBetweenNbAndNn = () => {
        this.setLanguage(this.getOtherMålform());
    };

    getOtherMålform = () => {
        return this.state.currentLanguage === 'nb' ? 'nn' : 'nb';
    };

    spellLanguage = (languageCode: Language) => {
        switch (languageCode) {
            case 'nb':
                return 'bokmål';
            case 'nn':
                return 'nynorsk';
            default:
                return 'ukjent';
        }
    };

    render = () => {
        const otherMålform = this.spellLanguage(this.getOtherMålform());

        return (
            <IntlProvider language={this.state.currentLanguage}>
                <div lang={this.state.currentLanguage}>
                    {ENABLE_LANGUAGE_TOGGLER && (
                        <Språkbanner
                            onClick={this.toggleBetweenNbAndNn}
                            otherMålform={otherMålform}
                        />
                    )}
                    <Router />
                </div>
            </IntlProvider>
        );
    };
}

const Språkbanner = injectIntl(
    ({
        onClick,
        otherMålform,
        intl
    }: {
        onClick: () => void;
        otherMålform: any;
        intl: InjectedIntl;
    }) => (
        <div className={cls.element('topBanner')}>
            <span onClick={onClick} className={cls.element('byttSpråkKnapp')}>
                <TypografiBase type="normaltekst">{`${getTranslation(
                    'endre_målform_til',
                    intl
                )} ${getTranslation(otherMålform, intl)}`}</TypografiBase>
            </span>
        </div>
    )
);

export default App;
