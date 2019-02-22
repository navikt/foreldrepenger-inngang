import React from 'react';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import BEMHelper from '../../../../../utils/bem';
import getTranslation from 'app/utils/i18nUtils';
import LangtPanelMedBilde from '../../../../../components/langt-panel-med-bilde/LangtPanelMedBilde';
const cls = BEMHelper('valg');
const hvorMYe = require('../../../../../assets/ark/ark-money2.svg').default;
const hvorLenge = require('../../../../../assets/ark/ark-calendar.svg').default;

const NavigasjonsBoks: React.StatelessComponent<InjectedIntlProps> = ({ intl }) => {
    return (
        <div className={cls.element('navigasjonsboks')}>
            <div className={cls.element('boksBorder')}>
                <LangtPanelMedBilde
                    svg={hvorMYe}
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
                    url="https://tjenester.nav.no/foreldrepengeplanlegger"
                />
            </div>
        </div>
    );
};

export default injectIntl(NavigasjonsBoks);
