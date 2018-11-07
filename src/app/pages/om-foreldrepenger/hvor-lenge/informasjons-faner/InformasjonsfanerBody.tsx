import React, { ReactNode } from 'react';
import BEMHelper from '../../../../utils/bem';
import CustomSVG from '../../../../utils/CustomSVG';
import Veileder from 'nav-frontend-veileder';
import TypografiBase from 'nav-frontend-typografi';
import { Language, getTranslation, withIntl, IntlProps } from 'app/intl/intl';

const cls = BEMHelper('informasjonsfanerBody');

interface Props {
    tittel: string;
    icon: string | any;
    antallUker: string;
    punktliste?: string[];
    component: ReactNode;
}

class InformasjonsfanerBody extends React.Component<Props & IntlProps> {
    state: {
        veilederposisjon: 'høyre' | 'bunn';
    };

    constructor(props: Props & IntlProps) {
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
        const { tittel, icon, antallUker, punktliste, component, lang } = this.props;
        let svg;
        if (typeof icon === 'string') {
            svg = require(`../../../../assets/foreldre/${icon}.svg`).default;
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
                                tittel={`${antallUker} uker ${tittel}`}
                                punktliste={punktliste}
                                lang={lang}
                            />
                        }>
                        {svg ? <CustomSVG className="Icon__svg" iconRef={svg} size={72} /> : icon}
                    </Veileder>
                </div>
                <div className={cls.element('bodyTxt')}>{component}</div>
            </div>
        );
    };
}

const Snakkeboble = ({
    tittel,
    punktliste,
    lang
}: {
    tittel: string;
    punktliste?: string[];
    lang: Language;
}) => (
    <div>
        <TypografiBase type="element">{tittel}</TypografiBase>
        <ul className={cls.element('liste')}>
            {punktliste &&
                (punktliste.length > 0 ? (
                    punktliste.map((punkt) => {
                        return <li key={punkt}>{punkt}</li>;
                    })
                ) : (
                    <li>
                        {getTranslation(
                            'om_foreldrepenger.hvor_lenge.fordeling.krav.default',
                            lang
                        )}
                    </li>
                ))}
        </ul>
    </div>
);

export default withIntl(InformasjonsfanerBody);
