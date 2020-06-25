import * as React from 'react';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import BEMHelper from '../../../../utils/bem';
import CustomSVG from '../../../../utils/CustomSVG';
import Veileder from 'nav-frontend-veileder';
import { FaneinnholdProps } from './Informasjonsfaner';
import Snakkeboble from './Snakkeboble';
import useWindowSize from 'app/hooks/useWindowSize';

const cls = BEMHelper('faneinnhold');

type Props = FaneinnholdProps & InjectedIntlProps;

const Faneinnhold = ({ snakkeboble, component }: Props) => {
    const { width } = useWindowSize();
    const veilederposisjon = width > 576 ? 'høyre' : 'bunn';

    let svg;
    if (typeof snakkeboble.icon === 'string') {
        svg = require(`../../../../assets/foreldre/${snakkeboble.icon}.svg`).default;
    }

    return (
        <div className={cls.block}>
            <div style={veilederposisjon === 'høyre' ? { display: 'flex' } : {}}>
                <Veileder
                    fargetema="normal"
                    posisjon={veilederposisjon}
                    storrelse="M"
                    center={true}
                    tekst={<Snakkeboble tittel={snakkeboble.tittel} punkter={snakkeboble.punkter} />}
                >
                    {svg ? <CustomSVG className="Icon__svg" iconRef={svg} size={72} /> : snakkeboble.icon}
                </Veileder>
            </div>
            <div className={cls.element('bodyTxt')}>{component}</div>
        </div>
    );
};

export default injectIntl(Faneinnhold);
