import React, { FunctionComponent } from 'react';
import Eventline from 'app/components/eventline/Eventline';
import Event from 'app/components/eventline/Event';
import EkspanderbarSnakkeboble from 'app/components/ekspanderbar-snakkeboble/EkspanderbarSnakkeboble';
import Innhold, { getSource } from 'app/utils/innhold/Innhold';
import { injectIntl, InjectedIntl } from 'react-intl';

interface Props {
    intl: InjectedIntl;
}

const InfoAleneomsorgMor: FunctionComponent<Props> = ({ intl }) => {
    const kalender = require('../../assets/planlegge.svg').default;
    const morBrev = require('../../assets/foreldre/mor2-brev.svg').default;
    const inntektsOpplysninger = require('../../assets/inntektsopplysninger.svg').default;
    const fåSvar = require('../../assets/faa-svar.svg').default;

    return (
        <Eventline>
            <Event title="Dere venter barn">
                <EkspanderbarSnakkeboble svg={kalender} tittel="Planlegg tiden hjemme med barnet">
                    <Innhold
                        source={getSource('søk-foreldrepenger/aleneomsorg-mor/planlegg', intl)}
                    />
                </EkspanderbarSnakkeboble>
            </Event>
            <Event title="22. svangerskapsuke">
                <EkspanderbarSnakkeboble svg={morBrev} tittel="Mor kan søke om foreldrepenger">
                    <Innhold
                        source={getSource('søk-foreldrepenger/aleneomsorg-mor/mor-kan-søke', intl)}
                    />
                </EkspanderbarSnakkeboble>
            </Event>
            <Event title="4 uker før mors første dag med foreldrepenger">
                <EkspanderbarSnakkeboble
                    svg={inntektsOpplysninger}
                    tittel="Vi får opplysninger om inntekten til mor">
                    <Innhold
                        source={getSource(
                            'søk-foreldrepenger/aleneomsorg-mor/opplysninger-inntekt-mor',
                            intl
                        )}
                    />
                </EkspanderbarSnakkeboble>
                <EkspanderbarSnakkeboble svg={fåSvar} tittel="Mor får svart på søknaden">
                    <Innhold
                        source={getSource('søk-foreldrepenger/aleneomsorg-mor/mor-får-svar', intl)}
                    />
                </EkspanderbarSnakkeboble>
            </Event>
        </Eventline>
    );
};

export default injectIntl(InfoAleneomsorgMor);
