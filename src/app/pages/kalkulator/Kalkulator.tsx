import * as React from 'react';
import Sidebanner from 'app/components/sidebanner/Sidebanner';
import { withIntl, IntlProps, getTranslation } from 'app/intl/intl';
import Breadcrumbs from 'app/components/breadcrumbs/Breadcrumbs';
import BEMHelper from 'app/utils/bem';
import classnames from 'classnames';
import TypografiBase from 'nav-frontend-typografi';
import PanelMedIllustrasjon from 'app/components/panel-med-illustrasjon/PanelMedIllustrasjon';
import { CheckboksPanelGruppe } from 'nav-frontend-skjema';
import StrukturertTekst from 'app/components/strukturert-tekst/StrukturertTekst';
import { getContent } from 'app/utils/getContent';
import Lønnskalkulator from './lønnskalkulator/Lønnskalkulator';
import Resultat from './resultat/Resultat';
import { Periode } from 'app/utils/beregningUtils';
import Veileder from 'app/components/veileder/Veileder';
import './kalkulator.less';

const infosiderCls = BEMHelper('infosider');
const cls = BEMHelper('kalkulator');

type Situasjon = 'arbeidstaker' | 'frilanser' | 'selvstendig_næringsdrivende';

const muligeSituasjoner: Situasjon[] = ['arbeidstaker', 'frilanser', 'selvstendig_næringsdrivende'];
const pengerIcon = require('../../assets/icons/penger.svg').default;
const mindrePengerIcon = require('../../assets/icons/mindre-penger.svg').default;

interface State {
    kalkulatorversjon?: Periode;
    valgteSituasjoner: Situasjon[];
    snittlønnPerMåned?: number;
    årslønnIFjor?: number;
    forStortAvvik: boolean;
}

class Planlegger extends React.Component<IntlProps, State> {
    constructor(props: IntlProps) {
        super(props);
        this.state = {
            valgteSituasjoner: [],
            forStortAvvik: false
        };
    }

    onSituasjonToggle = (event: React.SyntheticEvent<EventTarget>, situasjon: Situasjon) => {
        const valgteSituasjoner = this.state.valgteSituasjoner.includes(situasjon)
            ? this.state.valgteSituasjoner.filter((vs) => vs !== situasjon)
            : [...this.state.valgteSituasjoner, situasjon];

        const kalkulatorversjon =
            valgteSituasjoner.length === 0
                ? undefined
                : valgteSituasjoner.includes('selvstendig_næringsdrivende')
                    ? 'år'
                    : 'måned';

        this.setState({
            valgteSituasjoner,
            kalkulatorversjon
        });
    };

    onFieldsChange = ({
        monthlyAverage,
        forStortAvvik
    }: {
        monthlyAverage?: number;
        forStortAvvik: boolean;
    }) => {
        this.setState({
            snittlønnPerMåned: monthlyAverage,
            forStortAvvik
        });
    };

    render = () => {
        const { lang } = this.props;

        const checkboxes = muligeSituasjoner.map((situasjon) => ({
            checked: this.state.valgteSituasjoner.includes(situasjon),
            label: getTranslation(`kalkulator.situasjon.${situasjon}`),
            id: situasjon,
            value: situasjon
        }));

        return (
            <div className={classnames(cls.className, infosiderCls.className)}>
                <Sidebanner text={getTranslation('kalkulator.bannertekst', lang)} />
                <div className={infosiderCls.element('body')}>
                    <main className={infosiderCls.element('content')}>
                        <Breadcrumbs path={location.pathname} />

                        <PanelMedIllustrasjon
                            maskSvg={true}
                            title={getTranslation('kalkulator.tittel')}
                            svg={pengerIcon}>
                            <StrukturertTekst tekst={getContent('kalkulator/kalkulator', lang)} />

                            <TypografiBase type="undertittel">
                                {getTranslation('kalkulator.valg.tittel', lang)}
                            </TypografiBase>
                            <CheckboksPanelGruppe
                                legend={getTranslation('kalkulator.valg.ingress', lang)}
                                checkboxes={checkboxes}
                                onChange={this.onSituasjonToggle}
                            />

                            {this.state.kalkulatorversjon && (
                                <div className={cls.element('flexDownwards')}>
                                    <Lønnskalkulator
                                        lang={this.props.lang}
                                        periode={this.state.kalkulatorversjon}
                                        onChange={this.onFieldsChange}
                                    />

                                    {this.state.snittlønnPerMåned && (
                                        <div className={cls.element('flexDownwards')}>
                                            <TypografiBase type="undertittel">
                                                {getTranslation('kalkulator.resultat.tittel', lang)}
                                            </TypografiBase>

                                            <output className={cls.element('resultater')}>
                                                <Resultat
                                                    cls={cls}
                                                    lang={this.props.lang}
                                                    percentage={100}
                                                    icon={pengerIcon}
                                                    monthlyWage={this.state.snittlønnPerMåned}
                                                />
                                                <Resultat
                                                    cls={cls}
                                                    lang={this.props.lang}
                                                    percentage={80}
                                                    icon={mindrePengerIcon}
                                                    monthlyWage={this.state.snittlønnPerMåned}
                                                />
                                            </output>

                                            {this.state.forStortAvvik && (
                                                <Veileder
                                                    fargetema="normal"
                                                    ansikt="glad"
                                                    kompakt={true}>
                                                    <TypografiBase
                                                        className={cls.element('avviksbeskrivelse')}
                                                        type="normaltekst">
                                                        {getTranslation(
                                                            'kalkulator.for_stort_avvik_beskrivelse',
                                                            lang
                                                        )}
                                                    </TypografiBase>
                                                </Veileder>
                                            )}
                                        </div>
                                    )}
                                </div>
                            )}
                        </PanelMedIllustrasjon>
                    </main>
                </div>
            </div>
        );
    };
}

export default withIntl(Planlegger);
