import React, { FunctionComponent } from 'react';
import Eventline from 'app/components/eventline/Eventline';
import Event from 'app/components/eventline/Event';
import EkspanderbarSnakkeboble from 'app/components/ekspanderbar-snakkeboble/EkspanderbarSnakkeboble';
import { InjectedIntl, injectIntl } from 'react-intl';
import Innhold, { getSource } from 'app/utils/innhold/Innhold';

interface Props {
    intl: InjectedIntl;
}

const InfoFarOgFar: FunctionComponent<Props> = ({ intl }) => {
    const kalender = require('../../assets/planlegge.svg').default;
    const dokumentasjon = require('../../assets/dokumentasjon.svg').default;
    const far1Brev = require('../../assets/foreldre/far2-brev.svg').default;
    const inntektsOpplysninger = require('../../assets/inntektsopplysninger.svg').default;
    const fåSvar = require('../../assets/faa-svar.svg').default;
    const far2Brev = require('../../assets/foreldre/far3-brev.svg').default;

    return (
        <>
            <Eventline>
                <Event title="Dere venter barn">
                    <EkspanderbarSnakkeboble
                        svg={kalender}
                        tittel="Planlegg tiden hjemme med barnet">
                        <Innhold
                            source={getSource('søk-foreldrepenger/far-og-far/planlegg', intl)}
                        />
                    </EkspanderbarSnakkeboble>
                </Event>
                <Event title="Dere får vite dato for termin eller omsorgsovertakelse">
                    <EkspanderbarSnakkeboble
                        svg={dokumentasjon}
                        tittel="Dere får dokumentasjon på omsorgsovertakelse">
                        <Innhold
                            source={getSource('søk-foreldrepenger/far-og-far/dokumentasjon', intl)}
                        />
                    </EkspanderbarSnakkeboble>
                    <EkspanderbarSnakkeboble
                        svg={far1Brev}
                        tittel="Far 1 kan søke om foreldrepenger">
                        <Innhold
                            source={getSource('søk-foreldrepenger/far-og-far/far-kan-søke', intl)}
                        />
                    </EkspanderbarSnakkeboble>
                </Event>
                <Event title="4 uker før far 1 sin første dag med foreldrepenger">
                    <EkspanderbarSnakkeboble
                        svg={inntektsOpplysninger}
                        tittel="Vi får opplysninger om inntekten til far 1">
                        <Innhold
                            source={getSource(
                                'søk-foreldrepenger/far-og-far/opplysninger-inntekt-far',
                                intl
                            )}
                        />
                    </EkspanderbarSnakkeboble>
                    <EkspanderbarSnakkeboble svg={fåSvar} tittel="Far 1 får svar på søknaden">
                        <Innhold
                            source={getSource('søk-foreldrepenger/far-og-far/far-får-svar', intl)}
                        />
                    </EkspanderbarSnakkeboble>
                    <EkspanderbarSnakkeboble
                        svg={far2Brev}
                        tittel="Far 2 kan søke om foreldrepenger">
                        <Innhold
                            source={getSource(
                                'søk-foreldrepenger/far-og-far/medfar-kan-søke',
                                intl
                            )}
                        />
                    </EkspanderbarSnakkeboble>
                </Event>
                <Event title="4 uker før far 2 sin første dag med foreldrepenger eller utsettelse">
                    <EkspanderbarSnakkeboble
                        svg={inntektsOpplysninger}
                        tittel="Vi får opplysninger om inntekten til far 2">
                        <Innhold
                            source={getSource(
                                'søk-foreldrepenger/far-og-far/opplysninger-inntekt-medfar',
                                intl
                            )}
                        />
                    </EkspanderbarSnakkeboble>
                    <EkspanderbarSnakkeboble svg={fåSvar} tittel="Far 2 får svar på søknaden">
                        <Innhold
                            source={getSource(
                                'søk-foreldrepenger/far-og-far/medfar-får-svar',
                                intl
                            )}
                        />
                    </EkspanderbarSnakkeboble>
                </Event>
            </Eventline>
        </>
    );
};

export default injectIntl(InfoFarOgFar);
