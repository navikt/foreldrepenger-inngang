import * as React from 'react';
import { getContent } from '../../../utils/getContent';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import BEMHelper from '../../../utils/bem';
import LesMer from '../../../components/les-mer/LesMer';
import PanelMedIllustrasjon from '../../../components/panel-med-illustrasjon/PanelMedIllustrasjon';
import StrukturertTekst from '../../../components/strukturert-tekst/StrukturertTekst';
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
            <StrukturertTekst tekst={getContent(ingress, intl)} />
            <LesMer
                intro={getTranslation('om_foreldrepenger.hjemme_samtidig.enHjemmeFulltid', intl)}>
                <StrukturertTekst tekst={getContent(hjemmeFulltid, intl)} />
            </LesMer>

            <LesMer intro={getTranslation('om_foreldrepenger.hjemme_samtidig.delePaHjemme', intl)}>
                <StrukturertTekst tekst={getContent(delePaHjemme, intl)} />
            </LesMer>

            <LesMer intro={getTranslation('om_foreldrepenger.hjemme_samtidig.farTvillinger', intl)}>
                <StrukturertTekst tekst={getContent(narFarTvillinger, intl)} />
            </LesMer>

            <LesMer intro={getTranslation('om_foreldrepenger.hjemme_samtidig.permisjon', intl)}>
                <StrukturertTekst tekst={getContent(permisjonVedFodsel, intl)} />
            </LesMer>
        </PanelMedIllustrasjon>
    );
};

export default injectIntl(HjemmeSamtidig);
