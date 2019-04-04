import React from 'react';
import BEMHelper from '../../../../utils/bem';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import TypografiBase from 'nav-frontend-typografi';
import Innhold, { getSource } from 'app/utils/innhold/Innhold';
import { RadioPanel, Input } from 'nav-frontend-skjema';
import Tabs from 'nav-frontend-tabs';
import { FlexibleSvg } from '../../../../utils/CustomSVG';
import { CSSTransition } from 'react-transition-group';
import KnappBase from 'nav-frontend-knapper';
import UtvidetInformasjon from '../../../kalkulator/utvidetinformasjon/UtvidetInformasjon';
import DuHarRett from './komponenter/DuHarRett';
import ResultatPunkt from './komponenter/ResultatPunkt';
import Logo from './komponenter/Logo';
import { getEnHalvG } from '../../../../utils/beregningUtils';
import 'core-js';
import 'raf/polyfill';
import getTranslation from 'app/utils/i18nUtils';
import { Page } from 'app/types/Page';
import Environment from '../../../../Environment';
import EngangsstonadKnapp from './komponenter/EngangsstonadKnapp';
import './valg.less';
import MainKnapp from './komponenter/MainKnapp';

const cls = BEMHelper('valg');
const inputCls = BEMHelper('input');

const sprmalMor = [
    'veiviser.valg.spørsmål.mor.en',
    'veiviser.valg.spørsmål.mor.to',
    'veiviser.valg.spørsmål.mor.tre',
    'veiviser.valg.spørsmål.mor.fire',
    'veiviser.valg.spørsmål.mor.fem',
    'veiviser.valg.spørsmål.mor.seks'
];

const sprmalFarMedmor = [
    'veiviser.valg.spørsmål.far.en',
    'veiviser.valg.spørsmål.far.to',
    'veiviser.valg.spørsmål.far.tre',
    'veiviser.valg.spørsmål.far.fire',
    'veiviser.valg.spørsmål.far.fem',
    'veiviser.valg.spørsmål.far.seks'
];

const svarMor = [
    ['veiviser.valg.svar.mor.en.ja', 'veiviser.valg.svar.mor.en.nei'],
    ['veiviser.valg.svar.mor.to.ja', 'veiviser.valg.svar.mor.to.nei'],
    ['veiviser.valg.svar.mor.tre.ja', 'veiviser.valg.svar.mor.tre.nei'],
    ['veiviser.valg.svar.mor.fire.ja', 'veiviser.valg.svar.mor.fire.nei'],
    ['veiviser.valg.svar.mor.fem.ja', 'veiviser.valg.svar.mor.fem.nei'],
    ['veiviser.valg.svar.mor.seks.ja', 'veiviser.valg.svar.mor.seks.nei']
];

const svarFarMedmor = [
    ['veiviser.valg.svar.far.en.ja', 'veiviser.valg.svar.far.en.nei'],
    ['veiviser.valg.svar.far.to.ja', 'veiviser.valg.svar.far.to.nei'],
    ['veiviser.valg.svar.far.tre.ja', 'veiviser.valg.svar.far.tre.nei'],
    ['veiviser.valg.svar.far.fire.ja', 'veiviser.valg.svar.far.fire.nei'],
    ['veiviser.valg.svar.far.fem.ja', 'veiviser.valg.svar.far.fem.nei'],
    ['veiviser.valg.svar.far.seks.ja', 'veiviser.valg.svar.far.seks.nei']
];

interface TabContent {
    faner: any[];
    aktivereResultatLenker: () => void;
    cancelResultatLenker: () => void;
}

interface State {
    parentToggled: boolean[]; // holder state på parent-tabs.
    items: object[];
    valg: object[];
    checkbox: object[];
    teller: number;
    antallRader: number;
    numberofCheckBoxz: number;
    result: object[];
    inputFade: boolean;
    inputVal: string;
    loadingSpinner: boolean;
    buttonCls: string;
    inntektCls: string;
    resultFade: boolean;
}

type Props = InjectedIntlProps & TabContent;

