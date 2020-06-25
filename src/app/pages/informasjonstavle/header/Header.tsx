import * as React from 'react';
import { detErJul } from 'app/utils/datoUtils';
import { FlexibleSvg } from '../../../utils/CustomSVG';
import { getRandomInt } from '../../../utils/random';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import BEMHelper from '../../../utils/bem';
import getTranslation from 'app/utils/i18nUtils';
import MediaQuery from 'react-responsive';
import TypografiBase from 'nav-frontend-typografi';
import './header.less';

const cls = BEMHelper('header');

const NUM_FAMILIES = 5;

const getRandomSvgForHeader = () => {
    const randomFamily = getRandomInt(1, NUM_FAMILIES);
    return detErJul()
        ? require(`../../../assets/familier-hjemme/familie-hjemme-sesong-${randomFamily}.svg`).default
        : require(`../../../assets/familier-hjemme/familie-hjemme-${randomFamily}.svg`).default;
};

const Header = ({ intl }: InjectedIntlProps) => {
    const svg = getRandomSvgForHeader();

    return (
        <header className={cls.block}>
            <div className={cls.element('wrapper')}>
                <div className={cls.element('content')}>
                    <div className={cls.element('text')}>
                        <TypografiBase type="sidetittel">
                            {getTranslation('informasjonstavle.tittel', intl)}
                        </TypografiBase>
                        <TypografiBase type="normaltekst">
                            {getTranslation('informasjonstavle.ingress', intl)}
                        </TypografiBase>
                    </div>
                    <div role="presentation" className={cls.element('svgContainer')}>
                        <MediaQuery maxWidth={575}>
                            <FlexibleSvg iconRef={svg} height={130} width={270} className={cls.element('svg')} />
                        </MediaQuery>
                        <MediaQuery minWidth={576}>
                            <FlexibleSvg iconRef={svg} height={160} width={332} className={cls.element('svg')} />
                        </MediaQuery>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default injectIntl(Header);
