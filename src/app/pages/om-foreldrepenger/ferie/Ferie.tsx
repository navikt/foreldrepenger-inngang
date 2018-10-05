import * as React from 'react';
import PanelMedIllustrasjon from '../../../components/panel-med-illustrasjon/PanelMedIllustrasjon';
import { getTranslation, withIntl, IntlProps } from '../../../intl/intl';
import StrukturertTekst from '../../../components/strukturert-tekst/StrukturertTekst';
import LesMer from '../../../components/les-mer/LesMer';
import TypografiBase from 'nav-frontend-typografi';
import BEMHelper from '../../../utils/bem';
import { getContent } from '../../../utils/getContent';
import './ferie.less';

const cls = BEMHelper('ferie');

const pageSvg = require('../../../assets/page.svg').default;
const content = 'all-informasjon/ferie/ferie';
const rettTilUtsettelseContent = 'all-informasjon/ferie/rett-til-utsettelse';
const fåUtsettelseContent = 'all-informasjon/ferie/få-utsettelse';
const feriepenger = 'all-informasjon/ferie/feriepenger';

interface Props {
    id: string;
}

const Ferie: React.StatelessComponent<Props & IntlProps> = ({ id, lang }) => {
    return (
        <PanelMedIllustrasjon id={id} svg={pageSvg} title={getTranslation('ferie', lang)}>
            <StrukturertTekst tekst={getContent(content, lang)} />

            <FerieEksempel title={getTranslation('om_foreldrepenger.ferie.eksempel_label', lang)} />
            <FerieEksempel
                title={getTranslation('om_foreldrepenger.ferie.eksempel2_label', lang)}
            />

            <LesMer intro={getTranslation('om_foreldrepenger.ferie.rett_til_utsettelse', lang)}>
                <StrukturertTekst tekst={getContent(rettTilUtsettelseContent, lang)} />
            </LesMer>
            <LesMer intro={getTranslation('om_foreldrepenger.ferie.utsette', lang)}>
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

export default withIntl(Ferie);
