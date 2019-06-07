import React, { FunctionComponent } from 'react';
import Eventline from 'app/components/eventline/Eventline';
import Event from 'app/components/eventline/Event';
import EkspanderbarSnakkeboble from 'app/components/ekspanderbar-snakkeboble/EkspanderbarSnakkeboble';
import { InjectedIntl, injectIntl } from 'react-intl';
import Innhold, { getSource } from 'app/utils/innhold/Innhold';

interface Props {
    intl: InjectedIntl;
}

const InfoBareFarHarRett: FunctionComponent<Props> = ({ intl }) => {
    const kalender = require('../../assets/planlegge.svg').default;
    const dokumentasjon = require('../../assets/dokumentasjon.svg').default;
    const farBrev = require('../../assets/foreldre/far4-brev.svg').default;
    const inntektsOpplysninger = require('../../assets/inntektsopplysninger.svg').default;
    const fåSvar = require('../../assets/faa-svar.svg').default;

    return (
        <Eventline>
            <Event title="Dere venter barn">
                <EkspanderbarSnakkeboble svg={kalender} tittel="Planlegg tiden hjemme med barnet">
                    <Innhold
                        source={getSource('søk-foreldrepenger/bare-far-har-rett/planlegg', intl)}
                    />
                </EkspanderbarSnakkeboble>
                <EkspanderbarSnakkeboble
                    svg={dokumentasjon}
                    tittel="Du kan skaffe dokumentasjon på mors aktivitet">
                    <Innhold
                        source={getSource(
                            'søk-foreldrepenger/bare-far-har-rett/dokumentasjon',
                            intl
                        )}
                    />
                </EkspanderbarSnakkeboble>
            </Event>
            <Event title="Barnet blir født">
                <EkspanderbarSnakkeboble svg={farBrev} tittel="Du kan søke om foreldrepenger">
                    <Innhold
                        source={getSource(
                            'søk-foreldrepenger/bare-far-har-rett/far-kan-søke',
                            intl
                        )}
                    />
                </EkspanderbarSnakkeboble>
            </Event>
            <Event title="4 uker før din første dag med foreldrepenger">
                <EkspanderbarSnakkeboble
                    svg={inntektsOpplysninger}
                    tittel="Vi får opplysninger om inntekten din">
                    <Innhold
                        source={getSource(
                            'søk-foreldrepenger/bare-far-har-rett/opplysninger-inntekt-far',
                            intl
                        )}
                    />
                </EkspanderbarSnakkeboble>
                <EkspanderbarSnakkeboble svg={fåSvar} tittel="Du får svar på søknaden">
                    <Innhold
                        source={getSource(
                            'søk-foreldrepenger/bare-far-har-rett/far-får-svar',
                            intl
                        )}
                    />
                </EkspanderbarSnakkeboble>
            </Event>
        </Eventline>
    );
};

export default injectIntl(InfoBareFarHarRett);
