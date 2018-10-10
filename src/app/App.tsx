import * as React from 'react';
import IntlContext from './intl/IntlContext';
import { getTranslation, Language } from './intl/intl';
import BEMHelper from './utils/bem';
import TypografiBase from 'nav-frontend-typografi';
import Router from './Router';
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
                    <div className={cls.element('topBanner')}>
                        <span
                            onClick={this.toggleBetweenNbAndNn}
                            className={cls.element('byttSpråkKnapp')}>
                            <TypografiBase type="normaltekst">{languageChangeText}</TypografiBase>
                        </span>
                    </div>
                    <Router />
                </div>
            </IntlContext.Provider>
        );
    };
}

export default App;
