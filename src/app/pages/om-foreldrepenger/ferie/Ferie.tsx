import * as React from 'react';
import { getContent } from '../../../utils/getContent';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import BEMHelper from '../../../utils/bem';
import Ferieforskyvning from './Ferieforskyvning';
import FerieforskyvningMobil from './FerieforskyvningMobil';
import getTranslation from 'app/utils/i18nUtils';
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

const Ferie: React.StatelessComponent<Props & InjectedIntlProps> = ({ id, intl }) => {
    return (
        <PanelMedIllustrasjon
            id={id}
            svg={ferieSvg}
            title={getTranslation('om_foreldrepenger.ferie.tittel', intl)}>
            <StrukturertTekst tekst={getContent(content, intl)} />
            <div className={cls.element('eksempel')}>
                <TypografiBase type="normaltekst">
                    {getTranslation('om_foreldrepenger.ferie.eksempel_label', intl)}
                </TypografiBase>
                <MediaQuery minWidth={576}>
                    <Ferieforskyvning />
                </MediaQuery>
                <MediaQuery maxWidth={575}>
                    <FerieforskyvningMobil />
                </MediaQuery>
            </div>
            <LesMer intro={getTranslation('om_foreldrepenger.ferie.rett_til_utsettelse', intl)}>
                <StrukturertTekst tekst={getContent(rettTilUtsettelseContent, intl)} />
            </LesMer>
            <LesMer intro={getTranslation('om_foreldrepenger.ferie.utsette', intl)}>
                <StrukturertTekst tekst={getContent(fåUtsettelseContent, intl)} />
            </LesMer>
            <StrukturertTekst tekst={getContent(feriepenger, intl)} />
        </PanelMedIllustrasjon>
    );
};

export default injectIntl(Ferie);
