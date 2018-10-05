import * as React from 'react';
import TypografiBase from 'nav-frontend-typografi';
import { FlexibleSvg } from '../../../utils/CustomSVG';
import BEMHelper from '../../../utils/bem';
import './header.less';
import MediaQuery from 'react-responsive';
import { getRandomInt } from '../../../utils/random';
import { getTranslation, withIntl, IntlProps } from '../../../intl/intl';

const cls = BEMHelper('header');

const NUM_FAMILIES = 5;

const Header: React.StatelessComponent<IntlProps> = ({ lang }) => {
    const randomFamilyAtHome = getRandomInt(1, NUM_FAMILIES);
    const svg = require(`../../../assets/familier-hjemme/familie-hjemme-${randomFamilyAtHome}.svg`)
        .default;

    return (
        <header className={cls.className}>
            <div className={cls.element('content')}>
                <div className={cls.element('text')}>
                    <TypografiBase type="sidetittel">
                        {getTranslation('informasjonstavle.tittel', lang)}
                    </TypografiBase>
                    <TypografiBase type="normaltekst">
                        {getTranslation('informasjonstavle.ingress', lang)}
                    </TypografiBase>
                </div>
                <div role="presentation" className={cls.element('svgContainer')}>
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
                            className={cls.element('svg')}
                        />
                    </MediaQuery>
                </div>
            </div>
        </header>
    );
};

export default withIntl(Header);
