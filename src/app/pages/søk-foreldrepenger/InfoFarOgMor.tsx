import React, { FunctionComponent } from 'react';
import { InjectedIntl, injectIntl, FormattedHTMLMessage } from 'react-intl';
import EkspanderbarSnakkeboble from 'app/components/ekspanderbar-snakkeboble/EkspanderbarSnakkeboble';
import Eventline from 'app/components/eventline/Eventline';
import Event from 'app/components/eventline/Event';
import { Hovedknapp } from 'nav-frontend-knapper';

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
                    <FormattedHTMLMessage id="søk_foreldrepenger.far_og_mor.dere_venter_barn.paragraf_1" />
                    <FormattedHTMLMessage id="søk_foreldrepenger.far_og_mor.dere_venter_barn.paragraf_2" />
                    <Hovedknapp>Test</Hovedknapp>
                </EkspanderbarSnakkeboble>
            </Event>
            <Event title="22. svangerskapsuke">
                <EkspanderbarSnakkeboble svg={morBrev} tittel="Mor kan søke om foreldrepenger">
                    <FormattedHTMLMessage id="søk_foreldrepenger.far_og_mor.dere_venter_barn.paragraf_1" />
                    <FormattedHTMLMessage id="søk_foreldrepenger.far_og_mor.dere_venter_barn.paragraf_2" />
                </EkspanderbarSnakkeboble>
            </Event>
            <Event title="4 uker før mors første dag med foreldrepenger">
                <EkspanderbarSnakkeboble
                    svg={inntektsOpplysninger}
                    tittel="Vi får opplysninger om inntekten til mor">
                    <FormattedHTMLMessage id="søk_foreldrepenger.far_og_mor.dere_venter_barn.paragraf_1" />
                    <FormattedHTMLMessage id="søk_foreldrepenger.far_og_mor.dere_venter_barn.paragraf_2" />
                </EkspanderbarSnakkeboble>
                <EkspanderbarSnakkeboble svg={fåSvar} tittel="Mor får svart på søknaden">
                    <FormattedHTMLMessage id="søk_foreldrepenger.far_og_mor.dere_venter_barn.paragraf_1" />
                    <FormattedHTMLMessage id="søk_foreldrepenger.far_og_mor.dere_venter_barn.paragraf_2" />
                </EkspanderbarSnakkeboble>
            </Event>
            <Event title="Barnet blir født">
                <EkspanderbarSnakkeboble svg={farBrev} tittel="Far kan søke om foreldrepenger">
                    <FormattedHTMLMessage id="søk_foreldrepenger.far_og_mor.dere_venter_barn.paragraf_1" />
                    <FormattedHTMLMessage id="søk_foreldrepenger.far_og_mor.dere_venter_barn.paragraf_2" />
                </EkspanderbarSnakkeboble>
            </Event>
            <Event title="4 uker før fars første dag med foreldrepenger">
                <EkspanderbarSnakkeboble
                    svg={inntektsOpplysninger}
                    tittel="Inntektsopplysningene til far kan komme inn">
                    <FormattedHTMLMessage id="søk_foreldrepenger.far_og_mor.dere_venter_barn.paragraf_1" />
                    <FormattedHTMLMessage id="søk_foreldrepenger.far_og_mor.dere_venter_barn.paragraf_2" />
                </EkspanderbarSnakkeboble>
                <EkspanderbarSnakkeboble svg={fåSvar} tittel="Far kan få svar på søknaden">
                    <FormattedHTMLMessage id="søk_foreldrepenger.far_og_mor.dere_venter_barn.paragraf_1" />
                    <FormattedHTMLMessage id="søk_foreldrepenger.far_og_mor.dere_venter_barn.paragraf_2" />
                </EkspanderbarSnakkeboble>
            </Event>
        </Eventline>
    );
};

export default injectIntl(InfoFarOgMor);
