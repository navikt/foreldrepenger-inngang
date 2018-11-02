import * as React from 'react';
import Sidebanner from 'app/components/sidebanner/Sidebanner';
import { withIntl, IntlProps, getTranslation, Language } from 'app/intl/intl';
import Breadcrumbs from 'app/components/breadcrumbs/Breadcrumbs';
import BEMHelper from 'app/utils/bem';
import classnames from 'classnames';
import TypografiBase from 'nav-frontend-typografi';
import PanelMedIllustrasjon from 'app/components/panel-med-illustrasjon/PanelMedIllustrasjon';
import { CheckboksPanelGruppe } from 'nav-frontend-skjema';
import StrukturertTekst from 'app/components/strukturert-tekst/StrukturertTekst';
import { getContent } from 'app/utils/getContent';
import Lønnskalkulator, { Periode } from './Lønnskalkulator';
import './kalkulator.less';
import { getDailyPayment, GRUNNBELØPET } from 'app/utils/beregningUtils';
import CustomSVGFromSprite from 'app/utils/CustomSVG';

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
}

class Planlegger extends React.Component<IntlProps, State> {
    constructor(props: IntlProps) {
        super(props);
        this.state = {
            valgteSituasjoner: []
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

    onSnittlønnChange = (monthlyWage?: number) => {
        this.setState({
            snittlønnPerMåned: monthlyWage
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

        const fieldsHeader = `${getTranslation('kalkulator.skriv_inn_lønn', lang)} ${
            this.state.kalkulatorversjon === 'måned'
                ? getTranslation('månedene', lang)
                : getTranslation('årene', lang)
        }?`;

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
                                    <TypografiBase type="undertittel">{fieldsHeader}</TypografiBase>
                                    <TypografiBase type="normaltekst">
                                        {getTranslation('kalkulator.skriv_inn_lønn_ingress', lang)}
                                    </TypografiBase>
                                    <Lønnskalkulator
                                        lang={this.props.lang}
                                        periode={this.state.kalkulatorversjon}
                                        onChange={this.onSnittlønnChange}
                                    />

                                    {this.state.snittlønnPerMåned && (
                                        <div className={cls.element('flexDownwards')}>
                                            <TypografiBase type="undertittel">
                                                {getTranslation('kalkulator.resultat.tittel', lang)}
                                            </TypografiBase>

                                            <output className={cls.element('resultater')}>
                                                <Resultat
                                                    lang={this.props.lang}
                                                    percentage={100}
                                                    icon={pengerIcon}
                                                    monthlyWage={this.state.snittlønnPerMåned}
                                                />
                                                <Resultat
                                                    lang={this.props.lang}
                                                    percentage={80}
                                                    icon={mindrePengerIcon}
                                                    monthlyWage={this.state.snittlønnPerMåned}
                                                />
                                            </output>
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

const Resultat = ({
    percentage,
    monthlyWage,
    icon,
    lang
}: {
    percentage: number;
    monthlyWage: number;
    icon: any;
    lang: Language;
}) => {
    const annualMax = 6 * GRUNNBELØPET;
    const monthlyMax = annualMax / 12;

    const decimal: number = percentage / 100;
    const monthlyPayment = Math.min(monthlyWage * decimal, monthlyMax * decimal);
    const dailyPayment = getDailyPayment(monthlyPayment);

    const monthlyPaymentFormatted = Math.round(monthlyPayment).toLocaleString(lang);
    const dailyPaymentFormatted = Math.round(dailyPayment).toLocaleString(lang);

    return (
        <output className={cls.element('resultat')}>
            <TypografiBase type="element">{`${percentage} ${getTranslation(
                'kalkulator.resultat.undertittel'
            )}`}</TypografiBase>

            <div className={cls.element('divider')} />
            <TypografiBase type="normaltekst">
                {getTranslation('kalkulator.resultat.gjennomsnitt_per_måned')}
            </TypografiBase>

            <TypografiBase type="undertittel">{`${monthlyPaymentFormatted} kr`}</TypografiBase>
            <TypografiBase className={cls.element('topMargin')} type="normaltekst">
                {getTranslation('kalkulator.resultat.dagsats')}
            </TypografiBase>
            <TypografiBase type="undertittel">{`${dailyPaymentFormatted} kr`}</TypografiBase>
            <CustomSVGFromSprite className={cls.element('resultatIcon')} iconRef={icon} size={72} />
        </output>
    );
};

export default withIntl(Planlegger);
