import React from 'react';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import Innhold, { getSource } from '../../../../utils/innhold/Innhold';
import Sekvensliste from '../../../../components/sekvensliste/Sekvensliste';
import Sekvens from '../../../../components/sekvensliste/Sekvens';
import { FlexibleSvg } from '../../../../utils/CustomSVG';

const Arbeidstaker: React.StatelessComponent<InjectedIntlProps> = ({ intl }) => (
    <Sekvensliste>
        <Sekvens
            illustrasjon={
                <FlexibleSvg
                    iconRef={require(`../../../../assets/slik-soker-du/jordmor.svg`).default}
                    height={96}
                    width={96}
                />
            }>
            <Innhold source={getSource('svangerskapspenger/slik-soker-du/arbeidstaker.1', intl)} />
        </Sekvens>
        <Sekvens
            illustrasjon={
                <FlexibleSvg
                    iconRef={require(`../../../../assets/slik-soker-du/arbeidsgiver.svg`).default}
                    height={96}
                    width={96}
                />
            }>
            <Innhold source={getSource('svangerskapspenger/slik-soker-du/arbeidstaker.2', intl)} />
        </Sekvens>
        <Sekvens
            illustrasjon={
                <FlexibleSvg
                    iconRef={require(`../../../../assets/slik-soker-du/bilde.svg`).default}
                    height={96}
                    width={96}
                />
            }>
            <Innhold source={getSource('svangerskapspenger/slik-soker-du/arbeidstaker.3', intl)} />
        </Sekvens>
        <Sekvens
            illustrasjon={
                <FlexibleSvg
                    iconRef={require(`../../../../assets/slik-soker-du/soke.svg`).default}
                    height={96}
                    width={96}
                />
            }>
            <Innhold source={getSource('svangerskapspenger/slik-soker-du/arbeidstaker.4', intl)} />
        </Sekvens>
    </Sekvensliste>
);

export default injectIntl(Arbeidstaker);
