import * as React from 'react';
import TypografiBase from 'nav-frontend-typografi';
import { FlexibleSvg } from '../../../utils/CustomSVG';
import BEMHelper from '../../../utils/bem';
import translate from '../../../utils/translate';
import './header.less';

const cls = BEMHelper('header');

const Header = () => {
    const svg = require('./hipsterfamilie-hjemme.svg').default;

    return (
        <div className={cls.className}>
            <div className={cls.element('content')}>
                <div className={cls.element('text')}>
                    <TypografiBase type="innholdstittel">
                        {translate('informasjonstavle_tittel')}
                    </TypografiBase>
                    <TypografiBase type="normaltekst">
                        {translate('informasjonstavle_ingress')}
                    </TypografiBase>
                </div>
                <FlexibleSvg
                    iconRef={svg}
                    height={155}
                    width={350}
                    className={cls.element('svg')}
                />
            </div>
        </div>
    );
};

export default Header;
