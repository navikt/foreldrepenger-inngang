import React from 'react';
import BEMHelper from '../../../../utils/bem';
import { Language, getTranslation, withIntl } from '../../../../intl/intl';
import TypografiBase from 'nav-frontend-typografi';
import StrukturertTekst from '../../../../components/strukturert-tekst/StrukturertTekst';
import { getContent } from '../../../../utils/getContent';
import { RadioPanel, Input } from 'nav-frontend-skjema';
import Tabs from 'nav-frontend-tabs';
import { FlexibleSvg } from '../../../../utils/CustomSVG';
import './valg.less';
import { CSSTransition } from 'react-transition-group';
import KnappBase from 'nav-frontend-knapper';
import NavFrontendChevron from 'nav-frontend-chevron';
import UtvidetInformasjon from '../../../kalkulator/utvidetinformasjon/UtvidetInformasjon';

const cls = BEMHelper('valg');

const knapptxt = [
    'veiviser.resultat.knapp.foreldrepenger',
    'veiviser.resultat.knapp.engangsstønad'
];

const dialogTekst = [
    'veiviser/resultat/resultat-foreldrepenger',
    'veiviser/resultat/resultat-engangsstonad'
];

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
    result: object[];
    inputFade: boolean;
}

type Props = Lang & TabContent;

