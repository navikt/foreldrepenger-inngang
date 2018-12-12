import * as React from 'react';
import { getContent } from '../../../utils/getContent';
import { getTranslation, withIntl, IntlProps } from '../../../intl/intl';
import BEMHelper from '../../../utils/bem';
import LesMer from '../../../components/les-mer/LesMer';
import PanelMedIllustrasjon from '../../../components/panel-med-illustrasjon/PanelMedIllustrasjon';
import StrukturertTekst from '../../../components/strukturert-tekst/StrukturertTekst';
import './hjemmeSamtidig.less';

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

const HjemmeSamtidig: React.StatelessComponent<Props & IntlProps> = ({ id, lang }) => {
    return (
        <PanelMedIllustrasjon
            className={cls.className}
            id={id}
            title={getTranslation('om_foreldrepenger.hjemme_samtidig.tittel', lang)}
            svg={hjemmeSamtidigSvg}>
            <StrukturertTekst tekst={getContent(ingress, lang)} />
            <LesMer
                intro={getTranslation('om_foreldrepenger.hjemme_samtidig.enHjemmeFulltid', lang)}>
                <StrukturertTekst tekst={getContent(hjemmeFulltid, lang)} />
            </LesMer>

            <LesMer intro={getTranslation('om_foreldrepenger.hjemme_samtidig.delePaHjemme', lang)}>
                <StrukturertTekst tekst={getContent(delePaHjemme, lang)} />
            </LesMer>

            <LesMer intro={getTranslation('om_foreldrepenger.hjemme_samtidig.farTvillinger', lang)}>
                <StrukturertTekst tekst={getContent(narFarTvillinger, lang)} />
            </LesMer>

            <LesMer intro={getTranslation('om_foreldrepenger.hjemme_samtidig.permisjon', lang)}>
                <StrukturertTekst tekst={getContent(permisjonVedFodsel, lang)} />
            </LesMer>
        </PanelMedIllustrasjon>
    );
};

export default withIntl(HjemmeSamtidig);
