import * as React from 'react';
import TypografiBase from 'nav-frontend-typografi';
import { FlexibleSvg } from '../../../utils/CustomSVG';
import BEMHelper from '../../../utils/bem';
import './header.less';
import MediaQuery from 'react-responsive';
import { getRandomInt } from '../../../utils/random';
import { getTranslation, withIntl, Language } from '../../../intl/intl';
import { detErJul } from 'app/utils/datoUtils';

const cls = BEMHelper('header');

const NUM_FAMILIES = 5;

interface Props {
    lang: Language;
}

const getRandomSvgForHeader = () => {
    const randomFamily = getRandomInt(1, NUM_FAMILIES);
    return detErJul()
        ? require(`../../../assets/familier-hjemme/familie-hjemme-sesong-${randomFamily}.svg`)
              .default
        : require(`../../../assets/familier-hjemme/familie-hjemme-${randomFamily}.svg`).default;
};

const Header = ({ lang }: Props) => {
    const svg = getRandomSvgForHeader();

    return (
        <header className={cls.className}>
            <div className={cls.element('wrapper')}>
                <div className={cls.element('content')}>
                    <div className={cls.element('text')}>
                        <TypografiBase type="sidetittel">
                            {getTranslation('informasjonstavle.tittel', lang)}
                        </TypografiBase>
                    </div>
                    <div role="presentation" className={cls.element('svgContainer')}>
                        <MediaQuery maxWidth={575}>
                            <FlexibleSvg
                                iconRef={svg}
                                height={130}
                                width={270}
                                className={cls.element('svg')}
                            />
                        </MediaQuery>
                        <MediaQuery minWidth={576}>
                            <FlexibleSvg
                                iconRef={svg}
                                height={160}
                                width={332}
                                className={cls.element('svg')}
                            />
                        </MediaQuery>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default withIntl(Header);
