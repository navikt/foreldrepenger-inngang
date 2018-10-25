import * as React from 'react';
import Sidebanner from 'app/components/sidebanner/Sidebanner';
import { withIntl, IntlProps, getTranslation, Language } from 'app/intl/intl';
import Breadcrumbs from 'app/components/breadcrumbs/Breadcrumbs';
import BEMHelper from 'app/utils/bem';
import { Panel } from 'nav-frontend-paneler';
import classnames from 'classnames';
import './beregning.less';
import StrukturertTekst from 'app/components/strukturert-tekst/StrukturertTekst';
import { getContent } from 'app/utils/getContent';
import TypografiBase from 'nav-frontend-typografi';
import StorToggle from 'app/components/stor-toggle/StorToggle';
import { forStortAvvik } from 'app/utils/beregningUtils';

const infosiderCls = BEMHelper('infosider');
const cls = BEMHelper('beregning');

const muligeSituasjoner = ['arbeidstaker', 'frilanser', 'selvstendig_næringsdrivende'];

interface State {
    valgtSituasjon: number;
    snittlønnPerMåned: number;
}

class Planlegger extends React.Component<IntlProps, State> {
    constructor(props: IntlProps) {
        super(props);
        this.state = {
            valgtSituasjon: 0,
            snittlønnPerMåned: 0
        };
    }

    onSituasjonToggle = (index: number) => {
        this.setState({
            valgtSituasjon: index
        });
    };

    onSnittlønnChange = (monthlyWage: number) => {
        this.setState({
            snittlønnPerMåned: monthlyWage
        });
    };

    render = () => {
        const { lang } = this.props;

        return (
            <div className={classnames(cls.className, infosiderCls.className)}>
                <Sidebanner text={getTranslation('beregning.bannertekst', lang)} />
                <div className={infosiderCls.element('body')}>
                    <main className={infosiderCls.element('content')}>
                        <Breadcrumbs path={location.pathname} />
                        <Panel className={cls.element('headerPanel')}>
                            <div className={cls.element('headerIcon')}>kr</div>
                            <StrukturertTekst tekst={getContent('beregning/beregning', lang)} />
                        </Panel>
                        <VelgDinSituasjon
                            situasjoner={muligeSituasjoner}
                            selected={this.state.valgtSituasjon}
                            onSelect={this.onSituasjonToggle}
                            lang={lang}
                        />
                        <div className={cls.element('flexDownwards')}>
                            <TypografiBase type="undertittel">
                                {getTranslation('beregning.skriv_inn_lønn', lang)}
                            </TypografiBase>
                            <Lønnskalkulator
                                periode={this.state.valgtSituasjon === 2 ? 'år' : 'måned'}
                                onChange={this.onSnittlønnChange}
                            />
                        </div>
                    </main>
                </div>
            </div>
        );
    };
}

const VelgDinSituasjon = ({
    situasjoner,
    selected,
    onSelect,
    lang
}: {
    situasjoner: string[];
    selected: number;
    onSelect: (index: number) => void;
    lang: Language;
}) => (
    <div className={cls.element('flexDownwards')}>
        <TypografiBase type="undertittel">
            {getTranslation('beregning.velg_din_situasjon', lang)}
        </TypografiBase>
        <div role="radiogroup" className={cls.element('situasjonsvalg')}>
            {situasjoner.map((situasjon, index) => (
                <StorToggle
                    key={situasjon}
                    isToggled={selected === index}
                    label={getTranslation(`beregning.situasjon.${situasjon}`)}
                    onToggle={() => onSelect(index)}
                />
            ))}
        </div>
    </div>
);

interface LønnskalkulatorProps {
    periode: 'måned' | 'år';
    onChange: (monthlyAverage: number) => void;
}

interface LønnskalkulatorState {
    fieldValues: number[];
    forStortAvvik: boolean;
}

const defaultMonthlyWage = 25000;
const defaultAnnualWage = 250000;

class Lønnskalkulator extends React.Component<LønnskalkulatorProps, LønnskalkulatorState> {
    constructor(props: LønnskalkulatorProps) {
        super(props);
        this.state = {
            forStortAvvik: false,
            fieldValues:
                this.props.periode === 'måned'
                    ? [defaultMonthlyWage, defaultMonthlyWage, defaultMonthlyWage]
                    : [defaultAnnualWage, defaultAnnualWage, defaultAnnualWage]
        };
    }

    onFieldChange = (index: number, newValue: number) => {
        const newFieldValues = [...this.state.fieldValues];
        newFieldValues[index] = newValue;

        this.setState({
            fieldValues: newFieldValues,
            forStortAvvik: forStortAvvik(newFieldValues)
        });
    };

    render = () => {
        return <div className={cls.element('lønnskalkulator')} />;
    };
}

export default withIntl(Planlegger);
