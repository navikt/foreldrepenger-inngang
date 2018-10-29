import React from 'react';
import BEMHelper from '../../../../utils/bem';
import { FlexibleSvg } from '../../../../utils/CustomSVG';
import './header.less';
import StrukturertTekst from '../../../../components/strukturert-tekst/StrukturertTekst';
import { getContent } from '../../../../utils/getContent';
import { Language, withIntl } from '../../../../intl/intl';

const svg = require('./Sign.svg').default;

const headerTXT = 'veiviser/header/header';

const cls = BEMHelper('veiviser');
const Header = ({ lang }: { lang: Language }) => {
    return (
        <div className={cls.element('komponent-header')}>
            <FlexibleSvg
                className={cls.element('komponent-header-ikon')}
                iconRef={svg}
                width={35}
                height={70}
            />
            <div className={cls.element('komponent-header-txt')}>
                <StrukturertTekst tekst={getContent(headerTXT, lang)} />
            </div>
        </div>
    );
};

export default withIntl(Header);
