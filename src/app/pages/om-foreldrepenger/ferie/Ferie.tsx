import * as React from 'react';
import PanelMedIllustrasjon from '../../../components/panel-med-illustrasjon/PanelMedIllustrasjon';
import translate from '../../../intl/translate';
import StrukturertTekst from '../../../components/strukturert-tekst/StrukturertTekst';
import LesMer from '../../../components/les-mer/LesMer';
import TypografiBase from 'nav-frontend-typografi';
import BEMHelper from '../../../utils/bem';
import './ferie.less';

const cls = BEMHelper('ferie');

const pageSvg = require('../../../assets/page.svg').default;
const content = require('../../../../content/all-informasjon/ferie/ferie');
const rettTilUtsettelseContent = require('../../../../content/all-informasjon/ferie/rett-til-utsettelse');
const fåUtsettelseContent = require('../../../../content/all-informasjon/ferie/få-utsettelse');
const feriepenger = require('../../../../content/all-informasjon/ferie/feriepenger');

const Ferie = ({ id }: { id: string }) => {
    return (
        <PanelMedIllustrasjon id={id} svg={pageSvg} title={translate('ferie')}>
            <StrukturertTekst tekst={content} />

            <FerieEksempel title={translate('om_foreldrepenger.ferie.eksempel_label')} />
            <FerieEksempel title={translate('om_foreldrepenger.ferie.eksempel2_label')} />

            <LesMer intro={translate('om_foreldrepenger.ferie.rett_til_utsettelse')}>
                <StrukturertTekst tekst={rettTilUtsettelseContent} />
            </LesMer>
            <LesMer intro={translate('om_foreldrepenger.ferie.utsette')}>
                <StrukturertTekst tekst={fåUtsettelseContent} />
            </LesMer>

            <StrukturertTekst tekst={feriepenger} />
        </PanelMedIllustrasjon>
    );
};

const FerieEksempel = ({ title }: { title: string }) => (
    <div className={cls.element('eksempel')}>
        <TypografiBase type="element">{title}</TypografiBase>
    </div>
);

export default Ferie;
