import React, { FunctionComponent } from 'react';
import Eventline from 'app/components/eventline/Eventline';
import Event from 'app/components/eventline/Event';
import EkspanderbarSnakkeboble from 'app/components/ekspanderbar-snakkeboble/EkspanderbarSnakkeboble';
import { useIntl } from 'react-intl';
import Innhold, { getSource } from 'app/utils/innhold/Innhold';
import getTranslation from 'app/utils/i18nUtils';

const InfoBareFarHarRettNyttLovverk: FunctionComponent = () => {
    const intl = useIntl();
    const kalender = require('../../assets/planlegge.svg').default;
    const dokumentasjon = require('../../assets/dokumentasjon.svg').default;
    const farBrev = require('../../assets/foreldre/far4-brev.svg').default;
    const inntektsOpplysninger = require('../../assets/inntektsopplysninger.svg').default;
    const fåSvar = require('../../assets/faa-svar.svg').default;

    return (
        <Eventline>
            <Event title={getTranslation('søke_om_foreldrepenger.bareFarHarRett.venterBarn', intl)}>
                <EkspanderbarSnakkeboble
                    svg={kalender}
                    tittel={getTranslation('søke_om_foreldrepenger.bareFarHarRett.planleggTiden', intl)}
                >
                    <Innhold source={getSource('søk-foreldrepenger/bare-far-har-rett/planlegg', intl)} />
                </EkspanderbarSnakkeboble>
            </Event>
            <Event title={getTranslation('søke_om_foreldrepenger.bareFarHarRett.barnFødt', intl)}>
                <EkspanderbarSnakkeboble
                    svg={dokumentasjon}
                    tittel={getTranslation('søke_om_foreldrepenger.bareFarHarRett.dokumentasjon', intl)}
                >
                    <Innhold source={getSource('søk-foreldrepenger/bare-far-har-rett/dokumentasjon', intl)} />
                </EkspanderbarSnakkeboble>
                <EkspanderbarSnakkeboble
                    svg={farBrev}
                    tittel={getTranslation('søke_om_foreldrepenger.bareFarHarRett.farKanSøke', intl)}
                >
                    <Innhold source={getSource('søk-foreldrepenger/bare-far-har-rett/far-kan-søke', intl)} />
                </EkspanderbarSnakkeboble>
            </Event>
            <Event title={getTranslation('søke_om_foreldrepenger.bareFarHarRett.fireUkerFørFar', intl)}>
                <EkspanderbarSnakkeboble
                    svg={inntektsOpplysninger}
                    tittel={getTranslation('søke_om_foreldrepenger.bareFarHarRett.inntektFar', intl)}
                >
                    <Innhold
                        source={getSource('søk-foreldrepenger/bare-far-har-rett/opplysninger-inntekt-far', intl)}
                    />
                </EkspanderbarSnakkeboble>
                <EkspanderbarSnakkeboble
                    svg={fåSvar}
                    tittel={getTranslation('søke_om_foreldrepenger.bareFarHarRett.farFårSvar', intl)}
                >
                    <Innhold source={getSource('søk-foreldrepenger/bare-far-har-rett/far-får-svar', intl)} />
                </EkspanderbarSnakkeboble>
            </Event>
        </Eventline>
    );
};

export default InfoBareFarHarRettNyttLovverk;
