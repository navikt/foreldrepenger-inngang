import * as React from 'react';
import { InjectedIntlProps, injectIntl } from 'react-intl';
import { RadioPanel } from 'nav-frontend-skjema';
import BEMHelper from '../../../utils/bem';
import CustomSVGFromSprite from '../../../utils/CustomSVG';
import getTranslation from 'app/utils/i18nUtils';
import TypografiBase from 'nav-frontend-typografi';
import './nyeRegler.less';

const infoIcon = require('./check_circle_filled.svg').default;
const cls = BEMHelper('nyeRegler');

type ValgtRegel = 'FØR' | 'ETTER';

class NyeRegler extends React.Component<InjectedIntlProps> {
    radios = [
        {
            label: getTranslation('om_foreldrepenger.nye_regler.etter', this.props.intl),
            value: 'ETTER'
        },
        {
            label: getTranslation('om_foreldrepenger.nye_regler.før', this.props.intl),
            value: 'FØR'
        }
    ];

    state: {
        selectedRule: ValgtRegel;
    };

    constructor(props: InjectedIntlProps) {
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
            <div className={cls.element('content')}>
                <TypografiBase type="element">{`${getTranslation(
                    'om_foreldrepenger.nye_regler_label',
                    this.props.intl
                )}:`}</TypografiBase>
                <div role="radiogroup" className={cls.element('radiopanelgruppe')}>
                    {this.radios.map((radio) => (
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
                {this.state.selectedRule === 'FØR' && (
                    <div
                        role="alert"
                        aria-describedby="førBeskrivelse"
                        className={cls.element('header')}>
                        <CustomSVGFromSprite iconRef={infoIcon} size={32} />
                        <TypografiBase type="systemtittel">
                            <span id="førBeskrivelse">
                                {getTranslation(
                                    'om_foreldrepenger.nye_regler.tittel',
                                    this.props.intl
                                )}
                            </span>
                        </TypografiBase>
                    </div>
                )}
                <output>
                    <TypografiBase type="normaltekst">
                        {this.state.selectedRule === 'FØR'
                            ? getTranslation(
                                  'om_foreldrepenger.nye_regler.før_beskrivelse',
                                  this.props.intl
                              )
                            : getTranslation(
                                  'om_foreldrepenger.nye_regler.etter_beskrivelse',
                                  this.props.intl
                              )}
                    </TypografiBase>
                </output>
            </div>
        </div>
    );
}

export default injectIntl(NyeRegler);
