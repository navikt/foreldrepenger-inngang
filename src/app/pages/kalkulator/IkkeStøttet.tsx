import * as React from 'react';
import { useIntl } from 'react-intl';
import BEMHelper from 'app/utils/bem';
import Innhold, { getSource } from 'app/utils/innhold/Innhold';
import Veileder from 'app/components/veileder/Veileder';
import './kalkulator.less';

const cls = BEMHelper('kalkulator');

const IkkeStøttet = () => {
    const intl = useIntl();
    return (
        <div className={cls.element('ikkeStøttet')}>
            <Veileder fargetema="advarsel" ansikt="undrende" kompakt={true}>
                <Innhold source={getSource('kalkulator/ikke-støttet', intl)} />
            </Veileder>
        </div>
    );
};

export default IkkeStøttet;
