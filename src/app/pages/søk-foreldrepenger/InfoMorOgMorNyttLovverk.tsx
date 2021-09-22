import React, { FunctionComponent } from 'react';
import Eventline from 'app/components/eventline/Eventline';
import EkspanderbarSnakkeboble from 'app/components/ekspanderbar-snakkeboble/EkspanderbarSnakkeboble';
import Event from 'app/components/eventline/Event';
import Innhold, { getSource } from 'app/utils/innhold/Innhold';
import { useIntl } from 'react-intl';
import getTranslation from 'app/utils/i18nUtils';

const InfoMorOgMorNyttLovverk: FunctionComponent = () => {
    const intl = useIntl();
    const kalender = require('../../assets/planlegge.svg').default;
    const morBrev = require('../../assets/foreldre/mor2-brev.svg').default;
    const inntektsOpplysninger = require('../../assets/inntektsopplysninger.svg').default;
    const fåSvar = require('../../assets/faa-svar.svg').default;
    const medmorBrev = require('../../assets/foreldre/mor4-brev.svg').default;

    return (
        <Eventline>
            <Event title={getTranslation('søke_om_foreldrepenger.morOgMedmor.venterBarn', intl)}>
                <EkspanderbarSnakkeboble
                    svg={kalender}
                    tittel={getTranslation('søke_om_foreldrepenger.morOgMedmor.planleggTiden', intl)}
                >
                    <Innhold source={getSource('søk-foreldrepenger/mor-og-mor/planlegg', intl)} />
                </EkspanderbarSnakkeboble>
            </Event>
            <Event title={getTranslation('søke_om_foreldrepenger.morOgMedmor.svangerskapsuke', intl)}>
                <EkspanderbarSnakkeboble
                    svg={morBrev}
                    tittel={getTranslation('søke_om_foreldrepenger.morOgMedmor.morKanSøke', intl)}
                >
                    <Innhold source={getSource('søk-foreldrepenger/mor-og-mor/mor-kan-søke', intl)} />
                </EkspanderbarSnakkeboble>
            </Event>
            <Event title={getTranslation('søke_om_foreldrepenger.morOgMedmor.fireUkerFørMor', intl)}>
                <EkspanderbarSnakkeboble
                    svg={inntektsOpplysninger}
                    tittel={getTranslation('søke_om_foreldrepenger.morOgMedmor.inntektMor', intl)}
                >
                    <Innhold source={getSource('søk-foreldrepenger/mor-og-mor/opplysninger-inntekt-mor', intl)} />
                </EkspanderbarSnakkeboble>
                <EkspanderbarSnakkeboble
                    svg={fåSvar}
                    tittel={getTranslation('søke_om_foreldrepenger.morOgMedmor.morFårSvar', intl)}
                >
                    <Innhold source={getSource('søk-foreldrepenger/mor-og-mor/mor-får-svar', intl)} />
                </EkspanderbarSnakkeboble>
            </Event>
            <Event title={getTranslation('søke_om_foreldrepenger.morOgMedmor.barnFødt', intl)}>
                <EkspanderbarSnakkeboble
                    svg={medmorBrev}
                    tittel={getTranslation('søke_om_foreldrepenger.morOgMedmor.medmorKanSøke', intl)}
                >
                    <Innhold source={getSource('søk-foreldrepenger/mor-og-mor/medmor-kan-søke', intl)} />
                </EkspanderbarSnakkeboble>
            </Event>
            <Event title={getTranslation('søke_om_foreldrepenger.morOgMedmor.fireUkerFørMedmorNyttLovverk', intl)}>
                <EkspanderbarSnakkeboble
                    svg={inntektsOpplysninger}
                    tittel={getTranslation('søke_om_foreldrepenger.morOgMedmor.inntektMedmor', intl)}
                >
                    <Innhold source={getSource('søk-foreldrepenger/mor-og-mor/opplysninger-inntekt-medmor', intl)} />
                </EkspanderbarSnakkeboble>
                <EkspanderbarSnakkeboble
                    svg={fåSvar}
                    tittel={getTranslation('søke_om_foreldrepenger.morOgMedmor.medmorFårSvar', intl)}
                >
                    <Innhold source={getSource('søk-foreldrepenger/mor-og-mor/medmor-får-svar', intl)} />
                </EkspanderbarSnakkeboble>
            </Event>
        </Eventline>
    );
};

export default InfoMorOgMorNyttLovverk;
