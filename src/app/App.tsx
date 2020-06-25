import * as React from 'react';
import IntlProvider, { Language } from './intl/IntlProvider';
import LanguageToggle from './intl/language-toggle/LanguageToggle';
import moment from 'moment';
import Router from './Router';
import NAVChatBot from '@navikt/nav-chatbot';

const DEFAULT_LANG: Language = 'nb';

// Feature-toggling? Aldri hørt om.
const ENABLE_LANGUAGE_TOGGLER = true;

interface State {
    currentLanguage: Language;
}

class App extends React.Component<unknown, State> {
    constructor(props: any) {
        super(props);

        this.state = {
            currentLanguage: DEFAULT_LANG,
        };

        moment.locale(DEFAULT_LANG);
    }

    setLanguage = (lang: Language) => {
        moment.locale(lang);
        this.setState({
            currentLanguage: lang,
        });
    };

    toggleLanguage = (lang: Language) => {
        this.setLanguage(lang);
    };

    render = () => {
        return (
            <IntlProvider language={this.state.currentLanguage}>
                <div lang={this.state.currentLanguage}>
                    {ENABLE_LANGUAGE_TOGGLER && <LanguageToggle toggleLanguage={this.toggleLanguage} />}
                    <NAVChatBot
                        customerKey="41155"
                        queueKey="Q_CHAT_BOT"
                        configId="599f9e7c-7f6b-4569-81a1-27202c419953"
                    />
                    <Router />
                </div>
            </IntlProvider>
        );
    };
}

export default App;
