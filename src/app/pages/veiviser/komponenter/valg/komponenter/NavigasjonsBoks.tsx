import React from 'react';
import { useIntl } from 'react-intl';
import BEMHelper from '../../../../../utils/bem';
import getTranslation from 'app/utils/i18nUtils';
import LangtPanelMedBilde from '../../../../../components/langt-panel-med-bilde/LangtPanelMedBilde';
const cls = BEMHelper('valg');
const hvorMye = require('../../../../../assets/ark/ark-money2.svg').default;

const NavigasjonsBoks: React.FunctionComponent = () => {
    const intl = useIntl();

    return (
        <div className={cls.element('navigasjonsboks')}>
            <div className={cls.element('boksBorder')}>
                <LangtPanelMedBilde
                    svg={hvorMye}
                    title={getTranslation('veiviser.navgigasjonsboks.kalk.label', intl)}
                    body={getTranslation('veiviser.navgigasjonsboks.kalk.sublabel', intl)}
                    url="/hvor-mye"
                />
            </div>
        </div>
    );
};

export default NavigasjonsBoks;
