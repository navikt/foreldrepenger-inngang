import * as React from 'react';
import IntlContext from './intl/IntlContext';
import { getTranslation, Language } from './intl/intl';
import BEMHelper from './utils/bem';
import TypografiBase from 'nav-frontend-typografi';
import Router from './Router';
import classnames from 'classnames';
import './app.less';

interface State {
    currentLanguage: Language;
}

const cls = BEMHelper('app');

class App extends React.Component<{}, State> {
    constructor(props: {}) {
        super(props);

        this.state = {
            currentLanguage: 'nb'
        };
    }

    setLanguage = (lang: Language) => {
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
            <IntlContext.Provider
                value={{
                    lang: this.state.currentLanguage,
                    setLanguage: this.setLanguage
                }}>
                <div lang={this.state.currentLanguage}>
                    {process.env.NODE_ENV === 'navlab' ? (
                        <UnderUtviklingBanner
                            label={getTranslation('under_utvikling', this.state.currentLanguage)}
                        />
                    ) : (
                        <Språkbanner
                            onClick={this.toggleBetweenNbAndNn}
                            label={languageChangeText}
                        />
                    )}
                    <Router />
                </div>
            </IntlContext.Provider>
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

const UnderUtviklingBanner = ({ label }: { label: string }) => (
    <div
        className={classnames(
            cls.element('topBanner'),
            cls.element('topBanner', 'underUtvikling')
        )}>
        <TypografiBase type="normaltekst">{label}</TypografiBase>
    </div>
);

export default App;
