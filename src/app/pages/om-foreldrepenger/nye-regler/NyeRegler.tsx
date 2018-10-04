import * as React from 'react';
import { RadioPanel } from 'nav-frontend-skjema';

import translate from '../../../utils/translate';
import BEMHelper from '../../../utils/bem';

import './nyeRegler.less';
import CustomSVGFromSprite from '../../../utils/CustomSVG';
import TypografiBase from 'nav-frontend-typografi';

const infoIcon = require('./check_circle_filled.svg').default;
const cls = BEMHelper('nyeRegler');

interface Props {}

type ValgtRegel = 'FØR' | 'ETTER';

class NyeRegler extends React.Component<Props> {
    static radios = [
        { label: 'før_1_juli_2018', value: 'FØR' },
        { label: 'etter_1_juli_2018', value: 'ETTER' }
    ];

    state: {
        selectedRule: ValgtRegel;
    };

    constructor(props: Props) {
        super(props);

        this.state = {
            selectedRule: 'ETTER'
        };
    }

    onRuleSelected = (event: any) => {
        this.setState({
            selectedRule: event.target.value
        });
    };

    render = () => (
        <div role="note" aria-label="Nye regler" className={cls.className}>
            <div className={cls.element('header')}>
                <CustomSVGFromSprite iconRef={infoIcon} size={32} />
                <TypografiBase type="systemtittel">
                    {translate('nye_regler_fra_1_juli_2018')}
                </TypografiBase>
            </div>
            <div className={cls.element('divider')} />
            <div className={cls.element('content')}>
                <TypografiBase type="element">{`${translate(
                    'barnet_er_født_eller_adoptert'
                )}:`}</TypografiBase>
                <div
                    role="radiogroup"
                    className={cls.element('radiopanelgruppe')}>
                    {NyeRegler.radios.map((radio) => (
                        <RadioPanel
                            key={radio.value}
                            checked={this.state.selectedRule === radio.value}
                            label={translate(radio.label)}
                            name={radio.label}
                            onChange={this.onRuleSelected}
                            value={radio.value}
                        />
                    ))}
                </div>
                <output>
                    <TypografiBase type="normaltekst">
                        {this.state.selectedRule === 'FØR'
                            ? translate('nye_regler_før')
                            : translate('nye_regler_etter')}
                    </TypografiBase>
                </output>
            </div>
        </div>
    );
}

export default NyeRegler;
