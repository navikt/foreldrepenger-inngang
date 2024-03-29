import React, { FunctionComponent } from 'react';
import Eventline from 'app/components/eventline/Eventline';
import Event from 'app/components/eventline/Event';
import EkspanderbarSnakkeboble from 'app/components/ekspanderbar-snakkeboble/EkspanderbarSnakkeboble';
import { useIntl } from 'react-intl';
import Innhold, { getSource } from 'app/utils/innhold/Innhold';
import getTranslation from 'app/utils/i18nUtils';

const InfoAleneomsorgFarNyttLovverk: FunctionComponent = () => {
    const intl = useIntl();
    const dokumentasjon = require('../../assets/dokumentasjon.svg').default;
    const farBrev = require('../../assets/foreldre/far4-brev.svg').default;
    const inntektsOpplysninger = require('../../assets/inntektsopplysninger.svg').default;
    const fåSvar = require('../../assets/faa-svar.svg').default;

    return (
        <Eventline>
            <Event title={getTranslation('søke_om_foreldrepenger.aleneomsorg.far.terminEllerOmsorgsovertakelse', intl)}>
                <EkspanderbarSnakkeboble
                    svg={dokumentasjon}
                    tittel={getTranslation('søke_om_foreldrepenger.aleneomsorg.far.dokumentasjonAleneomsorg', intl)}
                >
                    <Innhold source={getSource('søk-foreldrepenger/aleneomsorg-far/dokumentasjon', intl)} />
                </EkspanderbarSnakkeboble>
                <EkspanderbarSnakkeboble
                    svg={farBrev}
                    tittel={getTranslation('søke_om_foreldrepenger.aleneomsorg.far.farKanSøke', intl)}
                >
                    <Innhold source={getSource('søk-foreldrepenger/aleneomsorg-far/far-kan-søke-nytt-lovverk', intl)} />
                </EkspanderbarSnakkeboble>
            </Event>
            <Event title={getTranslation('søke_om_foreldrepenger.aleneomsorg.far.fireUkerFørFarNyttLovverk', intl)}>
                <EkspanderbarSnakkeboble
                    svg={inntektsOpplysninger}
                    tittel={getTranslation('søke_om_foreldrepenger.aleneomsorg.far.inntektFar', intl)}
                >
                    <Innhold source={getSource('søk-foreldrepenger/aleneomsorg-far/opplysninger-inntekt-far', intl)} />
                </EkspanderbarSnakkeboble>
                <EkspanderbarSnakkeboble
                    svg={fåSvar}
                    tittel={getTranslation('søke_om_foreldrepenger.aleneomsorg.far.farFårSvar', intl)}
                >
                    <Innhold source={getSource('søk-foreldrepenger/aleneomsorg-far/far-får-svar', intl)} />
                </EkspanderbarSnakkeboble>
            </Event>
        </Eventline>
    );
};

export default InfoAleneomsorgFarNyttLovverk;
