import * as React from 'react';
import PanelMedIllustrasjon from '../../../components/panel-med-illustrasjon/PanelMedIllustrasjon';
import { getTranslation, withIntl, IntlProps, Language } from '../../../intl/intl';
import { getContent } from 'app/utils/getContent';
import { Undertittel } from 'nav-frontend-typografi';
import FactsWithIcon from 'app/components/facts-with-icon/FactsWithIcon';
import Fact from 'app/components/facts-with-icon/Fact';
import BEMHelper from '../../../utils/bem';
import './nårKanDuSøke.less';
import Tabs from 'nav-frontend-tabs';
import StrukturertTekst from 'app/components/strukturert-tekst/StrukturertTekst';
import Foreldrepar from 'app/components/foreldrepar/Foreldrepar';
import { FlexibleSvg } from 'app/utils/CustomSVG';

const iconSvg = require('../../../assets/ark/ark-frister.svg').default;
const morSvg = require('../../../assets/foreldre/mor2.svg').default;
const adopsjonSvg = require('../../../assets/icons/adopsjon.svg').default;
const cls = BEMHelper('nårKanDuSøke');

const getTabs = (lang: Language) => [
    {
        label: getTranslation('om_foreldrepenger.når_kan_du_søke.utsette_sykdom', lang),
        content: getContent('all-informasjon/når-kan-du-søke/sykdom', lang)
    },
    {
        label: getTranslation('om_foreldrepenger.når_kan_du_søke.utsette_jobbe', lang),
        content: getContent('all-informasjon/når-kan-du-søke/du-skal-jobbe', lang)
    },
    {
        label: getTranslation('om_foreldrepenger.når_kan_du_søke.utsette_ferie', lang),
        content: getContent('all-informasjon/når-kan-du-søke/du-skal-ha-ferie', lang)
    }
];

interface OwnProps {
    id: string;
}

type Props = OwnProps & IntlProps;

interface State {
    currentTabIndex: React.ReactNode;
}

class NårKanDuSøke extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            currentTabIndex: 0
        };
    }

    onTabChange = (event: any, tabIndex: number) => {
        this.setState({
            currentTabIndex: tabIndex
        });
    };

    render = () => {
        const { id, lang } = this.props;
        const tabs = getTabs(lang);

        return (
            <PanelMedIllustrasjon
                id={id}
                className={cls.className}
                title={getTranslation('om_foreldrepenger.når_kan_du_søke.tittel', lang)}
                svg={iconSvg}>
                <FactsWithIcon>
                    <Fact
                        icon={<FlexibleSvg width={40} height={40} iconRef={morSvg} />}
                        content={getContent('all-informasjon/når-kan-du-søke/mor', lang)}
                    />
                    <Fact
                        icon={<Foreldrepar firstParent="far4" secondParent="medmor2" />}
                        content={getContent(
                            'all-informasjon/når-kan-du-søke/far-eller-medmor',
                            lang
                        )}
                    />
                    <Fact
                        icon={<FlexibleSvg width={40} height={56} iconRef={adopsjonSvg} />}
                        content={getContent('all-informasjon/når-kan-du-søke/adopsjon', lang)}
                    />
                </FactsWithIcon>
                <StrukturertTekst
                    tekst={getContent('all-informasjon/når-kan-du-søke/tidligst-svar', lang)}
                />
                <Undertittel>
                    {getTranslation(
                        'om_foreldrepenger.når_kan_du_søke.hvis_du_skal_utsette_fordi',
                        lang
                    )}
                </Undertittel>
                <Tabs kompakt={true} tabs={tabs} onChange={this.onTabChange} />

                {tabs.map((tab, index) => (
                    <div
                        className={cls.element(
                            'tabContent',
                            this.state.currentTabIndex !== index ? 'inactive' : undefined
                        )}>
                        <StrukturertTekst tekst={tab.content} />
                    </div>
                ))}

                <StrukturertTekst
                    tekst={getContent(
                        'all-informasjon/når-kan-du-søke/hvis-jeg-søker-for-sent',
                        lang
                    )}
                />
            </PanelMedIllustrasjon>
        );
    };
}

export default withIntl(NårKanDuSøke);
