import * as React from 'react';
import { getContent } from '../../../utils/getContent';
import { getTranslation, withIntl, IntlProps } from '../../../intl/intl';
import BEMHelper from '../../../utils/bem';
import Ferieforskyvning from './Ferieforskyvning';
import FerieforskyvningMobil from './FerieforskyvningMobil';
import LesMer from '../../../components/les-mer/LesMer';
import MediaQuery from 'react-responsive';
import PanelMedIllustrasjon from '../../../components/panel-med-illustrasjon/PanelMedIllustrasjon';
import StrukturertTekst from '../../../components/strukturert-tekst/StrukturertTekst';
import TypografiBase from 'nav-frontend-typografi';
import './ferie.less';

const cls = BEMHelper('ferie');

const ferieSvg = require('../../../assets/ark/ark-ferie.svg').default;
const content = 'om-foreldrepenger/ferie/ferie';
const rettTilUtsettelseContent = 'om-foreldrepenger/ferie/rett-til-utsettelse';
const fåUtsettelseContent = 'om-foreldrepenger/ferie/få-utsettelse';
const feriepenger = 'om-foreldrepenger/ferie/feriepenger';

interface Props {
    id: string;
}

const Ferie: React.StatelessComponent<Props & IntlProps> = ({ id, lang }) => {
    return (
        <PanelMedIllustrasjon
            id={id}
            svg={ferieSvg}
            title={getTranslation('om_foreldrepenger.ferie.tittel', lang)}>
            <StrukturertTekst tekst={getContent(content, lang)} />
            <div className={cls.element('eksempel')}>
                <TypografiBase type="normaltekst">
                    {getTranslation('om_foreldrepenger.ferie.eksempel_label', lang)}
                </TypografiBase>
                <MediaQuery minWidth={576}>
                    <Ferieforskyvning />
                </MediaQuery>
                <MediaQuery maxWidth={575}>
                    <FerieforskyvningMobil />
                </MediaQuery>
            </div>
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

export default withIntl(Ferie);
