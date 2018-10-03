import * as React from 'react';
import Provider from './intl/intl-context';
import translate, { Language } from './intl/translate';
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

    toggleLanguage = (lang: Language) => {
        this.setState({
            currentLanguage: lang
        });
    };

    toggleBetweenNbAndNn = () => {
        this.toggleLanguage(this.getOtherMålform());
    };

    getOtherMålform = () => {
        return this.state.currentLanguage === 'nb' ? 'nn' : 'nb';
    };

    spellLanguage = (languageCode: Language) => {
        switch (languageCode) {
            case 'nb':
                return translate('bokmål');
            case 'nn':
                return translate('nynorsk');
            default:
                return translate('ukjent');
        }
    };

    render = () => {
        return (
            <Provider
                value={{
                    lang: this.state.currentLanguage,
                    toggle: this.toggleLanguage
                }}>
                <div>
                    <div className={cls.element('topBanner')}>
                        <span
                            onClick={this.toggleBetweenNbAndNn}
                            className={cls.element('byttSpråkKnapp')}>
                            <TypografiBase type="normaltekst">{`${translate(
                                'endre_målform_til'
                            )} ${this.spellLanguage(this.getOtherMålform())}`}</TypografiBase>
                        </span>
                    </div>
                    <Router />
                </div>
            </Provider>
        );
    };
}

export default App;
