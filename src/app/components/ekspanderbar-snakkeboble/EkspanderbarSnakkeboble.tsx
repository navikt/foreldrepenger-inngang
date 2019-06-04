import React, { FunctionComponent } from 'react';
import Ekspanderbartpanel from 'nav-frontend-ekspanderbartpanel';
import Innhold, { getSource } from 'app/utils/innhold/Innhold';
import CustomSVGFromSprite from 'app/utils/CustomSVG';
import Veileder from 'nav-frontend-veileder';
import { InjectedIntl, injectIntl } from 'react-intl';

import './ekspanderbarSnakkeboble.less';
import BEMHelper from 'app/utils/bem';

const cls = BEMHelper('ekspanderbarSnakkeboble');

interface Props {
    svg: any;
    intl: InjectedIntl;
    tittel: string;
    innhold: string;
}

const EkspanderbarSnakkeboble: FunctionComponent<Props> = ({ svg, tittel, innhold, intl }) => {
    return (
        <div className={cls.block}>
            <Veileder
                className="veileder__override"
                fargetema="normal"
                posisjon="høyre"
                storrelse="M"
                center={true}
                tekst={
                    <Ekspanderbartpanel tittel={tittel}>
                        <Innhold source={getSource(innhold, intl)} />
                    </Ekspanderbartpanel>
                }>
                <CustomSVGFromSprite className="infoSvg" iconRef={svg} />
            </Veileder>
        </div>
    );
};

export default injectIntl(EkspanderbarSnakkeboble);
