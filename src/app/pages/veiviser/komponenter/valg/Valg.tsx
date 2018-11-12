import React from 'react';
import BEMHelper from '../../../../utils/bem';
import './valg.less';
import StorToggle from '../../../../components/stor-toggle/StorToggle';
import { FlexibleSvg } from '../../../../utils/CustomSVG';
import { Language, getTranslation, withIntl } from '../../../../intl/intl';
import TypografiBase from 'nav-frontend-typografi';
import StrukturertTekst from '../../../../components/strukturert-tekst/StrukturertTekst';
import { getContent } from '../../../../utils/getContent';

import { RadioPanel } from 'nav-frontend-skjema';
import Tab from "../tabs/Tab";

// import { RadioPanel } from 'nav-frontend-skjema';

const cls = BEMHelper('valg');

const far = require('../../../../assets/foreldre/far1.svg').default;
const mor = require('../../../../assets/foreldre/mor2.svg').default;
const medmor = require('../../../../assets/foreldre/medmor2.svg').default;

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

interface Tabs {
    tabs: Tabs[];
}

interface Lang {
    lang: Language;
}
interface State {
    parentToggled: boolean[]; // holder true/false state på tre øverste knappene
    items: object[];
    valg: object[];
    checkbox: object[];
    teller: number;
    antallRader: number;
    numberofCheckBoxz: number;
    test: boolean;
}

type Props = Lang & Tabs;

class Valg extends React.Component<Props, State> {
    // setter toggled lik knapp som er valgt.
    toggled = null;

    constructor(props: Props) {
        super(props);
        this.state = {
            parentToggled: [true, true, true], // hvilke kort som er togglet
            // hvilke checkbox som har blitt trykket på
            checkbox: [
                [false, false],
                [false, false],
                [false, false],
                [false, false],
                [false, false]
            ],
            valg: [], // valg listen som blir mappet i render
            items: [],
            teller: 0, // teller for rad i checkbox
            antallRader: 0, // teller for antall rader i valg
            numberofCheckBoxz: 2, // antall checkbox som skal genereres pr rad,
            test: false
        };
    }

