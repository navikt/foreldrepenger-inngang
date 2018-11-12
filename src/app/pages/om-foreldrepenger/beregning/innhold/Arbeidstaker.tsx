import * as React from 'react';
import { withIntl, IntlProps, getTranslation } from '../../../../intl/intl';
import StrukturertTekst from '../../../../components/strukturert-tekst/StrukturertTekst';
import { getContent } from '../../../../utils/getContent';
import LesMer from 'app/components/les-mer/LesMer';

const beregningTekstPath = 'all-informasjon/beregning/arbeidstaker';
const arbeidstakerTasMed = 'all-informasjon/beregning/arbeidstaker-tas-med';
const arbeidstakerTasIkkeMed = 'all-informasjon/beregning/arbeidstaker-tas-ikke-med';
const dagerUtenArbeid = 'all-informasjon/beregning/arbeidstaker-dager-uten-arbeid';

const Arbeidstaker: React.StatelessComponent<IntlProps> = ({ lang }) => {
    return (
        <div>
            <StrukturertTekst tekst={getContent(beregningTekstPath, lang)} />
            <LesMer
                intro={getTranslation(
                    'om_foreldrepenger.beregning.arbeidstaker.inntekter_som_tas_med',
                    lang
                )}>
                <StrukturertTekst tekst={getContent(arbeidstakerTasMed, lang)} />
            </LesMer>
            <LesMer
                intro={getTranslation(
                    'om_foreldrepenger.beregning.arbeidstaker.inntekter_som_ikke_tas_med',
                    lang
                )}>
                <StrukturertTekst tekst={getContent(arbeidstakerTasIkkeMed, lang)} />
            </LesMer>
            <LesMer
                intro={getTranslation(
                    'om_foreldrepenger.beregning.arbeidstaker.dager_uten_arbeid',
                    lang
                )}>
                <StrukturertTekst tekst={getContent(dagerUtenArbeid, lang)} />
            </LesMer>
        </div>
    );
};

export default withIntl(Arbeidstaker);