class Valg extends React.Component<Props, State> {
    toggled = null;
    fade = false;
    belop = 'inntekt i kroner';

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
            inputFade: true
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
            this.belop = 'inntekt i kroner';
            this.setState(
                // oppdaterer state /m nye verdier
                {
                    parentToggled: tmpTabs,
                    teller: 0,
                    valg: valgBytte,
                    checkbox: noneChecked,
                    antallRader: 0,
                    result: []
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

        if (!this.state.parentToggled[1]) {
            list = valgListe;
            list.push({
                nr: input,
                rad: radNummer,
                con: content,
                checkbox: ischeckbox,
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
                con: content,
                checkbox: ischeckbox,
                sprmal: getTranslation(sprmalFarMedmor[input], this.props.lang),
                svar1: getTranslation(svarFarMedmor[input][0], this.props.lang),
                svar2: getTranslation(svarFarMedmor[input][1], this.props.lang),
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
        let list, content;
        list = valgListe;
        this.belop = 'inntekt i kroner';
        dropdown ? (content = dropdown) : (content = <div />);
        list.push({
            nr: input,
            rad: radNummer,
            con: content,
            checkbox: ischeckbox,
            sprmal: getTranslation(sprmalMor[input], this.props.lang)
        });
        this.setState({ valg: list });
    }

    goToSection(id: string): any {
        const target = document.querySelector(id);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    }

    getDropdown(aapneLabel: string, lukeLabel: string, jsonContentPath: string) {
        return (
            <div className={cls.element('dropdown')}>
                <UtvidetInformasjon
                    apneLabel={getTranslation(aapneLabel, this.props.lang)}
                    lukkLabel={getTranslation(lukeLabel, this.props.lang)}>
                    <StrukturertTekst tekst={getContent(jsonContentPath, this.props.lang)} />
                </UtvidetInformasjon>
            </div>
        );
    }

    insertInput(e: any, checkboksNiva: number, radnummer: number) {
        const initValue = e.target.value.replace(/[, ]+/g, '').trim();
        e.target.value = initValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',').trim();
        e.persist();
        setTimeout(() => {
            const currentValue = e.target.value.replace(/[, ]+/g, '').trim();
            if (initValue === currentValue && currentValue !== '') {
                const inntekt = parseInt(currentValue.replace(/\s/g, ''), 10);
                this.belop = currentValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',').trim() + ' kr';
                inntekt >= 48441
                    ? this.checkRow(checkboksNiva, 0, radnummer)
                    : this.checkRow(checkboksNiva, 1, radnummer);
            }
        }, 1500);
    }

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
        this.initItem(nyttValg, this.state.teller, newItem, radNummer, true, dropdown);
    }

    insertResultat(knapptekst: string, dialogtxt: string) {
        const res = [];
        res.push(<DialogBoks knapp={knapptekst} txt={dialogtxt} lang={this.props.lang} />);
        res.push(<NavigasjonsBoks lang={this.props.lang} />);
        this.setState({ result: res }, () => setTimeout(this.goToSection('#mainSokKnapp'), 500));
    }

    checkRow(checkBoxNiva: number, svar: number, radNiva: number) {
        const tmpItems = [...this.state.valg];
        const checked = [...this.state.checkbox];
        if (this.state.antallRader !== radNiva) {
            // this.belop = "tast inn beløpet i kr";
            tmpItems.splice(radNiva + 1);
            for (let i = radNiva; i < this.state.checkbox.length; i++) {
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
            this.setState({ result: [] }, () => this.appendRow(checkBoxNiva, svar, radNiva));
        } else {
            this.appendRow(checkBoxNiva, svar, radNiva);
        }
    }

    appendRow(checkBoxNiva: number, svar: number, radNiva: number) {
        // radNivå er rad-nr && svar er ja (0) / nei (1)
        console.log('///////////////////////////////');
        console.log('checkBoxNiva: ', checkBoxNiva, 'svar: ', svar, 'radNiva: ', radNiva);
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
                                'veiviser/infobox/utbetalinger-fra-nav'
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
                checkBoxNiva = 3;
                this.setState(
                    { antallRader: radNiva, teller: checkBoxNiva, checkbox: checked },
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
                radNiva = 3;
                checkBoxNiva = 3;
                this.setState(
                    { antallRader: radNiva, teller: checkBoxNiva, checkbox: checked },
                    () => this.insertResultat(knapptxt[1], dialogTekst[1]) // søk engangssstønad
                );
            }
        } else if (checkBoxNiva === 3) {
            console.log('checkBoxNivå', checkBoxNiva, 'svar', svar, radNiva);
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
                    () => this.insertResultat(knapptxt[1], dialogTekst[1]) // søk engangsstønad
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
                    () => this.insertResultat(knapptxt[0], dialogTekst[0])
                );
            } else if (svar === 1) {
                // svar : nei
                // Hurra du burde søke om FP, Bare du skal ha FP
                checked[checkBoxNiva][svar] = true;
                checked[0][0] ? (radNiva = 3) : (radNiva = 5);
                checkBoxNiva = 5;
                this.setState(
                    { antallRader: radNiva, teller: checkBoxNiva, checkbox: checked },
                    () =>
                        this.insertBoxes(
                            this.state.numberofCheckBoxz,
                            this.state.teller,
                            this.state.valg,
                            this.state.antallRader
                        ) // søk engangsstønad
                );
            }
        } else if (checkBoxNiva === 5) {
            // nivå 6
            if (svar === 0) {
                checked[checkBoxNiva][svar] = true;
                checked[0][0] ? (radNiva = 4) : (radNiva = 6);
                checkBoxNiva = 5;
                this.setState(
                    { antallRader: radNiva, teller: checkBoxNiva, checkbox: checked },
                    () => this.insertResultat(knapptxt[0], dialogTekst[0]) // søk foreldrepenger
                );
            } else if (svar === 1) {
                checked[checkBoxNiva][svar] = true;
                checked[0][0] ? (radNiva = 4) : (radNiva = 6);
                checkBoxNiva = 5;
                this.setState(
                    { antallRader: radNiva, teller: checkBoxNiva, checkbox: checked },
                    () => this.insertResultat(knapptxt[1], dialogTekst[1]) // søk foreldrepenger
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
                    <TypografiBase type="undertittel">
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
            <div id="test123" className={cls.element('kort')}>
                {this.state.valg.map((valg: any) => {
                    if (valg.checkbox) {
                        this.state.antallRader === valg.rad
                            ? (this.fade = true)
                            : (this.fade = false);
                        return (
                            <div
                                key={valg.nr + Date.now()}
                                className={cls.element('kort-rad ' + valg.nr)}>
                                <TypografiBase type="element">{valg.sprmal}</TypografiBase>
                                {valg.con}
                                <div className={cls.element('valg-checkboxes ')}>
                                    {valg.obj.map((item: any, index: number) => {
                                        return (
                                            <CSSTransition
                                                key={item.value + Date.now()}
                                                appear={true}
                                                classNames="fade"
                                                in={this.fade}
                                                timeout={1000}>
                                                <RadioPanel
                                                    key={item.value}
                                                    checked={
                                                        this.state.checkbox[item.valgIndex][index]
                                                    }
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
                    } else {
                        return (
                            <CSSTransition
                                key={valg.nr + Date.now()}
                                appear={true}
                                classNames="fade"
                                in={this.state.inputFade}
                                timeout={1000}>
                                <div
                                    key={valg.nr + Date.now()}
                                    className={cls.element('inputFelt')}>
                                    <TypografiBase type={'element'}>{valg.sprmal}</TypografiBase>
                                    {valg.con}
                                    <Input
                                        className={cls.element('inputFeilt--komponent')}
                                        label={''}
                                        min={0}
                                        step={5000}
                                        onChange={(event: any) => {
                                            this.insertInput(event, valg.nr, valg.rad);
                                        }}
                                        placeholder={this.belop}
                                    />
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
                        in={true}
                        timeout={800}>
                        {res}
                    </CSSTransition>
                );
            })}
        </div>
    );
}
export default withIntl(Valg);

const DialogBoks = ({ knapp, txt, lang }: { knapp: string; txt: string; lang: any }) => {
    return (
        <div className={cls.element('melding')}>
            <StrukturertTekst tekst={getContent(txt, lang)} />
            <KnappBase id="mainSokKnapp" type="hoved">
                {getTranslation(knapp, lang)}
            </KnappBase>
        </div>
    );
};

const NavigasjonsBoks = ({ lang }: { lang: any }) => {
    return (
        <div className={cls.element('navigasjonsboks')}>
            <div className={cls.element('boks')} role="button">
                <div className={cls.element('boks-bilde')}>
                    <FlexibleSvg
                        iconRef={require('../../../../assets/ark/ark-money2.svg').default}
                        width={60}
                        height={60}
                    />
                </div>
                <div className={cls.element('boks-txt')}>
                    <TypografiBase type="normaltekst">
                        {getTranslation('veiviser.navgigasjonsboks.kalk.label', lang)}
                    </TypografiBase>
                </div>
                <NavFrontendChevron />
            </div>
            <div className={cls.element('boks')} role="button">
                <div className={cls.element('boks-bilde')}>
                    <FlexibleSvg
                        iconRef={require('../../../../assets/ark/ark-calendar.svg').default}
                        width={60}
                        height={60}
                    />
                </div>
                <div className={cls.element('boks-txt')}>
                    <TypografiBase type="normaltekst">
                        {getTranslation('veiviser.navigasjonsboks.planlegg.label', lang)}
                    </TypografiBase>
                </div>
                <NavFrontendChevron />
            </div>
        </div>
    );
};
