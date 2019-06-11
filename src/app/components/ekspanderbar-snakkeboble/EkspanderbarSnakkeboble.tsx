import React, { FunctionComponent } from 'react';
import Ekspanderbartpanel from 'nav-frontend-ekspanderbartpanel';
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
    children: React.ReactNode;
}

const EkspanderbarSnakkeboble: FunctionComponent<Props> = ({ svg, tittel, children, intl }) => {
    return (
        <div className={cls.block}>
            <Veileder
                className="veileder__override"
                fargetema="normal"
                posisjon="høyre"
                storrelse="M"
                center={true}
                tekst={<Ekspanderbartpanel tittel={tittel}>{children}</Ekspanderbartpanel>}>
                <CustomSVGFromSprite className="infoSvg" iconRef={svg} />
            </Veileder>
        </div>
    );
};

export default injectIntl(EkspanderbarSnakkeboble);
