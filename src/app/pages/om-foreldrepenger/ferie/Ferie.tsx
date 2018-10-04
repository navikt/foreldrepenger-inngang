import * as React from 'react';
import PanelMedIllustrasjon from '../../../components/panel-med-illustrasjon/PanelMedIllustrasjon';
import translate, { Language } from '../../../intl/translate';
import StrukturertTekst from '../../../components/strukturert-tekst/StrukturertTekst';
import LesMer from '../../../components/les-mer/LesMer';
import TypografiBase from 'nav-frontend-typografi';
import BEMHelper from '../../../utils/bem';
import { withLang } from '../../../intl/intl-context';
import { getContent } from '../../../utils/getContent';
import './ferie.less';

const cls = BEMHelper('ferie');

const pageSvg = require('../../../assets/page.svg').default;
const content = 'all-informasjon/ferie/ferie';
const rettTilUtsettelseContent = 'all-informasjon/ferie/rett-til-utsettelse';
const fåUtsettelseContent = 'all-informasjon/ferie/få-utsettelse';
const feriepenger = 'all-informasjon/ferie/feriepenger';

const Ferie = ({ id, lang }: { id: string; lang: Language }) => {
    return (
        <PanelMedIllustrasjon id={id} svg={pageSvg} title={translate('ferie')}>
            <StrukturertTekst tekst={getContent(content, lang)} />

            <FerieEksempel title={translate('om_foreldrepenger.ferie.eksempel_label')} />
            <FerieEksempel title={translate('om_foreldrepenger.ferie.eksempel2_label')} />

            <LesMer intro={translate('om_foreldrepenger.ferie.rett_til_utsettelse')}>
                <StrukturertTekst tekst={getContent(rettTilUtsettelseContent, lang)} />
            </LesMer>
            <LesMer intro={translate('om_foreldrepenger.ferie.utsette')}>
                <StrukturertTekst tekst={getContent(fåUtsettelseContent, lang)} />
            </LesMer>

            <StrukturertTekst tekst={getContent(feriepenger, lang)} />
        </PanelMedIllustrasjon>
    );
};

const FerieEksempel = ({ title }: { title: string }) => (
    <div className={cls.element('eksempel')}>
        <TypografiBase type="element">{title}</TypografiBase>
    </div>
);

export default withLang(Ferie);
