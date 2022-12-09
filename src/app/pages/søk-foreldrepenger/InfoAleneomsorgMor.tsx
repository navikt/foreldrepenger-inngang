import React, { FunctionComponent } from 'react';
import Eventline from 'app/components/eventline/Eventline';
import Event from 'app/components/eventline/Event';
import EkspanderbarSnakkeboble from 'app/components/ekspanderbar-snakkeboble/EkspanderbarSnakkeboble';
import Innhold, { getSource } from 'app/utils/innhold/Innhold';
import { useIntl } from 'react-intl';
import getTranslation from 'app/utils/i18nUtils';

const InfoAleneomsorgMor: FunctionComponent = () => {
    const intl = useIntl();
    const morBrev = require('../../assets/foreldre/mor2-brev.svg').default;
    const inntektsOpplysninger = require('../../assets/inntektsopplysninger.svg').default;
    const fåSvar = require('../../assets/faa-svar.svg').default;

    return (
        <Eventline>
            <Event title={getTranslation('søke_om_foreldrepenger.aleneomsorg.mor.svangerskapsuke', intl)}>
                <EkspanderbarSnakkeboble
                    svg={morBrev}
                    tittel={getTranslation('søke_om_foreldrepenger.aleneomsorg.mor.morKanSøke', intl)}
                >
                    <Innhold source={getSource('søk-foreldrepenger/aleneomsorg-mor/mor-kan-søke', intl)} />
                </EkspanderbarSnakkeboble>
            </Event>
            <Event title={getTranslation('søke_om_foreldrepenger.aleneomsorg.mor.fireUkerFørMor', intl)}>
                <EkspanderbarSnakkeboble
                    svg={inntektsOpplysninger}
                    tittel={getTranslation('søke_om_foreldrepenger.aleneomsorg.mor.inntektMor', intl)}
                >
                    <Innhold source={getSource('søk-foreldrepenger/aleneomsorg-mor/opplysninger-inntekt-mor', intl)} />
                </EkspanderbarSnakkeboble>
                <EkspanderbarSnakkeboble
                    svg={fåSvar}
                    tittel={getTranslation('søke_om_foreldrepenger.aleneomsorg.mor.morFårSvar', intl)}
                >
                    <Innhold source={getSource('søk-foreldrepenger/aleneomsorg-mor/mor-får-svar', intl)} />
                </EkspanderbarSnakkeboble>
            </Event>
        </Eventline>
    );
};

export default InfoAleneomsorgMor;
