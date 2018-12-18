import * as React from 'react';
import { withIntl, IntlProps, getTranslation } from '../../../../intl/intl';
import StrukturertTekst from '../../../../components/strukturert-tekst/StrukturertTekst';
import { getContent } from '../../../../utils/getContent';
import LesMer from 'app/components/les-mer/LesMer';

const beregningTekstPath = 'om-foreldrepenger/beregning/arbeidstaker';
const beregningTekstPathDel2 = 'om-foreldrepenger/beregning/arbeidstaker-del2';
const arbeidstakerTasMed = 'om-foreldrepenger/beregning/arbeidstaker-tas-med';
const arbeidstakerTasIkkeMed = 'om-foreldrepenger/beregning/arbeidstaker-tas-ikke-med';
const dagerUtenArbeid = 'om-foreldrepenger/beregning/arbeidstaker-dager-uten-arbeid';

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

            <StrukturertTekst tekst={getContent(beregningTekstPathDel2, lang)} />
        </div>
    );
};

export default withIntl(Arbeidstaker);
