import * as React from 'react';
import IntlProvider from './intl/IntlProvider';
import { getTranslation, Language } from './intl/intl';
import BEMHelper from './utils/bem';
import TypografiBase from 'nav-frontend-typografi';
import Router from './Router';
import moment from 'moment';
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
        const languageChangeText = `${getTranslation(
            'endre_målform_til',
            this.state.currentLanguage
        )} ${getTranslation(otherMålform, this.state.currentLanguage)}`;

        return (
            <IntlProvider language={this.state.currentLanguage}>
                <div lang={this.state.currentLanguage}>
                    {ENABLE_LANGUAGE_TOGGLER && (
                        <Språkbanner
                            onClick={this.toggleBetweenNbAndNn}
                            label={languageChangeText}
                        />
                    )}
                    <Router />
                </div>
            </IntlProvider>
        );
    };
}

const Språkbanner = ({ onClick, label }: { onClick: () => void; label: string }) => (
    <div className={cls.element('topBanner')}>
        <span onClick={onClick} className={cls.element('byttSpråkKnapp')}>
            <TypografiBase type="normaltekst">{label}</TypografiBase>
        </span>
    </div>
);

export default App;
