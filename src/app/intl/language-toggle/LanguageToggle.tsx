import * as React from 'react';
import { NedChevron } from 'nav-frontend-chevron';
import { Wrapper, Button, Menu, MenuItem } from 'react-aria-menubutton';
import NorwayFlagSVG from './NorwayFlagSVG';
import UKFlagSVG from './UKFlagSVG';
import { IntlShape, useIntl } from 'react-intl';

import 'nav-frontend-lenker-style';
import './languageToggle.less';
import getTranslation from 'app/utils/i18nUtils';
import { Language } from '../IntlProvider';

interface Props {
    toggleLanguage: (langaugeCode: string) => void;
}

const getLanguageCodeFromValue = (value: string) => {
    if (value === 'languageCode_nb') {
        return 'nb';
    } else if (value === 'languageCode_nn') {
        return 'nn';
    } else {
        return 'en';
    }
};

const getLanguageTextFromCode = (code: Language, intl: IntlShape) => {
    if (code === 'nb') {
        return getTranslation('languageToggle.bokmål', intl);
    } else if (code === 'nn') {
        return getTranslation('languageToggle.nynorsk', intl);
    } else {
        return getTranslation('languageToggle.english', intl);
    }
};

const renderMenuItem = (code: Language, intl: IntlShape) => {
    return (
        <li key={code}>
            <MenuItem className="languageToggle__menu__item">
                <div className="languageToggle__button__flag">{code === 'en' ? <UKFlagSVG /> : <NorwayFlagSVG />}</div>
                <div id={`languageCode_${code}`} className="languageToggle__button__language">
                    {getLanguageTextFromCode(code, intl)}
                </div>
            </MenuItem>
        </li>
    );
};

const handleSelection = (value: JSX.Element[], _e: any, toggleLanguage: any) => {
    toggleLanguage(getLanguageCodeFromValue(value[1].props.id));
};

const LanguageToggle: React.StatelessComponent<Props> = ({ toggleLanguage }) => {
    const intl = useIntl();
    const menuLanguages: Language[] = (['nb', 'nn', 'en'] as Language[]).filter((code) => code !== intl.locale);

    return (
        <div className="languageToggle">
            <Wrapper
                className="languageToggle__wrapper"
                onSelection={(value: JSX.Element[], e: any) => handleSelection(value, e, toggleLanguage)}
            >
                <Button className="languageToggle__button">
                    <div className="languageToggle__button__flag">
                        {intl.locale === 'en' ? <UKFlagSVG /> : <NorwayFlagSVG />}
                    </div>
                    <div className="languageToggle__button__language">
                        {getLanguageTextFromCode(intl.locale as Language, intl)}
                    </div>
                    <div>
                        <NedChevron />
                    </div>
                </Button>
                <Menu className="languageToggle__menu">
                    <ul>{menuLanguages.map((code) => renderMenuItem(code, intl))}</ul>
                </Menu>
            </Wrapper>
        </div>
    );
};
export default LanguageToggle;
