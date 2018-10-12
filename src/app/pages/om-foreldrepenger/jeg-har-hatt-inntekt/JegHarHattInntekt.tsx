import React, { StatelessComponent } from 'react';
import { getTranslation, withIntl, IntlProps } from '../../../intl/intl';
import StrukturertTekst from '../../../components/strukturert-tekst/StrukturertTekst';
import PanelMedIllustrasjon from '../../../components/panel-med-illustrasjon/PanelMedIllustrasjon';
import { getContent } from '../../../utils/getContent';
import LesMer from 'app/components/les-mer/LesMer';

const inntektSvg = require('../../../assets/ark/ark-hatt-inntekt.svg').default;

interface Props {
    id: string;
}

const JegHarHattInntekt: StatelessComponent<Props & IntlProps> = ({ id, lang }) => {
    return (
        <PanelMedIllustrasjon
            id={id}
            title={getTranslation('om_foreldrepenger.hatt_inntekt.tittel', lang)}
            svg={inntektSvg}>
            <StrukturertTekst
                tekst={getContent('all-informasjon/hatt-inntekt/hatt-inntekt', lang)}
            />
            <LesMer intro={getTranslation('om_foreldrepenger.hatt_inntekt.andre_inntekter', lang)}>
                <StrukturertTekst
                    tekst={getContent('all-informasjon/hatt-inntekt/andre-inntekter', lang)}
                />
            </LesMer>
            <LesMer intro={getTranslation('om_foreldrepenger.hatt_inntekt.hvor_mye', lang)}>
                <StrukturertTekst
                    tekst={getContent('all-informasjon/hatt-inntekt/hvor-mye', lang)}
                />
            </LesMer>
            <LesMer
                intro={getTranslation('om_foreldrepenger.hatt_inntekt.dager_uten_arbeid', lang)}>
                <StrukturertTekst
                    tekst={getContent('all-informasjon/hatt-inntekt/dager-uten-arbeid', lang)}
                />
            </LesMer>
            <StrukturertTekst
                tekst={getContent('all-informasjon/hatt-inntekt/hatt-inntekt-del2', lang)}
            />
        </PanelMedIllustrasjon>
    );
};

export default withIntl(JegHarHattInntekt);
