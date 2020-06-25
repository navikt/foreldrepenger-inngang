import React from 'react';
import { useIntl } from 'react-intl';
import BEMHelper from '../../../../../utils/bem';
import getTranslation from 'app/utils/i18nUtils';
import LangtPanelMedBilde from '../../../../../components/langt-panel-med-bilde/LangtPanelMedBilde';
import externalUrls from '../../../../../utils/externalUrls';
const cls = BEMHelper('valg');
const hvorMye = require('../../../../../assets/ark/ark-money2.svg').default;
const hvorLenge = require('../../../../../assets/ark/ark-calendar.svg').default;

const NavigasjonsBoks: React.StatelessComponent = () => {
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
            <div className={cls.element('boksBorder sec')}>
                <LangtPanelMedBilde
                    svg={hvorLenge}
                    title={getTranslation('veiviser.navigasjonsboks.planlegg.label', intl)}
                    body={getTranslation('veiviser.navigasjonsboks.planlegg.sublabel', intl)}
                    url={externalUrls.foreldrepengeplanlegger}
                />
            </div>
        </div>
    );
};

export default NavigasjonsBoks;
