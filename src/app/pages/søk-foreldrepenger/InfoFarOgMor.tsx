import React, { FunctionComponent } from 'react';
import { useIntl } from 'react-intl';
import EkspanderbarSnakkeboble from 'app/components/ekspanderbar-snakkeboble/EkspanderbarSnakkeboble';
import Eventline from 'app/components/eventline/Eventline';
import Event from 'app/components/eventline/Event';
import Innhold, { getSource } from 'app/utils/innhold/Innhold';
import getTranslation from 'app/utils/i18nUtils';

const InfoFarOgMor: FunctionComponent = () => {
    const intl = useIntl();
    const morBrev = require('../../assets/foreldre/mor2-brev.svg').default;
    const inntektsOpplysninger = require('../../assets/inntektsopplysninger.svg').default;
    const fåSvar = require('../../assets/faa-svar.svg').default;
    const farBrev = require('../../assets/foreldre/far1-brev.svg').default;

    return (
        <Eventline>
            <Event title={getTranslation('søke_om_foreldrepenger.farOgMor.svangerskapsuke', intl)}>
                <EkspanderbarSnakkeboble
                    svg={morBrev}
                    tittel={getTranslation('søke_om_foreldrepenger.farOgMor.morKanSøke', intl)}
                >
                    <Innhold source={getSource('søk-foreldrepenger/far-og-mor/mor-kan-søke', intl)} />
                </EkspanderbarSnakkeboble>
            </Event>
            <Event title={getTranslation('søke_om_foreldrepenger.farOgMor.fireUkerFørMor', intl)}>
                <EkspanderbarSnakkeboble
                    svg={inntektsOpplysninger}
                    tittel={getTranslation('søke_om_foreldrepenger.farOgMor.inntektMor', intl)}
                >
                    <Innhold source={getSource('søk-foreldrepenger/far-og-mor/opplysninger-inntekt-mor', intl)} />
                </EkspanderbarSnakkeboble>
                <EkspanderbarSnakkeboble
                    svg={fåSvar}
                    tittel={getTranslation('søke_om_foreldrepenger.farOgMor.morFårSvar', intl)}
                >
                    <Innhold source={getSource('søk-foreldrepenger/far-og-mor/mor-får-svar', intl)} />
                </EkspanderbarSnakkeboble>
            </Event>
            <Event title={getTranslation('søke_om_foreldrepenger.farOgMor.barnFødt', intl)}>
                <EkspanderbarSnakkeboble
                    svg={farBrev}
                    tittel={getTranslation('søke_om_foreldrepenger.farOgMor.farKanSøke', intl)}
                >
                    <Innhold source={getSource('søk-foreldrepenger/far-og-mor/far-kan-søke', intl)} />
                </EkspanderbarSnakkeboble>
            </Event>
            <Event title={getTranslation('søke_om_foreldrepenger.farOgMor.fireUkerFørFar', intl)}>
                <EkspanderbarSnakkeboble
                    svg={inntektsOpplysninger}
                    tittel={getTranslation('søke_om_foreldrepenger.farOgMor.inntektFar', intl)}
                >
                    <Innhold source={getSource('søk-foreldrepenger/far-og-mor/opplysninger-inntekt-far', intl)} />
                </EkspanderbarSnakkeboble>
                <EkspanderbarSnakkeboble
                    svg={fåSvar}
                    tittel={getTranslation('søke_om_foreldrepenger.farOgMor.farFårSvar', intl)}
                >
                    <Innhold source={getSource('søk-foreldrepenger/far-og-mor/far-får-svar', intl)} />
                </EkspanderbarSnakkeboble>
            </Event>
        </Eventline>
    );
};

export default InfoFarOgMor;
