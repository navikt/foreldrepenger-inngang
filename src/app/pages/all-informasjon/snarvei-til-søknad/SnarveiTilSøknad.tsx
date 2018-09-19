import * as React from 'react';
import KnappBase from 'nav-frontend-knapper';
import Veilederpanel from 'nav-frontend-veilederpanel';

import BEMHelper from '../../../utils/bem';
import CustomSVG from '../../../utils/CustomSVG';
import translate from '../../../utils/translate';

import './snarveiTilSøknad.less';

const cls = BEMHelper('snarveiTilSøknad');

const SnarveiTilSøknad = () => {
    const saraSvg = require(`../../../assets/sara.svg`).default;
    const sara = <CustomSVG iconRef={saraSvg} size={64} />;

    return (
        <div className={cls.className}>
            <Veilederpanel kompakt={true} svg={sara} fargetema="normal">
                <div className={cls.element('innhold')}>
                    <div>{translate('snarvei_til_søknad')}</div>
                    <KnappBase className={cls.element('knapp')} type="standard">
                        {translate('søk_om_foreldrepenger')}
                    </KnappBase>
                </div>
            </Veilederpanel>
        </div>
    );
};

export default SnarveiTilSøknad;
