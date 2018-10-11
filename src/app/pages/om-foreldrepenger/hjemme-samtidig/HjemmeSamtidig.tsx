import * as React from 'react';
import { getTranslation, withIntl, IntlProps } from '../../../intl/intl';
import PanelMedIllustrasjon from '../../../components/panel-med-illustrasjon/PanelMedIllustrasjon';
import BEMHelper from '../../../utils/bem';
import StrukturertTekst from '../../../components/strukturert-tekst/StrukturertTekst';
import { getContent } from '../../../utils/getContent';
import LesMer from '../../../components/les-mer/LesMer';
import './hjemmeSamtidig.less';

const cls = BEMHelper('hjemmeSamtidig');
const hjemmeSamtidigSvg = require('../../../assets/ark/hjemme-samtidig.svg').default;
const ingress = 'all-informasjon/hjemme-samtidig/ingress';
const hjemmeFulltid = 'all-informasjon/hjemme-samtidig/hjemme-fulltid';
const delePaHjemme = 'all-informasjon/hjemme-samtidig/dele-pa-hjemme';
const narFarTvillinger = 'all-informasjon/hjemme-samtidig/far-tvillinger';
const permisjonVedFodsel = 'all-informasjon/hjemme-samtidig/permisjon-fodsel';

interface Props {
    id: string;
}

const HjemmeSamtidig: React.StatelessComponent<Props & IntlProps> = ({ id, lang }) => {
    return (
        <PanelMedIllustrasjon
            className={cls.className}
            id={id}
            title={getTranslation('om_foreldrepenger.hjemmeSamtidig.tittel')}
            svg={hjemmeSamtidigSvg}>
            <div className={cls.element('header')}>
                <StrukturertTekst tekst={getContent(ingress, lang)} />
            </div>

            <div className={cls.element('content')}>
                <LesMer
                    intro={getTranslation(
                        'om_foreldrepenger.hjemmeSamtidig.enHjemmeFulltid',
                        lang
                    )}>
                    <StrukturertTekst tekst={getContent(hjemmeFulltid, lang)} />
                </LesMer>

                <LesMer
                    intro={getTranslation('om_foreldrepenger.hjemmeSamtidig.delePaHjemme', lang)}>
                    <StrukturertTekst tekst={getContent(delePaHjemme, lang)} />
                </LesMer>

                <LesMer
                    intro={getTranslation('om_foreldrepenger.hjemmeSamtidig.farTvillinger', lang)}>
                    <StrukturertTekst tekst={getContent(narFarTvillinger, lang)} />
                </LesMer>

                <LesMer intro={getTranslation('om_foreldrepenger.hjemmeSamtidig.permisjon', lang)}>
                    <StrukturertTekst tekst={getContent(permisjonVedFodsel, lang)} />
                </LesMer>
            </div>
        </PanelMedIllustrasjon>
    );
};

export default withIntl(HjemmeSamtidig);
