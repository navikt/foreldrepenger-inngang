import React from 'react';
import BEMHelper from '../../../../utils/bem';
import { FlexibleSvg } from '../../../../utils/CustomSVG';
import './header.less';
import StrukturertTekst from '../../../../components/strukturert-tekst/StrukturertTekst';
import { getContent } from '../../../../utils/getContent';
import { injectIntl, InjectedIntl } from 'react-intl';

const svg = require('./Sign.svg').default;

const headerTXT = 'veiviser/header/header';

const cls = BEMHelper('veiviser');
const Header = ({ intl }: { intl: InjectedIntl }) => {
    return (
        <div className={cls.element('komponent-header')}>
            <FlexibleSvg
                className={cls.element('komponent-header-ikon')}
                iconRef={svg}
                width={35}
                height={70}
            />
            <div className={cls.element('komponent-header-txt')}>
                <StrukturertTekst tekst={getContent(headerTXT, intl)} />
            </div>
        </div>
    );
};

export default injectIntl(Header);