    updateToggle(nr: any): void {
        if (this.toggled !== nr) {
            this.toggled = nr;
            let valgBytte = [...this.state.valg]; // lager kopi av bool value til brukerValg
            valgBytte = [];
            const tmp = [...this.state.parentToggled];
            const noneChecked = [...this.state.checkbox];
            for (let i = 0; i < 3; i++) {
                i === nr ? (tmp[i] = false) : (tmp[i] = true);
            }
            for (let j = 0; j < this.state.checkbox.length; j++) {
                for (let k = 0; k < 2; k++) {
                    noneChecked[j][k] = false;
                }
            }
            this.setState(
                {
                    parentToggled: tmp,
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

    initItem(valgListe: object[], input: number, newItem: object) {
        let list;
        if (!this.state.parentToggled[1]) {
            list = valgListe;
            list.push({
                nr: input,
                sprmal: getTranslation(sprmalMor[input], this.props.lang),
                svar1: getTranslation(svarMor[input][0], this.props.lang),
                svar2: getTranslation(svarMor[input][1], this.props.lang),
                obj: newItem
            });
        } else {
            list = valgListe;
            list.push({
                nr: input,
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
        this.initItem(nyttValg, this.state.teller, newItem);
    }

    checkRow(checkBoxNiva: number, svar: number, radNiva: number) {
        console.log('//////////////////////////////////');
        console.log('//////////////////////////////////');
        console.log(
            'checkbox lvl',
            checkBoxNiva,
            ' this.state.antallRader ',
            this.state.antallRader,
            ' radNiva',
            radNiva
        );
        const tmpItems = [...this.state.valg];
        const checked = [...this.state.checkbox];
        if (this.state.antallRader !== radNiva) {
            // checkBoxNiva = radNiva;
            tmpItems.splice(radNiva + 1);
            for (let i = radNiva; i < this.state.checkbox.length; i++) {
                for (let j = 0; j < 2; j++) {
                    checked[i][j] = false;
                }
            }
        }
        this.setState({ valg: tmpItems, checkbox: checked }, () =>
            this.appendRow(checkBoxNiva, svar, radNiva)
        );
    }

    appendRow(checkBoxNiva: number, svar: number, radNiva: number) {
        // radNivå er rad-nr && svar er ja (0) / nei (1)
        const checked = [...this.state.checkbox];
        console.log('checkBoxNiva :', checkBoxNiva, 'rad niva : ', radNiva, 'svar ', svar);
        //// NIVA 1
        if (checkBoxNiva === 0) {
            if (svar === 0) {
                // ****************************' SVAR : JA ***************************** //
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
                // ****************************' SVAR : NEI ***************************** //
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

            //// NIVA 2
        } else if (checkBoxNiva === 1) {
            console.log('checkBoxNiva :', checkBoxNiva, 'rad niva : ', radNiva);
            if (svar === 0) {
                // ****************************' SVAR : JA ***************************** //
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
                // ****************************' SVAR : NEI ***************************** //
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
            console.log('checkBoxNiva :', checkBoxNiva, 'rad niva : ', radNiva);
            if (svar === 0) {
                // ****************************' SVAR : JA ***************************** //
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
                // ****************************' SVAR : NEI ***************************** //
                // Hurra du burde søke ES ( set inn func for dette resultat )
                checked[checkBoxNiva][svar] = true;
                radNiva = 3;
                checkBoxNiva = 3;
                this.setState({ antallRader: radNiva, teller: checkBoxNiva, checkbox: checked });
            }

            //// NIVA 4
        } else if (checkBoxNiva === 3) {
            console.log('checkBoxNiva :', checkBoxNiva, 'rad niva : ', radNiva);
            if (svar === 0) {
                console.log('svar = ', svar);
                // ****************************' SVAR : JA ***************************** //
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
                // ****************************' SVAR : NEI ***************************** //
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

            //// NIVA 5
        } else if (checkBoxNiva === 4) {
            console.log('checkBoxNiva :', checkBoxNiva, 'rad niva : ', radNiva);
            if (svar === 0) {
                // ****************************' SVAR : JA ***************************** //
                // Hurra du burde søke om FP, og far har rett (func for dette )
                checked[checkBoxNiva][svar] = true;
                checked[0][0] ? (radNiva = 3) : (radNiva = 5);
                checkBoxNiva = 5;
                this.setState(
                    { antallRader: radNiva, teller: checkBoxNiva, checkbox: checked },
                    () => void 0 //sett inn nytt content på callback
                );
            } else if (svar === 1) {
                // ****************************' SVAR : NEI ***************************** //
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
                {' '}
                <StrukturertTekst
                    tekst={getContent('veiviser/header/header', this.props.lang)}
                />{' '}
            </div>
            <div className={cls.element('forelder')}>
                <div className={cls.element('ingress-knapp')}>
                    <TypografiBase type="undertittel">
                        {getTranslation('veiviser.ingress.knapper', this.props.lang)}
                    </TypografiBase>
                </div>
                <div className={cls.element('knapper')}>
                    {this.props.tabs.map((tab, index) => (
                        <Tab label={} icon={} lang={} setLanguage={}/>
                        )}

                    /*
                    <StorToggle
                        clsName={cls.element('knapp-frame')}
                        isToggled={this.state.parentToggled[0]}
                        onToggle={() => this.updateToggle(0)}>
                        <div className={cls.element('knapp-element')}>
                            <FlexibleSvg width={68} height={96} iconRef={far} />
                            <div className={cls.element('label')}>
                                <TypografiBase type="undertekstBold">
                                    {getTranslation(
                                        'veiviser.sidebanner.knappFar.label',
                                        this.props.lang
                                    )}
                                </TypografiBase>
                            </div>
                        </div>
                    </StorToggle>
                    <StorToggle
                        clsName={cls.element('knapp-frame')}
                        isToggled={this.state.parentToggled[1]}
                        onToggle={() => this.updateToggle(1)}>
                        <div className={cls.element('knapp-element')}>
                            <FlexibleSvg width={68} height={96} iconRef={mor} />
                            <div className={cls.element('label')}>
                                <TypografiBase type="undertekstBold">
                                    {getTranslation(
                                        'veiviser.sidebanner.knappMor.label',
                                        this.props.lang
                                    )}
                                </TypografiBase>
                            </div>
                        </div>
                    </StorToggle>
                    <StorToggle
                        clsName={cls.element('knapp-frame')}
                        isToggled={this.state.parentToggled[2]}
                        onToggle={() => this.updateToggle(2)}>
                        <div className={cls.element('knapp-element')}>
                            <FlexibleSvg width={68} height={96} iconRef={medmor} />
                            <div className={cls.element('label')}>
                                <TypografiBase type="undertekstBold">
                                    {getTranslation(
                                        'veiviser.sidebanner.knappMedmor.label',
                                        this.props.lang
                                    )}
                                </TypografiBase>
                            </div>
                        </div>
                    </StorToggle>
                    */

                </div>
            </div>
            <div className={cls.element('kort')}>
                {this.state.valg.map((valg: any) => {
                    // console.log(valg);
                    return (
                        <div
                            key={valg.nr + Date.now()}
                            className={cls.element('kort-rad ' + valg.nr)}>
                            <TypografiBase type="normaltekst">
                            {valg.sprmal}
                            </TypografiBase>
                            <div className={cls.element('valg-checkboxes')}>
                                {valg.obj.map((item: any, index: number) => (
                                    <RadioPanel
                                        key={item.value}
                                        checked={this.state.checkbox[item.valgIndex][index]}
                                        name={item.name}
                                        onChange={item.onChange}
                                        label={item.label} // item.label
                                        value={item.value}
                                    />
                                ))}
                            </div>
                        </div>
                    );
                })}
                ;
            </div>
        </div>
    );
}

export default withIntl(Valg);
