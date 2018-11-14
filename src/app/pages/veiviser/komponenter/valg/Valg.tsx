import React from 'react';
import BEMHelper from '../../../../utils/bem';
import { Language, getTranslation, withIntl } from '../../../../intl/intl';
import TypografiBase from 'nav-frontend-typografi';
import StrukturertTekst from '../../../../components/strukturert-tekst/StrukturertTekst';
import { getContent } from '../../../../utils/getContent';
import { RadioPanel } from 'nav-frontend-skjema';
import Tabs from 'nav-frontend-tabs';
import { FlexibleSvg } from '../../../../utils/CustomSVG';
import './valg.less';
import { CSSTransition } from 'react-transition-group';

const cls = BEMHelper('valg');

const sprmalMor = [
    'veiviser.valg.spørsmål.mor.en',
    'veiviser.valg.spørsmål.mor.to',
    'veiviser.valg.spørsmål.mor.tre',
    'veiviser.valg.spørsmål.mor.fire',
    'veiviser.valg.spørsmål.mor.fem'
];

const sprmalFarMedmor = [
    'veiviser.valg.spørsmål.far.en',
    'veiviser.valg.spørsmål.far.to',
    'veiviser.valg.spørsmål.far.tre',
    'veiviser.valg.spørsmål.far.fire',
    'veiviser.valg.spørsmål.far.fem'
];

const svarMor = [
    ['veiviser.valg.svar.mor.en.ja', 'veiviser.valg.svar.mor.en.nei'],
    ['veiviser.valg.svar.mor.to.ja', 'veiviser.valg.svar.mor.to.nei'],
    ['veiviser.valg.svar.mor.tre.ja', 'veiviser.valg.svar.mor.tre.nei'],
    ['veiviser.valg.svar.mor.fire.ja', 'veiviser.valg.svar.mor.fire.nei'],
    [
        'veiviser.valg.svar.mor.fem.del1',
        'veiviser.valg.svar.mor.fem.del2',
        'veiviser.valg.svar.mor.fem.del3'
    ]
];

const svarFarMedmor = [
    ['veiviser.valg.svar.far.en.ja', 'veiviser.valg.svar.far.en.nei'],
    ['veiviser.valg.svar.far.to.ja', 'veiviser.valg.svar.far.to.nei'],
    ['veiviser.valg.svar.far.tre.ja', 'veiviser.valg.svar.far.tre.nei'],
    ['veiviser.valg.svar.far.fire.ja', 'veiviser.valg.svar.far.fire.nei'],
    [
        'veiviser.valg.svar.far.fem.del1',
        'veiviser.valg.svar.far.fem.del2',
        'veiviser.valg.svar.far.fem.del3'
    ]
];

interface TabContent {
    faner: any[];
}

interface Lang {
    lang: Language;
}
interface State {
    parentToggled: boolean[]; // holder state på parent-tabs.
    items: object[];
    valg: object[];
    checkbox: object[];
    teller: number;
    antallRader: number;
    numberofCheckBoxz: number;
}

type Props = Lang & TabContent;

