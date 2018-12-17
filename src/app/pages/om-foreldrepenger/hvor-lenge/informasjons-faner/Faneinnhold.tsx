import * as React from 'react';
import { withIntl, IntlProps } from 'app/intl/intl';
import BEMHelper from '../../../../utils/bem';
import CustomSVG from '../../../../utils/CustomSVG';
import Veileder from 'nav-frontend-veileder';
import { FaneinnholdProps } from './Informasjonsfaner';
import Snakkeboble from './Snakkeboble';

const cls = BEMHelper('faneinnhold');

type Props = FaneinnholdProps & IntlProps;

class Faneinnhold extends React.Component<Props> {
    state: {
        veilederposisjon: 'høyre' | 'bunn';
    };

    constructor(props: Props) {
        super(props);

        this.state = {
            veilederposisjon: this.getVeilederposisjon()
        };
    }

    componentDidMount = () => {
        window.addEventListener('resize', this.resizeHandler);
    };

    componentWillUnmount = () => {
        window.removeEventListener('resize', this.resizeHandler);
    };

    resizeHandler = () => {
        this.setState({
            veilederposisjon: this.getVeilederposisjon()
        });
    };

    getVeilederposisjon = () => (window.innerWidth > 576 ? 'høyre' : 'bunn');

    render = () => {
        const { snakkeboble, component, lang } = this.props;

        let svg;
        if (typeof snakkeboble.icon === 'string') {
            svg = require(`../../../../assets/foreldre/${snakkeboble.icon}.svg`).default;
        }

        return (
            <div className={cls.className}>
                <div style={this.state.veilederposisjon === 'høyre' ? { display: 'flex' } : {}}>
                    <Veileder
                        fargetema="normal"
                        posisjon={this.state.veilederposisjon}
                        storrelse="M"
                        center={true}
                        tekst={
                            <Snakkeboble
                                tittel={snakkeboble.tittel}
                                punkter={snakkeboble.punkter}
                                lang={lang}
                            />
                        }>
                        {svg ? <CustomSVG className="Icon__svg" iconRef={svg} size={72} /> : snakkeboble.icon}
                    </Veileder>
                </div>
                <div className={cls.element('bodyTxt')}>{component}</div>
            </div>
        );
    };
}

export default withIntl(Faneinnhold);
