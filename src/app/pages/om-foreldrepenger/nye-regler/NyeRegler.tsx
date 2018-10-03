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
        { label: translate('om_foreldrepenger.nye_regler.før'), value: 'FØR' },
        { label: translate('om_foreldrepenger.nye_regler.etter'), value: 'ETTER' }
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
        <div role="region" aria-label="Nye regler" className={cls.className}>
            <div className={cls.element('header')}>
                <CustomSVGFromSprite iconRef={infoIcon} size={32} />
                <TypografiBase type="systemtittel">
                    {translate('om_foreldrepenger.nye_regler.tittel')}
                </TypografiBase>
            </div>
            <div className={cls.element('divider')} />
            <div className={cls.element('content')}>
                <TypografiBase type="element">{`${translate(
                    'om_foreldrepenger.nye_regler_label'
                )}:`}</TypografiBase>
                <div className={cls.element('radiopanelgruppe')}>
                    {NyeRegler.radios.map((radio) => (
                        <RadioPanel
                            key={radio.value}
                            checked={this.state.selectedRule === radio.value}
                            label={radio.label}
                            name={radio.label}
                            onChange={this.onRuleSelected}
                            value={radio.value}
                        />
                    ))}
                </div>
                <TypografiBase type="normaltekst">
                    {this.state.selectedRule === 'FØR'
                        ? translate('om_foreldrepenger.nye_regler.før_beskrivelse')
                        : translate('om_foreldrepenger.nye_regler.etter_beskrivelse')}
                </TypografiBase>
            </div>
        </div>
    );
}

export default NyeRegler;
