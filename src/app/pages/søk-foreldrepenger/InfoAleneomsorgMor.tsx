import React from 'react';
import Eventline from 'app/components/eventline/Eventline';
// import Event from 'app/components/eventline/Event';
// import EkspanderbarSnakkeboble from 'app/components/ekspanderbar-snakkeboble/EkspanderbarSnakkeboble';

const InfoAleneomsorgMor = () => {
    // const kalender = require('../../assets/planlegge.svg').default;
    // const inntektsOpplysninger = require('../../assets/inntektsopplysninger.svg').default;
    // const fåSvar = require('../../assets/faa-svar.svg').default;
    // const dokumentasjon = require('../../assets/dokumentasjon.svg').default;
    // const farBrev = require('../../assets/foreldre/far1-brev.svg').default;

    return (
        <Eventline>
            {/* <Event title="Dere venter barn">
                <EkspanderbarSnakkeboble
                    svg={kalender}
                    tittel="Planlegg tiden hjemme med barnet"
                    innhold="søk-foreldrepenger/planlegg"
                />
            </Event>
            <Event title="4 uker før mors første dag med foreldrepenger">
                <EkspanderbarSnakkeboble
                    svg={dokumentasjon}
                    tittel="Du får dokumentasjon på omsorgsovertakelse"
                    innhold="søk-foreldrepenger/planlegg"
                />
                <EkspanderbarSnakkeboble
                    svg={farBrev}
                    tittel="Du kan søke om foreldrepenger"
                    innhold="søk-foreldrepenger/planlegg"
                />
            </Event>
            <Event title="4 uker før din første dag med foreldrepenger">
                <EkspanderbarSnakkeboble
                    svg={inntektsOpplysninger}
                    tittel="Vi får opplysninger om inntekten din"
                    innhold="søk-foreldrepenger/planlegg"
                />
                <EkspanderbarSnakkeboble
                    svg={fåSvar}
                    tittel="Du får svar på søknaden"
                    innhold="søk-foreldrepenger/planlegg"
                />
            </Event> */}
        </Eventline>
    );
};

export default InfoAleneomsorgMor;
