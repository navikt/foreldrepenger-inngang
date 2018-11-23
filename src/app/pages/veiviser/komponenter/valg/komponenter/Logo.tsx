import React from 'react';
import { withIntl } from '../../../../../intl/intl';
import { FlexibleSvg } from '../../../../../utils/CustomSVG';
import BEMHelper from '../../../../../utils/bem';
const cls = BEMHelper('valg');

const Logo = () => {
    return (
        <div className={cls.element('resultat--stonad-bilde')}>
            <FlexibleSvg
                iconRef={
                    require('../../../../../assets/icons/veiviser-resultat-har-rett.svg').default
                }
                width={738}
                height={182}
            />
        </div>
    );
};

export default withIntl(Logo);
