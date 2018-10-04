import * as React from 'react';
import TypografiBase from 'nav-frontend-typografi';
import { FlexibleSvg } from '../../../utils/CustomSVG';
import BEMHelper from '../../../utils/bem';
import translate from '../../../utils/translate';
import './header.less';
import MediaQuery from 'react-responsive';
import { getRandomInt } from '../../../utils/random';

const cls = BEMHelper('header');

const NUM_FAMILIES = 5;

const Header = () => {
    const randomFamilyAtHome = getRandomInt(1, NUM_FAMILIES);
    const svg = require(`../../../assets/familier-hjemme/familie-hjemme-${randomFamilyAtHome}.svg`)
        .default;

    return (
        <div role="heading" className={cls.className}>
            <div className={cls.element('content')}>
                <div className={cls.element('text')}>
                    <TypografiBase type="sidetittel">
                        {translate('informasjonstavle_tittel')}
                    </TypografiBase>
                    <TypografiBase type="normaltekst">
                        {translate('informasjonstavle_ingress')}
                    </TypografiBase>
                </div>
                <div className={cls.element('svgContainer')}>
                    <MediaQuery maxWidth={576}>
                        <FlexibleSvg
                            iconRef={svg}
                            height={111}
                            width={250}
                            className={cls.element('svg')}
                        />
                    </MediaQuery>
                    <MediaQuery minWidth={577}>
                        <FlexibleSvg
                            iconRef={svg}
                            height={133}
                            width={300}
                            aria-label="Illustrasjon av familie"
                            className={cls.element('svg')}
                        />
                    </MediaQuery>
                </div>
            </div>
        </div>
    );
};

export default Header;
