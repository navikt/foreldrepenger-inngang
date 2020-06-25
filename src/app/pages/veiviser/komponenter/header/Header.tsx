import React from 'react';
import BEMHelper from '../../../../utils/bem';
import { FlexibleSvg } from '../../../../utils/CustomSVG';
import './header.less';
import Innhold, { getSource } from 'app/utils/innhold/Innhold';

import { useIntl } from 'react-intl';

const svg = require('./Sign.svg').default;

const headerTXT = 'veiviser/introduksjon';

const cls = BEMHelper('veiviser');

const Header = () => {
    const intl = useIntl();

    return (
        <div className={cls.element('komponent-header')}>
            <FlexibleSvg className={cls.element('komponent-header-ikon')} iconRef={svg} width={35} height={70} />
            <div className={cls.element('komponent-header-txt')}>
                <Innhold source={getSource(headerTXT, intl)} />
            </div>
        </div>
    );
};

export default Header;
