import * as React from 'react';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import StrukturertTekst from '../../../../components/strukturert-tekst/StrukturertTekst';
import { getContent } from '../../../../utils/getContent';
import LesMer from 'app/components/les-mer/LesMer';
import getTranslation from 'app/utils/i18nUtils';

const beregningTekstPath = 'om-foreldrepenger/beregning/arbeidstaker';
const arbeidstakerTasMed = 'om-foreldrepenger/beregning/arbeidstaker-tas-med';
const arbeidstakerTasIkkeMed = 'om-foreldrepenger/beregning/arbeidstaker-tas-ikke-med';
const dagerUtenArbeid = 'om-foreldrepenger/beregning/arbeidstaker-dager-uten-arbeid';

const Arbeidstaker: React.StatelessComponent<InjectedIntlProps> = ({ intl }) => {
    return (
        <div>
            <StrukturertTekst tekst={getContent(beregningTekstPath, intl)} />
            <LesMer
                intro={getTranslation(
                    'om_foreldrepenger.beregning.arbeidstaker.inntekter_som_tas_med',
                    intl
                )}>
                <StrukturertTekst tekst={getContent(arbeidstakerTasMed, intl)} />
            </LesMer>
            <LesMer
                intro={getTranslation(
                    'om_foreldrepenger.beregning.arbeidstaker.inntekter_som_ikke_tas_med',
                    intl
                )}>
                <StrukturertTekst tekst={getContent(arbeidstakerTasIkkeMed, intl)} />
            </LesMer>
            <LesMer
                intro={getTranslation(
                    'om_foreldrepenger.beregning.arbeidstaker.dager_uten_arbeid',
                    intl
                )}>
                <StrukturertTekst tekst={getContent(dagerUtenArbeid, intl)} />
            </LesMer>
        </div>
    );
};

export default injectIntl(Arbeidstaker);
