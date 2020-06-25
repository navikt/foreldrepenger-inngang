import React, { FunctionComponent } from 'react';
import Eventline from 'app/components/eventline/Eventline';
import Event from 'app/components/eventline/Event';
import EkspanderbarSnakkeboble from 'app/components/ekspanderbar-snakkeboble/EkspanderbarSnakkeboble';
import Innhold, { getSource } from 'app/utils/innhold/Innhold';
import { useIntl } from 'react-intl';
import getTranslation from 'app/utils/i18nUtils';

const InfoBareMorHarRett: FunctionComponent = () => {
    const intl = useIntl();
    const kalender = require('../../assets/planlegge.svg').default;
    const morBrev = require('../../assets/foreldre/mor1-brev.svg').default;
    const inntektsOpplysninger = require('../../assets/inntektsopplysninger.svg').default;
    const fåSvar = require('../../assets/faa-svar.svg').default;

    return (
        <Eventline>
            <Event title={getTranslation('søke_om_foreldrepenger.bareMorHarRett.venterBarn', intl)}>
                <EkspanderbarSnakkeboble
                    svg={kalender}
                    tittel={getTranslation('søke_om_foreldrepenger.bareMorHarRett.planleggTiden', intl)}
                >
                    <Innhold source={getSource('søk-foreldrepenger/bare-mor-har-rett/planlegg', intl)} />
                </EkspanderbarSnakkeboble>
            </Event>
            <Event title={getTranslation('søke_om_foreldrepenger.bareMorHarRett.svangerskapsuke', intl)}>
                <EkspanderbarSnakkeboble
                    svg={morBrev}
                    tittel={getTranslation('søke_om_foreldrepenger.bareMorHarRett.morKanSøke', intl)}
                >
                    <Innhold source={getSource('søk-foreldrepenger/bare-mor-har-rett/mor-kan-søke', intl)} />
                </EkspanderbarSnakkeboble>
            </Event>
            <Event title={getTranslation('søke_om_foreldrepenger.bareMorHarRett.fireUkerFørMor', intl)}>
                <EkspanderbarSnakkeboble
                    svg={inntektsOpplysninger}
                    tittel={getTranslation('søke_om_foreldrepenger.bareMorHarRett.inntektMor', intl)}
                >
                    <Innhold
                        source={getSource('søk-foreldrepenger/bare-mor-har-rett/opplysninger-inntekt-mor', intl)}
                    />
                </EkspanderbarSnakkeboble>
                <EkspanderbarSnakkeboble
                    svg={fåSvar}
                    tittel={getTranslation('søke_om_foreldrepenger.bareMorHarRett.morFårSvar', intl)}
                >
                    <Innhold source={getSource('søk-foreldrepenger/bare-mor-har-rett/mor-får-svar', intl)} />
                </EkspanderbarSnakkeboble>
            </Event>
        </Eventline>
    );
};

export default InfoBareMorHarRett;