class Valg extends React.Component<Props, State> {
    static goToSection(id: string): any {
        const target = document.querySelector(id);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'end' });
        }
    }

    static resultatPunkt(lang: any, txt: string, tegn: string) {
        return <ResultatPunkt translationString={txt} tegn={tegn} />;
    }

    toggled = null;
    fade = false;
    belop = 'veiviser.skrivInn.belop';

    constructor(props: Props) {
        super(props);
        this.state = {
            parentToggled: [true, true, true], // hvilke kort som er togglet
            checkbox: [
                // state for hvilke checkbox som er valg
                [false, false],
                [false, false],
                [false, false],
                [false, false],
                [false, false],
                [false, false]
            ],
            valg: [], // valg : listen som blir mappet i render
            items: [], // radiopanel list som blir mappet inne i valg list
            teller: 0, // teller for rad i checkbox
            antallRader: 0, // teller for antall rader i valg
            numberofCheckBoxz: 2, // antall checkbox som skal genereres pr rad,
            result: [],
            inputFade: true,
            inputVal: '',
            loadingSpinner: false,
            buttonCls: '',
            inntektCls: '',
            resultFade: true
        };
    }

    updateToggle = (e: any, nr: any): void => {
        if (this.toggled !== nr) {
            // hvis annen tab valgt
            this.toggled = nr;
            let valgBytte = [...this.state.valg];
            valgBytte = [];
            const tmpTabs = [...this.state.parentToggled];
            const noneChecked = [...this.state.checkbox];
            for (let i = 0; i < 3; i++) {
                i === nr ? (tmpTabs[i] = false) : (tmpTabs[i] = true);
            }
            for (let j = 0; j < this.state.checkbox.length; j++) {
                for (let k = 0; k < 2; k++) {
                    noneChecked[j][k] = false;
                }
            }
            this.belop = 'veiviser.skrivInn.belop';
            this.props.cancelResultatLenker();
            this.setState(
                // oppdaterer state /m nye verdier
                {
                    parentToggled: tmpTabs,
                    teller: 0,
                    valg: valgBytte,
                    checkbox: noneChecked,
                    antallRader: 0,
                    result: [],
                    inntektCls: 'item--gone',
                    resultFade: true
                },
                () =>
                    this.insertBoxes(
                        this.state.numberofCheckBoxz,
                        this.state.teller,
                        valgBytte,
                        this.state.antallRader,
                        this.getDropdown(
                            'veiviser.valg.hjelpetekst.utbetalinger.nav',
                            'veiviser.valg.hjelpetekst.lukk',
                            'veiviser/infobox/utbetalinger-fra-nav'
                        )
                    )
            );
        }
    };

    initItem(
        valgListe: object[],
        input: number,
        newItem: object,
        radNummer: number,
        ischeckbox: boolean,
        dropdownContent?: object
    ) {
        let list;
        let content;
        dropdownContent ? (content = dropdownContent) : (content = <div />);

        if (!this.state.parentToggled[0]) {
            list = valgListe;
            list.push({
                nr: input,
                rad: radNummer,
                con: content,
                checkbox: ischeckbox,
                sprmal: getTranslation(sprmalMor[input], this.props.intl),
                svar1: getTranslation(svarMor[input][0], this.props.intl),
                svar2: getTranslation(svarMor[input][1], this.props.intl),
                obj: newItem
            });
        } else {
            list = valgListe;
            list.push({
                nr: input,
                rad: radNummer,
                con: content,
                checkbox: ischeckbox,
                sprmal: getTranslation(sprmalFarMedmor[input], this.props.intl),
                svar1: getTranslation(svarFarMedmor[input][0], this.props.intl),
                svar2: getTranslation(svarFarMedmor[input][1], this.props.intl),
                obj: newItem
            });
        }
        this.setState({ valg: list });
    }
    initInputField(
        valgListe: object[],
        input: number,
        radNummer: number,
        ischeckbox: boolean,
        dropdown: object
    ) {
        let list;
        let content;
        list = valgListe;
        this.belop = 'veiviser.skrivInn.belop';
        dropdown ? (content = dropdown) : (content = <div />);
        list.push({
            nr: input,
            rad: radNummer,
            con: content,
            checkbox: ischeckbox,
            sprmal: getTranslation(sprmalMor[input], this.props.intl)
        });
        this.setState({ valg: list, inntektCls: 'item--gone' });
    }

    getDropdown(aapneLabel: string, lukeLabel: string, jsonContentPath: string) {
        return (
            <div className={cls.element('dropdown')}>
                <UtvidetInformasjon
                    apneLabel={getTranslation(aapneLabel, this.props.intl)}
                    lukkLabel={getTranslation(lukeLabel, this.props.intl)}>
                    <Innhold source={getSource(jsonContentPath, this.props.intl)} />
                </UtvidetInformasjon>
            </div>
        );
    }

    insertInputVal = (check: boolean, radNiva: number, checkBoxNiva: number) => (e: any) => {
        e.preventDefault();
        if (!check) {
            const initValue = e.target.value;
            const tmpItems = [...this.state.valg];
            const checked = [...this.state.checkbox];
            tmpItems.splice(radNiva + 1);
            for (let i = checkBoxNiva; i < this.state.checkbox.length; i++) {
                for (let j = 0; j < 2; j++) {
                    checked[i][j] = false;
                }
            }
            this.props.cancelResultatLenker();
            this.setState({
                inputVal: initValue,
                buttonCls: '',
                inntektCls: '',
                valg: tmpItems,
                checkbox: checked,
                result: []
            });
        } else {
            const initValue = e.target.value;
            this.setState({ inputVal: initValue, buttonCls: '', inntektCls: '' });
        }
    };

    checkInputValue = (checkboksNiva: number, radnummer: number) => (e: any) => {
        e.preventDefault();
        this.setState({ loadingSpinner: true });
        setTimeout(() => {
            const inntekt = 12 * parseInt(this.state.inputVal, 10);
            inntekt >= getEnHalvG()
                ? this.checkRow(checkboksNiva, 0, radnummer)
                : this.checkRow(checkboksNiva, 1, radnummer);
            this.setState({
                loadingSpinner: false,
                buttonCls: 'item--gone',
                inntektCls: 'item-appear'
            });
        }, 750);
    };

    insertBoxes(
        numBox: number,
        checkBoxNivaa: number,
        nyttValg: object[],
        radNummer: number,
        dropdown?: object
    ) {
        const newItem = [];
        let value: string;
        for (let i = 0; i < numBox; i++) {
            value = !this.state.parentToggled[0]
                ? svarMor[this.state.teller][i]
                : svarFarMedmor[this.state.teller][i];
            newItem[i] = {
                value,
                valgIndex: this.state.teller,
                name: getTranslation(value, this.props.intl),
                label: getTranslation(value, this.props.intl),
                onChange: () => this.checkRow(checkBoxNivaa, i, radNummer)
            };
        }
        this.initItem(nyttValg, this.state.teller, newItem, radNummer, true, dropdown);
    }

    insertResultat(logo: object, overskrift: string, checked: object[], knappType: object) {
        const sjekkPunkter = [];
        let taMedAndrePunkt = false;
        if (checked[2][0]) {
            taMedAndrePunkt = true;
            sjekkPunkter.push(
                Valg.resultatPunkt(
                    this.props.intl,
                    'veiviser.valg.resultat.punkt.forste.godkjent',
                    'godkjenttegn'
                )
            );
        } else {
            sjekkPunkter.push(
                Valg.resultatPunkt(
                    this.props.intl,
                    'veiviser.valg.resultat.punkt.forste.underkjent',
                    'varseltegn'
                )
            );
        }
        if (taMedAndrePunkt) {
            if (checked[3][0]) {
                sjekkPunkter.push(
                    Valg.resultatPunkt(
                        this.props.intl,
                        'veiviser.valg.resultat.punkt.andre.godkjent',
                        'godkjenttegn'
                    )
                );
            } else {
                sjekkPunkter.push(
                    Valg.resultatPunkt(
                        this.props.intl,
                        'veiviser.valg.resultat.punkt.andre.underkjent',
                        'varseltegn'
                    )
                );
            }
        } else {
            sjekkPunkter.push(<div />);
        }
        if (checked[4][0] || checked[5][0]) {
            sjekkPunkter.push(
                Valg.resultatPunkt(
                    this.props.intl,
                    'veiviser.valg.resultat.punkt.tredje.godkjent',
                    'godkjenttegn'
                )
            );
        } else {
            sjekkPunkter.push(
                Valg.resultatPunkt(
                    this.props.intl,
                    'veiviser.valg.resultat.punkt.tredje.underkjent',
                    'varseltegn'
                )
            );
        }
        const res = [];
        res.push(
            <DuHarRett
                minLogo={logo}
                overskrift={overskrift}
                punkter={sjekkPunkter}
                knapp={knappType}
            />
        );
        if (checked[2][0] && checked[3][0] && (checked[4][0] || checked[5][0])) {
            this.props.aktivereResultatLenker();
        }
        this.setState({ result: res }, () =>
            setTimeout(() => {
                Valg.goToSection('#mainSokKnapp');
                setTimeout(() => this.setState({ resultFade: false }), 2000);
            }, 500)
        );
    }

    checkRow(checkBoxNiva: number, svar: number, radNiva: number) {
        const tmpItems = [...this.state.valg];
        const checked = [...this.state.checkbox];
        if (this.state.antallRader !== radNiva) {
            // this.belop = "tast inn beløpet i kr";
            tmpItems.splice(radNiva + 1);
            for (let i = checkBoxNiva; i < this.state.checkbox.length; i++) {
                for (let j = 0; j < 2; j++) {
                    checked[i][j] = false;
                }
            }
            this.setState({ valg: tmpItems, checkbox: checked }, () =>
                this.checkResult(checkBoxNiva, svar, radNiva)
            );
        } else {
            this.checkResult(checkBoxNiva, svar, radNiva);
        }
    }

    checkResult(checkBoxNiva: number, svar: number, radNiva: number) {
        if (this.state.result.length !== 0) {
            this.props.cancelResultatLenker();
            this.setState({ result: [], resultFade: true }, () =>
                this.appendRow(checkBoxNiva, svar, radNiva)
            );
        } else {
            this.appendRow(checkBoxNiva, svar, radNiva);
        }
    }

    appendRow(checkBoxNiva: number, svar: number, radNiva: number) {
        // radNivå er rad-nr && svar er ja (0) / nei (1)
        const checked = [...this.state.checkbox];
        if (checkBoxNiva === 0) {
            // nivå 1
            if (svar === 0) {
                // svar : ja
                checked[checkBoxNiva][svar] = true;
                radNiva = 1;
                checkBoxNiva = 2;
                this.setState(
                    { antallRader: radNiva, teller: checkBoxNiva, checkbox: checked, inputVal: '' },
                    () =>
                        this.insertBoxes(
                            this.state.numberofCheckBoxz,
                            this.state.teller,
                            this.state.valg,
                            this.state.antallRader,
                            this.getDropdown(
                                'veiviser.valg.hjelpetekst.hattInntekt',
                                'veiviser.valg.hjelpetekst.lukk',
                                'veiviser/infobox/hvorfor-inntekt'
                            )
                        )
                );
            } else if (svar === 1) {
                // svar : nei
                checked[checkBoxNiva][svar] = true;
                radNiva = 1;
                checkBoxNiva = 1;
                this.setState(
                    { antallRader: radNiva, teller: checkBoxNiva, checkbox: checked },
                    () =>
                        this.insertBoxes(
                            this.state.numberofCheckBoxz,
                            this.state.teller,
                            this.state.valg,
                            this.state.antallRader,
                            this.getDropdown(
                                'veiviser.valg.hjelpetekst.utbetalinger',
                                'veiviser.valg.hjelpetekst.lukk',
                                'veiviser/infobox/andre-inntektskilder'
                            )
                        )
                );
            }
        } else if (checkBoxNiva === 1) {
            // nivå 2
            if (svar === 0) {
                // svar : ja
                checked[checkBoxNiva][svar] = true;
                radNiva = 2;
                checkBoxNiva = 2;
                this.setState(
                    { antallRader: radNiva, teller: checkBoxNiva, checkbox: checked, inputVal: '' },
                    () =>
                        this.insertBoxes(
                            this.state.numberofCheckBoxz,
                            this.state.teller,
                            this.state.valg,
                            this.state.antallRader,
                            this.getDropdown(
                                'veiviser.valg.hjelpetekst.hattInntekt',
                                'veiviser.valg.hjelpetekst.lukk',
                                'veiviser/infobox/hvorfor-inntekt'
                            )
                        )
                );
            } else if (svar === 1) {
                // svar : nei
                checked[checkBoxNiva][svar] = true;
                radNiva = 2;
                checkBoxNiva = 4;
                this.setState(
                    { antallRader: radNiva, teller: checkBoxNiva, checkbox: checked },
                    () =>
                        this.insertBoxes(
                            this.state.numberofCheckBoxz,
                            this.state.teller,
                            this.state.valg,
                            this.state.antallRader,
                            this.getDropdown(
                                'veiviser.valg.hjelpetekst.medlemskap',
                                'veiviser.valg.hjelpetekst.lukk',
                                'veiviser/infobox/til-medlemskap'
                            )
                        )
                );
            }
        } else if (checkBoxNiva === 2) {
            // nivå 3
            if (svar === 0) {
                // svar : ja
                checked[checkBoxNiva][svar] = true;
                checked[0][0] ? (radNiva = 2) : (radNiva = 3);
                checkBoxNiva = 3;
                this.setState(
                    { antallRader: radNiva, teller: checkBoxNiva, checkbox: checked, inputVal: '' },
                    () =>
                        this.initInputField(
                            this.state.valg,
                            this.state.teller,
                            this.state.antallRader,
                            false,
                            this.getDropdown(
                                'veiviser.valg.hjelpetekst.mndInntekt',
                                'veiviser.valg.hjelpetekst.lukk',
                                'veiviser/infobox/til-manedsinntekt'
                            )
                        )
                );
            } else if (svar === 1) {
                // svar : nei
                checked[checkBoxNiva][svar] = true;
                checked[0][0] ? (radNiva = 2) : (radNiva = 3);
                checkBoxNiva = 4;
                this.setState(
                    { antallRader: radNiva, teller: checkBoxNiva, checkbox: checked },
                    () =>
                        this.insertBoxes(
                            this.state.numberofCheckBoxz,
                            this.state.teller,
                            this.state.valg,
                            this.state.antallRader,
                            this.getDropdown(
                                'veiviser.valg.hjelpetekst.medlemskap',
                                'veiviser.valg.hjelpetekst.lukk',
                                'veiviser/infobox/til-medlemskap'
                            )
                        )
                );
            }
        } else if (checkBoxNiva === 3) {
            // nivå 4
            if (svar === 0) {
                // svar : ja
                checked[checkBoxNiva][svar] = true;
                checked[checkBoxNiva][1] = false;
                checked[0][0] ? (radNiva = 3) : (radNiva = 4);
                checkBoxNiva = 4;
                this.setState(
                    { antallRader: radNiva, teller: checkBoxNiva, checkbox: checked },
                    () =>
                        this.insertBoxes(
                            this.state.numberofCheckBoxz,
                            this.state.teller,
                            this.state.valg,
                            this.state.antallRader,
                            this.getDropdown(
                                'veiviser.valg.hjelpetekst.medlemskap',
                                'veiviser.valg.hjelpetekst.lukk',
                                'veiviser/infobox/til-medlemskap'
                            )
                        )
                );
            } else if (svar === 1) {
                // svar : nei
                // hurra du burde søke ES ( set inn func for dette resultat )
                checked[checkBoxNiva][svar] = true;
                checked[checkBoxNiva][0] = false;
                checked[0][0] ? (radNiva = 3) : (radNiva = 4);

                checkBoxNiva = 4;
                this.setState(
                    { antallRader: radNiva, teller: checkBoxNiva, checkbox: checked },
                    () =>
                        this.insertBoxes(
                            this.state.numberofCheckBoxz,
                            this.state.teller,
                            this.state.valg,
                            this.state.antallRader,
                            this.getDropdown(
                                'veiviser.valg.hjelpetekst.medlemskap',
                                'veiviser.valg.hjelpetekst.lukk',
                                'veiviser/infobox/til-medlemskap'
                            )
                        )
                );
            }
        } else if (checkBoxNiva === 4) {
            // nivå 5
            if (svar === 0) {
                // svar : ja
                // inne i denne if betyr at person har medlemskap
                checked[checkBoxNiva][svar] = true;
                checkBoxNiva = 5;
                ++radNiva;
                if (checked[2][0] && checked[3][0]) {
                    // har hatt inntekt / annen inntekt + over 6mnd + over 48 441
                    this.setState(
                        { antallRader: radNiva, teller: checkBoxNiva, checkbox: checked },
                        () =>
                            this.insertResultat(
                                <Logo />,
                                'veiviser.valg.resultat.overskrift.foreldrepenger',
                                checked,

                                <MainKnapp
                                    knappType={'hoved'}
                                    txt={'veiviser.valg.resultat.knapp.foreldrepenger'}
                                    url={Environment.SOK_FORELDREPENGER_URL}
                                />
                            )
                    );
                } else {
                    // mangel på enten inntekt siste 6mnd eller inntekt over 48 441
                    if (!this.state.parentToggled[0]) {
                        this.setState(
                            { antallRader: radNiva, teller: checkBoxNiva, checkbox: checked },
                            () =>
                                this.insertResultat(
                                    <Logo />,
                                    'veiviser.valg.resultat.overskrift.Engangsstonad.mor',
                                    checked,
                                    <EngangsstonadKnapp
                                        knappLeft={
                                            'veiviser.valg.resultat.knapp.engangsstonad.info'
                                        }
                                        knappRight={'veiviser.valg.resultat.knapp.engangsstonad'}
                                        knappLeftStyle={'standard'}
                                        knappRightStyle={'hoved'}
                                        lenkeLeft={Page.OmEngangsstønad}
                                        lenkeRight={'https://engangsstonad.nav.no'}
                                    />
                                )
                        );
                    } else {
                        this.setState(
                            { antallRader: radNiva, teller: checkBoxNiva, checkbox: checked },
                            () =>
                                this.insertResultat(
                                    <Logo />,
                                    'veiviser.valg.resultat.overskrift.Engangsstonad',
                                    checked,
                                    <EngangsstonadKnapp
                                        knappLeft={
                                            'veiviser.valg.resultat.knapp.engangsstonad.info'
                                        }
                                        knappRight={
                                            'veiviser.valg.resultat.knapp.lesOmForeldrepenger'
                                        }
                                        knappRightStyle={'standard'}
                                        knappLeftStyle={'standard'}
                                        lenkeLeft={Page.OmEngangsstønad}
                                        lenkeRight={Page.OmForeldrepenger}
                                        buttonHeadertxtLeft={
                                            <TypografiBase type={'normaltekst'}>
                                                {getTranslation(
                                                    'veiviser.valg.resultat.engangsstonad.headertxt',
                                                    this.props.intl
                                                )}{' '}
                                            </TypografiBase>
                                        }
                                        buttonHeadertxtRight={
                                            <TypografiBase type={'normaltekst'}>
                                                {getTranslation(
                                                    'veiviser.valg.resultat.foreldrepenger.headertxt',
                                                    this.props.intl
                                                )}{' '}
                                            </TypografiBase>
                                        }
                                    />
                                )
                        );
                    }
                }
            } else if (svar === 1) {
                // svar : nei
                checked[checkBoxNiva][svar] = true;
                ++radNiva;
                checkBoxNiva = 5;
                this.setState(
                    { antallRader: radNiva, teller: checkBoxNiva, checkbox: checked },
                    () =>
                        this.insertBoxes(
                            this.state.numberofCheckBoxz,
                            this.state.teller,
                            this.state.valg,
                            this.state.antallRader,
                            this.getDropdown(
                                'veiviser.valg.hjelpetekst.medlem.folketrygden',
                                'veiviser.valg.hjelpetekst.lukk',
                                'veiviser/infobox/medlemskap-folketrygden'
                            )
                        )
                );
            }
        } else if (checkBoxNiva === 5) {
            // nivå 6
            if (svar === 0) {
                // inne i denne if betyr at person har medlemskap
                checked[checkBoxNiva][svar] = true;
                ++radNiva;
                checkBoxNiva = 5;
                if (checked[2][0] && checked[3][0]) {
                    // har hatt inntekt / annen inntekt + over 6mnd + over 48 441
                    this.setState(
                        { antallRader: radNiva, teller: checkBoxNiva, checkbox: checked },
                        () =>
                            this.insertResultat(
                                <Logo />,
                                'veiviser.valg.resultat.overskrift.foreldrepenger',
                                checked,
                                <MainKnapp
                                    knappType={'hoved'}
                                    txt={'veiviser.valg.resultat.knapp.foreldrepenger'}
                                    url={'/hva-soker-du/foreldrepenger'}
                                />
                            )
                    );
                } else {
                    // mangel på enten inntekt siste 6mnd eller inntekt over 48 441
                    if (!this.state.parentToggled[0]) {
                        this.setState(
                            { antallRader: radNiva, teller: checkBoxNiva, checkbox: checked },
                            () =>
                                this.insertResultat(
                                    <Logo />,
                                    'veiviser.valg.resultat.overskrift.Engangsstonad.mor',
                                    checked,
                                    <EngangsstonadKnapp
                                        knappLeft={
                                            'veiviser.valg.resultat.knapp.engangsstonad.info'
                                        }
                                        knappRight={'veiviser.valg.resultat.knapp.engangsstonad'}
                                        knappLeftStyle={'standard'}
                                        knappRightStyle={'hoved'}
                                        lenkeLeft={'/om-engangsstonad'}
                                        lenkeRight={'https://engangsstonad.nav.no'}
                                    />
                                )
                        );
                    } else {
                        this.setState(
                            { antallRader: radNiva, teller: checkBoxNiva, checkbox: checked },
                            () =>
                                this.insertResultat(
                                    <Logo />,
                                    'veiviser.valg.resultat.overskrift.Engangsstonad',
                                    checked,
                                    <EngangsstonadKnapp
                                        knappLeft={
                                            'veiviser.valg.resultat.knapp.engangsstonad.info'
                                        }
                                        knappRight={
                                            'veiviser.valg.resultat.knapp.lesOmForeldrepenger'
                                        }
                                        knappRightStyle={'standard'}
                                        knappLeftStyle={'standard'}
                                        lenkeLeft={Page.OmEngangsstønad}
                                        lenkeRight={Page.OmForeldrepenger}
                                        buttonHeadertxtLeft={
                                            <TypografiBase type={'normaltekst'}>
                                                {getTranslation(
                                                    'veiviser.valg.resultat.engangsstonad.headertxt',
                                                    this.props.intl
                                                )}{' '}
                                            </TypografiBase>
                                        }
                                        buttonHeadertxtRight={
                                            <TypografiBase type={'normaltekst'}>
                                                {getTranslation(
                                                    'veiviser.valg.resultat.foreldrepenger.headertxt',
                                                    this.props.intl
                                                )}{' '}
                                            </TypografiBase>
                                        }
                                    />
                                ) // SETT INN
                        );
                    }
                }
            } else if (svar === 1) {
                // inne i denne if betyr at person IKKE har medlemskap av folketrygden
                checked[checkBoxNiva][svar] = true;
                ++radNiva;
                checkBoxNiva = 5;
                this.setState(
                    { antallRader: radNiva, teller: checkBoxNiva, checkbox: checked },
                    () =>
                        this.insertResultat(
                            <div />,
                            'veiviser.valg.resultat.overskrift.foreldrepenger.ikkeRett',
                            checked,
                            <MainKnapp
                                url={Page.OmForeldrepenger}
                                txt={'veiviser.valg.resultat.knapp.ikkerett.info'}
                                knappType={'standard'}
                            />
                        )
                );
            }
        }
    }

    render = () => (
        <div className={cls.className}>
            <div className={cls.element('ingress')}>
                <Innhold source={getSource('veiviser/introduksjon', this.props.intl)} />
            </div>
            <div className={cls.element('forelder')}>
                <div className={cls.element('ingress-knapp')}>
                    <TypografiBase type="undertittel">
                        {getTranslation('veiviser.ingress.knapper', this.props.intl)}
                    </TypografiBase>
                </div>
                <div className={cls.element('knapper')}>
                    <Tabs
                        kompakt={true}
                        defaultAktiv={-1}
                        tabs={this.props.faner.map((fane, index) => ({
                            label: this.updateToggle[index],
                            children: (
                                <div className={cls.element('valg-fane')}>
                                    <div className={cls.element('valg-fane-bakgrunn')} />
                                    <div className={cls.element('valg-fane-bilde')}>
                                        <FlexibleSvg
                                            iconRef={
                                                require(`../../../../assets/foreldre/${
                                                    fane.icon
                                                }.svg`).default
                                            }
                                            height={75}
                                            width={50}
                                        />
                                    </div>
                                    {getTranslation(fane.label, this.props.intl)}
                                </div>
                            ),
                            onClick: this.updateToggle[index]
                        }))}
                        onChange={this.updateToggle}
                    />
                </div>
            </div>
            <div className={cls.element('kort')}>
                {this.state.valg.map((valg: any) => {
                    this.state.antallRader === valg.rad ? (this.fade = true) : (this.fade = false);
                    if (valg.checkbox) {
                        return (
                            <div key={valg.nr} className={cls.element('kort-rad ' + valg.nr)}>
                                <TypografiBase type="undertittel">{valg.sprmal}</TypografiBase>
                                {valg.con}
                                <div className={cls.element('valg-checkboxes ')}>
                                    {valg.obj.map((item: any, index: number) => {
                                        return (
                                            <CSSTransition
                                                key={item.value}
                                                appear={true}
                                                classNames="fade"
                                                in={this.fade}
                                                timeout={1000}>
                                                <RadioPanel
                                                    checked={
                                                        this.state.checkbox[item.valgIndex][index]
                                                    }
                                                    name={item.value}
                                                    onChange={item.onChange}
                                                    label={item.label} // item.label
                                                    value={item.value}
                                                />
                                            </CSSTransition>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    } else {
                        return (
                            <CSSTransition
                                key={valg.nr}
                                appear={true}
                                classNames="fade"
                                in={this.fade}
                                timeout={1000}>
                                <div className={inputCls.element('felt')}>
                                    <TypografiBase type={'undertittel'}>
                                        {valg.sprmal}
                                    </TypografiBase>
                                    {valg.con}
                                    <div className={inputCls.element('rad')}>
                                        <div className={inputCls.element('radKol-1')}>
                                            <TypografiBase type={'element'}>
                                                {getTranslation(
                                                    'veiviser.valg.inntekt.subHeader',
                                                    this.props.intl
                                                )}
                                            </TypografiBase>
                                            <Input
                                                className={inputCls.element('felt--komponent')}
                                                label={''}
                                                min={0}
                                                step={1000}
                                                type="number"
                                                value={this.state.inputVal}
                                                onChange={this.insertInputVal(
                                                    this.fade,
                                                    valg.rad,
                                                    valg.nr
                                                )}
                                                placeholder={getTranslation(
                                                    this.belop,
                                                    this.props.intl
                                                )}
                                            />
                                        </div>
                                        <div className={inputCls.element('radKnapp ')}>
                                            <KnappBase
                                                className={this.state.buttonCls}
                                                type="flat"
                                                spinner={this.state.loadingSpinner}
                                                onClick={this.checkInputValue(valg.nr, valg.rad)}>
                                                {getTranslation(
                                                    'veiviser.valg.beregn.knapp',
                                                    this.props.intl
                                                )}
                                            </KnappBase>
                                            <div
                                                className={cls.element(
                                                    'aarsInntekt ' + this.state.inntektCls
                                                )}>
                                                <div>
                                                    <TypografiBase type={'element'}>
                                                        {getTranslation(
                                                            'veiviser.valg.beregnet.aarsinntekt',
                                                            this.props.intl
                                                        )}
                                                    </TypografiBase>
                                                </div>
                                                <div className={cls.element('aarsInntektSum')}>
                                                    {12 * parseInt(this.state.inputVal, 10)
                                                        ? (
                                                              12 * parseInt(this.state.inputVal, 10)
                                                          ).toLocaleString(this.props.intl.locale)
                                                        : 0}{' '}
                                                    kr
                                                </div>
                                            </div>
                                        </div>
                                        <div />
                                    </div>
                                </div>
                            </CSSTransition>
                        );
                    }
                })}
            </div>
            {this.state.result.map((res: any, index: number) => {
                return (
                    <CSSTransition
                        key={index + Date.now()}
                        appear={true}
                        classNames="message"
                        in={this.state.resultFade}
                        timeout={800}>
                        {res}
                    </CSSTransition>
                );
            })}
        </div>
    );
}
export default injectIntl(Valg);
