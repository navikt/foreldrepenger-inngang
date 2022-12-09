import React, { FunctionComponent } from 'react';
import Eventline from 'app/components/eventline/Eventline';
import Event from 'app/components/eventline/Event';
import EkspanderbarSnakkeboble from 'app/components/ekspanderbar-snakkeboble/EkspanderbarSnakkeboble';
import { useIntl } from 'react-intl';
import Innhold, { getSource } from 'app/utils/innhold/Innhold';
import getTranslation from 'app/utils/i18nUtils';
import Veileder from 'app/components/veileder/Veileder';

const InfoFarOgFarNyttLovverk: FunctionComponent = () => {
    const intl = useIntl();
    const dokumentasjon = require('../../assets/dokumentasjon.svg').default;
    const far1Brev = require('../../assets/foreldre/far2-brev.svg').default;
    const inntektsOpplysninger = require('../../assets/inntektsopplysninger.svg').default;
    const fåSvar = require('../../assets/faa-svar.svg').default;
    const far2Brev = require('../../assets/foreldre/far3-brev.svg').default;

    return (
        <>
            <Eventline>
                <Event title={getTranslation('søke_om_foreldrepenger.farOgFar.terminEllerOmsorgsovertakelse', intl)}>
                    <EkspanderbarSnakkeboble
                        svg={dokumentasjon}
                        tittel={getTranslation(
                            'søke_om_foreldrepenger.farOgFar.dokumentasjonTerminEllerOmsorgsovertakelse',
                            intl
                        )}
                    >
                        <Innhold source={getSource('søk-foreldrepenger/far-og-far/dokumentasjon', intl)} />
                    </EkspanderbarSnakkeboble>
                    <EkspanderbarSnakkeboble
                        svg={far1Brev}
                        tittel={getTranslation('søke_om_foreldrepenger.farOgFar.far1KanSøke', intl)}
                    >
                        <Innhold source={getSource('søk-foreldrepenger/far-og-far/far-kan-søke', intl)} />
                    </EkspanderbarSnakkeboble>
                </Event>
                <Event title={getTranslation('søke_om_foreldrepenger.farOgFar.fireUkerFørFar1NyttLovverk', intl)}>
                    <EkspanderbarSnakkeboble
                        svg={inntektsOpplysninger}
                        tittel={getTranslation('søke_om_foreldrepenger.farOgFar.inntektFar1', intl)}
                    >
                        <Innhold source={getSource('søk-foreldrepenger/far-og-far/opplysninger-inntekt-far', intl)} />
                    </EkspanderbarSnakkeboble>
                    <EkspanderbarSnakkeboble
                        svg={fåSvar}
                        tittel={getTranslation('søke_om_foreldrepenger.farOgFar.far1FårSvar', intl)}
                    >
                        <Innhold source={getSource('søk-foreldrepenger/far-og-far/far-får-svar', intl)} />
                    </EkspanderbarSnakkeboble>
                    <EkspanderbarSnakkeboble
                        svg={far2Brev}
                        tittel={getTranslation('søke_om_foreldrepenger.farOgFar.far2KanSøke', intl)}
                    >
                        <Innhold source={getSource('søk-foreldrepenger/far-og-far/medfar-kan-søke', intl)} />
                    </EkspanderbarSnakkeboble>
                </Event>
                <Event title={getTranslation('søke_om_foreldrepenger.farOgFar.fireUkerFørFar2NyttLovverk', intl)}>
                    <EkspanderbarSnakkeboble
                        svg={inntektsOpplysninger}
                        tittel={getTranslation('søke_om_foreldrepenger.farOgFar.inntektFar2', intl)}
                    >
                        <Innhold
                            source={getSource('søk-foreldrepenger/far-og-far/opplysninger-inntekt-medfar', intl)}
                        />
                    </EkspanderbarSnakkeboble>
                    <EkspanderbarSnakkeboble
                        svg={fåSvar}
                        tittel={getTranslation('søke_om_foreldrepenger.farOgFar.far2FårSvar', intl)}
                    >
                        <Innhold source={getSource('søk-foreldrepenger/far-og-far/medfar-får-svar', intl)} />
                    </EkspanderbarSnakkeboble>
                </Event>
            </Eventline>
            <Veileder type="plakat" fargetema="normal" kompakt={true}>
                <Innhold source={getSource('søk-foreldrepenger/far-og-far/veilederinfo', intl)} />
            </Veileder>
        </>
    );
};

export default InfoFarOgFarNyttLovverk;