class Valg extends React.Component<Props, State> {
    toggled = null;
    tmp = false;

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
                [false, false]
            ],
            valg: [], // valg : listen som blir mappet i render
            items: [], // radiopanel list som blir mappet inne i valg list
            teller: 0, // teller for rad i checkbox
            antallRader: 0, // teller for antall rader i valg
            numberofCheckBoxz: 2, // antall checkbox som skal genereres pr rad,

        };
    }

    updateToggle(e: any, nr: any): void {
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
            this.setState(
                // oppdaterer state /m nye verdier
                {
                    parentToggled: tmpTabs,
                    teller: 0,
                    valg: valgBytte,
                    checkbox: noneChecked,
                    antallRader: 0
                },
                () =>
                    this.insertBoxes(
                        this.state.numberofCheckBoxz,
                        this.state.teller,
                        valgBytte,
                        this.state.antallRader
                    )
            );
        }
    }

    initItem(valgListe: object[], input: number, newItem: object, radNummer: number) {
        let list;
        if (!this.state.parentToggled[1]) {
            list = valgListe;
            list.push({
                nr: input,
                rad: radNummer,
                sprmal: getTranslation(sprmalMor[input], this.props.lang),
                svar1: getTranslation(svarMor[input][0], this.props.lang),
                svar2: getTranslation(svarMor[input][1], this.props.lang),
                obj: newItem
            });
        } else {
            list = valgListe;
            list.push({
                nr: input,
                rad: radNummer,
                sprmal: getTranslation(sprmalFarMedmor[input], this.props.lang),
                svar1: getTranslation(svarFarMedmor[input][0], this.props.lang),
                svar2: getTranslation(svarFarMedmor[input][1], this.props.lang),
                obj: newItem
            });
        }
        this.setState({ valg: list });
    }

    insertBoxes(numBox: number, checkBoxNivaa: number, nyttValg: object[], radNummer: number) {
        const newItem = [];
        let value: string;
        for (let i = 0; i < numBox; i++) {
            value = !this.state.parentToggled[1]
                ? svarMor[this.state.teller][i]
                : svarFarMedmor[this.state.teller][i];
            newItem[i] = {
                value,
                valgIndex: this.state.teller,
                name: getTranslation(value, this.props.lang),
                label: getTranslation(value, this.props.lang),
                onChange: () => this.checkRow(checkBoxNivaa, i, radNummer)
            };
        }
        this.initItem(nyttValg, this.state.teller, newItem, radNummer);
    }

    checkRow(checkBoxNiva: number, svar: number, radNiva: number) {
        const tmpItems = [...this.state.valg];
        const checked = [...this.state.checkbox];
        if (this.state.antallRader !== radNiva) {
            tmpItems.splice(radNiva + 1);
            for (let i = radNiva; i < this.state.checkbox.length; i++) {
                for (let j = 0; j < 2; j++) {
                    checked[i][j] = false;
                }
            }
            this.setState({ valg: tmpItems, checkbox: checked }, () =>
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
                checkBoxNiva = 3;
                this.setState(
                    { antallRader: radNiva, teller: checkBoxNiva, checkbox: checked },
                    () =>
                        this.insertBoxes(
                            this.state.numberofCheckBoxz,
                            this.state.teller,
                            this.state.valg,
                            this.state.antallRader
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
                            this.state.antallRader
                        )
                );
            }
        } else if (checkBoxNiva === 1) {
            // nivå 2
            if (svar === 0) {
                // svar : ja
                checked[checkBoxNiva][svar] = true;
                radNiva = 2;
                checkBoxNiva = 3;
                this.setState(
                    { antallRader: radNiva, teller: checkBoxNiva, checkbox: checked },
                    () =>
                        this.insertBoxes(
                            this.state.numberofCheckBoxz,
                            this.state.teller,
                            this.state.valg,
                            this.state.antallRader
                        )
                );
            } else if (svar === 1) {
                // svar : nei
                checked[checkBoxNiva][svar] = true;
                radNiva = 2;
                checkBoxNiva = 2;
                this.setState(
                    { antallRader: radNiva, teller: checkBoxNiva, checkbox: checked },
                    () =>
                        this.insertBoxes(
                            this.state.numberofCheckBoxz,
                            this.state.teller,
                            this.state.valg,
                            this.state.antallRader
                        )
                );
            }

            //// NIVA 3
        } else if (checkBoxNiva === 2) {
            // nivå 3
            if (svar === 0) {
                // svar : ja
                checked[checkBoxNiva][svar] = true;
                radNiva = 3;
                checkBoxNiva = 3;
                this.setState(
                    { antallRader: radNiva, teller: checkBoxNiva, checkbox: checked },
                    () =>
                        this.insertBoxes(
                            this.state.numberofCheckBoxz,
                            this.state.teller,
                            this.state.valg,
                            this.state.antallRader
                        )
                );
            } else if (svar === 1) {
                // svar : nei
                // Hurra du burde søke ES ( set inn func for dette resultat )
                checked[checkBoxNiva][svar] = true;
                radNiva = 3;
                checkBoxNiva = 3;
                this.setState({ antallRader: radNiva, teller: checkBoxNiva, checkbox: checked });
            }
        } else if (checkBoxNiva === 3) {
            // nivå 4
            if (svar === 0) {
                // svar : ja
                checked[checkBoxNiva][svar] = true;
                checked[checkBoxNiva][1] = false;
                checked[0][0] ? (radNiva = 2) : (radNiva = 4);
                checkBoxNiva = 4;
                this.setState(
                    { antallRader: radNiva, teller: checkBoxNiva, checkbox: checked },
                    () =>
                        this.insertBoxes(
                            this.state.numberofCheckBoxz,
                            this.state.teller,
                            this.state.valg,
                            this.state.antallRader
                        )
                );
            } else if (svar === 1) {
                // svar : nei
                // hurra du burde søke ES ( set inn func for dette resultat )
                checked[checkBoxNiva][svar] = true;
                checked[checkBoxNiva][0] = false;
                checked[0][0] ? (radNiva = 2) : (radNiva = 4);
                checkBoxNiva = 3;
                this.setState(
                    { antallRader: radNiva, teller: checkBoxNiva, checkbox: checked },
                    () => void 0
                );
            }
        } else if (checkBoxNiva === 4) {
            // nivå 5
            if (svar === 0) {
                // svar : ja
                // Hurra du burde søke om FP, og far har rett (func for dette )
                checked[checkBoxNiva][svar] = true;
                checked[0][0] ? (radNiva = 3) : (radNiva = 5);
                checkBoxNiva = 5;
                this.setState(
                    { antallRader: radNiva, teller: checkBoxNiva, checkbox: checked },
                    () => void 0 // sett inn nytt content på callback
                );
            } else if (svar === 1) {
                // svar : nei
                // Hurra du burde søke om FP, Bare du skal ha FP
                checked[checkBoxNiva][svar] = true;
                checked[0][0] ? (radNiva = 3) : (radNiva = 5);
                checkBoxNiva = 5;
                this.setState(
                    { antallRader: radNiva, teller: checkBoxNiva, checkbox: checked },
                    () => void 0
                );
            }
        }
    }

    render = () => (
        <div className={cls.className}>
            <div className={cls.element('ingress')}>
                <StrukturertTekst tekst={getContent('veiviser/header/header', this.props.lang)} />
            </div>
            <div className={cls.element('forelder')}>
                <div className={cls.element('ingress-knapp')}>
                    <TypografiBase type="element">
                        {getTranslation('veiviser.ingress.knapper', this.props.lang)}
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
                                    {fane.label}
                                </div>
                            ),
                            onClick: this.updateToggle[index]
                        }))}
                        onChange={(event: any, index: number) => {
                            this.updateToggle(event, index);
                        }}
                    />
                </div>
            </div>
            <div className={cls.element('kort')}>
                {this.state.valg.map((valg: any) => {
                    console.log(this.state.valg.length-1, valg.nr, "this.state.antallR", this.state.antallRader, valg.rad);
                    this.state.valg.length - 1 === valg.rad ? (this.tmp = true) : (this.tmp = false);

                    return (
                        <div
                            key={valg.nr + Date.now()}
                            className={cls.element('kort-rad ' + valg.nr)}>
                            <TypografiBase type="element">{valg.sprmal}</TypografiBase>
                            <div className={cls.element('valg-checkboxes ')}>
                                {valg.obj.map((item: any, index: number) => {
                                    return (
                                        <CSSTransition
                                            key={item.value + Date.now()}
                                            appear={true}
                                            classNames="fade"
                                            in={this.tmp}
                                            timeout={10000}>
                                            <RadioPanel
                                                key={item.value}
                                                checked={this.state.checkbox[item.valgIndex][index]}
                                                name={item.name}
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
                })}
            </div>
        </div>
    );
}

export default withIntl(Valg);
