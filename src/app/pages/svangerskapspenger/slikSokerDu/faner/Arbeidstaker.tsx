import React from 'react';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import Innhold, { getSource } from '../../../../utils/innhold/Innhold';
import Sekvensliste from '../../../../components/sekvensliste/Sekvensliste';
import Sekvens from '../../../../components/sekvensliste/Sekvens';
import { FlexibleSvg } from '../../../../utils/CustomSVG';
import UtvidetInformasjon from '../../../kalkulator/utvidetinformasjon/UtvidetInformasjon';
import getTranslation from '../../../../utils/i18nUtils';

const Arbeidstaker: React.StatelessComponent<InjectedIntlProps> = ({ intl }) => (
    <>
        <div style={{ marginBottom: '2rem' }}>
            <Sekvensliste>
                <Sekvens
                    illustrasjon={
                        <FlexibleSvg
                            iconRef={require(`../../../../assets/slik-soker-du/jordmor.svg`).default}
                            height={96}
                            width={96}
                        />
                    }
                >
                    <Innhold source={getSource('svangerskapspenger/slik-soker-du/arbeidstaker.1', intl)} />
                </Sekvens>
                <Sekvens
                    illustrasjon={
                        <FlexibleSvg
                            iconRef={require(`../../../../assets/slik-soker-du/arbeidsgiver.svg`).default}
                            height={96}
                            width={96}
                        />
                    }
                >
                    <Innhold source={getSource('svangerskapspenger/slik-soker-du/arbeidstaker.2', intl)} />
                </Sekvens>
                <Sekvens
                    illustrasjon={
                        <FlexibleSvg
                            iconRef={require(`../../../../assets/slik-soker-du/bilde.svg`).default}
                            height={96}
                            width={96}
                        />
                    }
                >
                    <Innhold source={getSource('svangerskapspenger/slik-soker-du/arbeidstaker.3', intl)} />
                </Sekvens>
                <Sekvens
                    illustrasjon={
                        <FlexibleSvg
                            iconRef={require(`../../../../assets/slik-soker-du/soke.svg`).default}
                            height={96}
                            width={96}
                        />
                    }
                >
                    <Innhold source={getSource('svangerskapspenger/slik-soker-du/arbeidstaker.4', intl)} />
                </Sekvens>
            </Sekvensliste>
        </div>
        <UtvidetInformasjon apneLabel={getTranslation('info.svangerskapspenger.harIkkeElektroniskID.tittel', intl)}>
            <Innhold source={getSource('svangerskapspenger/slik-soker-du/elektroniskId', intl)} />
        </UtvidetInformasjon>
    </>
);

export default injectIntl(Arbeidstaker);
