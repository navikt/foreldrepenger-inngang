import React from 'react';
import BEMHelper from '../../../../utils/bem';
import './valg.less';
import StorToggle from '../../../../components/stor-toggle/StorToggle';
import { FlexibleSvg } from '../../../../utils/CustomSVG';
import { Language, getTranslation, withIntl } from '../../../../intl/intl';
import TypografiBase from 'nav-frontend-typografi';
import StrukturertTekst from "../../../../components/strukturert-tekst/StrukturertTekst";
import {getContent} from "../../../../utils/getContent";

const cls = BEMHelper('valg');

const far = require('../../../../assets/foreldre/far1.svg').default;
const mor = require('../../../../assets/foreldre/mor2.svg').default;
const medmor = require('../../../../assets/foreldre/medmor2.svg').default;

const spr = {
    default: [
        'jeg har hatt inntekt?',
        'Hva er årsinntekt din?',
        'Har mor foreldrepenger?',
        'Mottar du utbetalinger fra NAV?'
    ],
    mor: [
        'MOR  Har du hatt inntekt?',
        'Hva er årsinntekten din?',
        'Har den andre foreldreen rett til foreldrepenger?'
    ]
};
/*
const svarAlt = {
    mor : {
        spr : [
            { '6 av de 10 siste mnd': false },
            { 'mindre enn 6 av de 10 mnd': false }
        ],
        sprTo : [{ 'over 48 441 kr': false }, { 'under 48 441 kr': false }],
        sprTre : [{"Ja, far/medmor har rett": false}, {"Nei, far/medmor har ikke rett": false}, {"Jeg er aleneforsørger": false}]
    }
};
*/
interface Props {
    lang: Language;
}
interface State {
    parentToggled: boolean[];
    cardToggled: object[];
    kort: object[];
    teller: number;
}
class Valg extends React.Component<Props, State> {
    toggled = null;

    constructor(props: Props) {
        super(props);
        this.state = {
            parentToggled: [true, true, true],
            cardToggled: [],
            kort: [],
            teller: 1
        };
        this.setitem = this.setitem.bind(this);
    }
    updateToggle(nr: any): void {
        let nyeKort = [...this.state.kort];

        if (this.toggled !== nr) {
            this.toggled = nr;
            nyeKort = [];
            const tmp = [...this.state.parentToggled];
            for (let i = 0; i < 3; i++) {
                i === nr ? (tmp[i] = false) : (tmp[i] = true);
            }
            this.setState({ parentToggled: tmp });
        }
        this.setState({ teller: 1 }, () => this.setitem(nyeKort, this.state.teller));
    }

    setitem(gamleKort: object[], input: number) {
        let list;
        !this.state.parentToggled[1]
            ? (list = [
                  ...gamleKort,
                  { nr: input, sprmal: spr.mor[0], alt1: '', alt2: '', svar: '' }
              ])
            : (list = [
                  ...gamleKort,
                  { nr: input, sprmal: spr.default[0], alt1: '', alt2: '', svar: '' }
              ]);

        this.setState({ kort: list });
    }
    appenditem(/* lvl / nivå ned*/) {
        // check lvl
        // fjern lvl under hvis det finnes
        // legg til ny lvl
    }

    render = () => {
        const cards = this.state.kort.map((item: any) => (
            <div key={item.nr} className={cls.element('kort-rad ' + item.nr)}>
                {item.sprmal}
                <StorToggle isToggled={true} onToggle={() => this.appenditem()}>
                    svar 1
                </StorToggle>
                <StorToggle isToggled={true} onToggle={() => this.appenditem()}>
                    svar 2
                </StorToggle>
            </div>
        ));

        return (
            <div className={cls.className}>
                <div className={cls.element('ingress')}> <StrukturertTekst tekst={getContent('veiviser/header/header', this.props.lang)}/> </div>
                <div className={cls.element('forelder')}>
                    <div className={cls.element('ingress-knapp')}>
                        <TypografiBase type="undertittel">
                            {getTranslation('veiviser.ingress.knapper', this.props.lang)}
                        </TypografiBase>
                    </div>
                    <div className={cls.element('knapper')}>
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
                    </div>
                </div>
                <div className={cls.element('kort')}>{cards}</div>
            </div>
        );
    };
}

export default withIntl(Valg);
