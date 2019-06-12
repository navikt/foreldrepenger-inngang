import React, { FunctionComponent } from 'react';
import { InjectedIntl, injectIntl } from 'react-intl';
import EkspanderbarSnakkeboble from 'app/components/ekspanderbar-snakkeboble/EkspanderbarSnakkeboble';
import Eventline from 'app/components/eventline/Eventline';
import Event from 'app/components/eventline/Event';
import Innhold, { getSource } from 'app/utils/innhold/Innhold';

interface Props {
    intl: InjectedIntl;
}

const InfoFarOgMor: FunctionComponent<Props> = ({ intl }) => {
    const kalender = require('../../assets/planlegge.svg').default;
    const morBrev = require('../../assets/foreldre/mor2-brev.svg').default;
    const inntektsOpplysninger = require('../../assets/inntektsopplysninger.svg').default;
    const fåSvar = require('../../assets/faa-svar.svg').default;
    const farBrev = require('../../assets/foreldre/far1-brev.svg').default;

    return (
        <Eventline>
            <Event title="Dere venter barn">
                <EkspanderbarSnakkeboble svg={kalender} tittel="Planlegg tiden hjemme med barnet">
                    <Innhold source={getSource('søk-foreldrepenger/far-og-mor/planlegg', intl)} />
                </EkspanderbarSnakkeboble>
            </Event>
            <Event title="22. svangerskapsuke">
                <EkspanderbarSnakkeboble svg={morBrev} tittel="Mor kan søke om foreldrepenger">
                    <Innhold
                        source={getSource('søk-foreldrepenger/far-og-mor/mor-kan-søke', intl)}
                    />
                </EkspanderbarSnakkeboble>
            </Event>
            <Event title="4 uker før mors første dag med foreldrepenger">
                <EkspanderbarSnakkeboble
                    svg={inntektsOpplysninger}
                    tittel="Vi får opplysninger om inntekten til mor">
                    <Innhold
                        source={getSource(
                            'søk-foreldrepenger/far-og-mor/opplysninger-inntekt-mor',
                            intl
                        )}
                    />
                </EkspanderbarSnakkeboble>
                <EkspanderbarSnakkeboble svg={fåSvar} tittel="Mor får svar på søknaden">
                    <Innhold
                        source={getSource('søk-foreldrepenger/far-og-mor/mor-får-svar', intl)}
                    />
                </EkspanderbarSnakkeboble>
            </Event>
            <Event title="Barnet blir født">
                <EkspanderbarSnakkeboble svg={farBrev} tittel="Far kan søke om foreldrepenger">
                    <Innhold
                        source={getSource('søk-foreldrepenger/far-og-mor/far-kan-søke', intl)}
                    />
                </EkspanderbarSnakkeboble>
            </Event>
            <Event title="4 uker før fars første dag med foreldrepenger eller utsettelse">
                <EkspanderbarSnakkeboble
                    svg={inntektsOpplysninger}
                    tittel="Inntektsopplysningene til far kan komme inn">
                    <Innhold
                        source={getSource(
                            'søk-foreldrepenger/far-og-mor/opplysninger-inntekt-far',
                            intl
                        )}
                    />
                </EkspanderbarSnakkeboble>
                <EkspanderbarSnakkeboble svg={fåSvar} tittel="Far kan få svar på søknaden">
                    <Innhold
                        source={getSource('søk-foreldrepenger/far-og-mor/far-får-svar', intl)}
                    />
                </EkspanderbarSnakkeboble>
            </Event>
        </Eventline>
    );
};

export default injectIntl(InfoFarOgMor);
