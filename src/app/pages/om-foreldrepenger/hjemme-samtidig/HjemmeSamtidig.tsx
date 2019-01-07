import * as React from 'react';

import { injectIntl, InjectedIntlProps } from 'react-intl';
import BEMHelper from '../../../utils/bem';
import LesMer from '../../../components/les-mer/LesMer';
import PanelMedIllustrasjon from '../../../components/panel-med-illustrasjon/PanelMedIllustrasjon';
import Innhold, { getSource } from 'app/utils/innhold/Innhold';
import './hjemmeSamtidig.less';
import getTranslation from 'app/utils/i18nUtils';

const cls = BEMHelper('hjemmeSamtidig');
const hjemmeSamtidigSvg = require('../../../assets/ark/ark-hjemme-samtidig.svg').default;
const ingress = 'om-foreldrepenger/hjemme-samtidig/ingress';
const hjemmeFulltid = 'om-foreldrepenger/hjemme-samtidig/hjemme-fulltid';
const delePaHjemme = 'om-foreldrepenger/hjemme-samtidig/dele-pa-hjemme';
const narFarTvillinger = 'om-foreldrepenger/hjemme-samtidig/far-tvillinger';
const permisjonVedFodsel = 'om-foreldrepenger/hjemme-samtidig/permisjon-fodsel';

interface Props {
    id: string;
}

const HjemmeSamtidig: React.StatelessComponent<Props & InjectedIntlProps> = ({ id, intl }) => {
    return (
        <PanelMedIllustrasjon
            className={cls.className}
            id={id}
            title={getTranslation('om_foreldrepenger.hjemme_samtidig.tittel', intl)}
            svg={hjemmeSamtidigSvg}>
            <Innhold source={getSource(ingress, intl)} />
            <LesMer
                intro={getTranslation('om_foreldrepenger.hjemme_samtidig.enHjemmeFulltid', intl)}>
                <Innhold source={getSource(hjemmeFulltid, intl)} />
            </LesMer>

            <LesMer intro={getTranslation('om_foreldrepenger.hjemme_samtidig.delePaHjemme', intl)}>
                <Innhold source={getSource(delePaHjemme, intl)} />
            </LesMer>

            <LesMer intro={getTranslation('om_foreldrepenger.hjemme_samtidig.farTvillinger', intl)}>
                <Innhold source={getSource(narFarTvillinger, intl)} />
            </LesMer>

            <LesMer intro={getTranslation('om_foreldrepenger.hjemme_samtidig.permisjon', intl)}>
                <Innhold source={getSource(permisjonVedFodsel, intl)} />
            </LesMer>
        </PanelMedIllustrasjon>
    );
};

export default injectIntl(HjemmeSamtidig);
