import * as React from 'react';
import * as classnames from 'classnames';
import { guid } from 'nav-frontend-js-utils';

import InfoToggler from './InfoToggler';
import './utvidetInformasjon.less';
import EkspanderbartInnhold from './EkspanderbartInnhold';
import { Normaltekst } from 'nav-frontend-typografi';

interface Props {
    children: React.ReactNode;
    erApen?: boolean;
    apneLabel?: string;
    lukkLabel?: string;
}

interface State {
    apen: boolean;
}

class UtvidetInformasjon extends React.Component<Props, State> {
    innholdId: string;

    constructor(props: Props) {
        super(props);
        this.innholdId = guid();
        this.state = {
            apen: props.erApen || false
        };
    }
    render() {
        const cls = classnames('utvidetInformasjon', {
            'utvidetInformasjon--apen': this.state.apen
        });

        return (
            <div className={cls}>
                <div className="utvidetInformasjon__toggler no-print">
                    <InfoToggler
                        onToggle={() => this.setState({ apen: !this.state.apen })}
                        apen={this.state.apen}>
                        <Normaltekst>
                            {this.state.apen ? this.props.lukkLabel : this.props.apneLabel}
                        </Normaltekst>
                    </InfoToggler>
                </div>
                <div className="utvidetInformasjon__innhold" id={this.innholdId}>
                    <EkspanderbartInnhold erApen={this.state.apen}>
                        {' '}
                        {this.props.children}
                    </EkspanderbartInnhold>

                    <div className="print-only">{this.props.children}</div>
                </div>
            </div>
        );
    }
}

export default UtvidetInformasjon;
