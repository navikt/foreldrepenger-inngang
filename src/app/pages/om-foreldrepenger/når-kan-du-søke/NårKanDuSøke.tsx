import * as React from 'react';
import PanelMedIllustrasjon from '../../../components/panel-med-illustrasjon/PanelMedIllustrasjon';
import { injectIntl, InjectedIntlProps, InjectedIntl } from 'react-intl';
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
import getTranslation from 'app/utils/i18nUtils';

const iconSvg = require('../../../assets/ark/ark-frister.svg').default;
const morSvg = require('../../../assets/foreldre/mor2.svg').default;
const adopsjonSvg = require('../../../assets/icons/stork.svg').default;
const cls = BEMHelper('nårKanDuSøke');

const getTabs = (intl: InjectedIntl) => [
    {
        label: getTranslation('om_foreldrepenger.når_kan_du_søke.utsette_sykdom', intl),
        content: getContent('om-foreldrepenger/når-kan-du-søke/sykdom', intl)
    },
    {
        label: getTranslation('om_foreldrepenger.når_kan_du_søke.utsette_jobbe', intl),
        content: getContent('om-foreldrepenger/når-kan-du-søke/du-skal-jobbe', intl)
    },
    {
        label: getTranslation('om_foreldrepenger.når_kan_du_søke.utsette_ferie', intl),
        content: getContent('om-foreldrepenger/når-kan-du-søke/du-skal-ha-ferie', intl)
    }
];

interface OwnProps {
    id: string;
}

type Props = OwnProps & InjectedIntlProps;

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
        const { id, intl } = this.props;
        const tabs = getTabs(intl);

        return (
            <PanelMedIllustrasjon
                id={id}
                className={cls.className}
                title={getTranslation('om_foreldrepenger.når_kan_du_søke.tittel', intl)}
                svg={iconSvg}>
                <FactsWithIcon>
                    <Fact
                        icon={<FlexibleSvg width={40} height={40} iconRef={morSvg} />}
                        content={getContent('om-foreldrepenger/når-kan-du-søke/mor', intl)}
                    />
                    <Fact
                        icon={<Foreldrepar firstParent="far4" secondParent="medmor2" />}
                        content={getContent(
                            'om-foreldrepenger/når-kan-du-søke/far-eller-medmor',
                            intl
                        )}
                    />
                    <Fact
                        icon={<FlexibleSvg width={40} height={40} iconRef={adopsjonSvg} />}
                        content={getContent('om-foreldrepenger/når-kan-du-søke/adopsjon', intl)}
                    />
                </FactsWithIcon>
                <StrukturertTekst
                    tekst={getContent('om-foreldrepenger/når-kan-du-søke/tidligst-svar', intl)}
                />
                <Undertittel>
                    {getTranslation(
                        'om_foreldrepenger.når_kan_du_søke.hvis_du_skal_utsette_fordi',
                        intl
                    )}
                </Undertittel>
                <Tabs kompakt={true} tabs={tabs} onChange={this.onTabChange} />

                {tabs.map((tab, index) => (
                    <div
                        key={index}
                        className={cls.element(
                            'tabContent',
                            this.state.currentTabIndex !== index ? 'inactive' : undefined
                        )}>
                        <StrukturertTekst tekst={tab.content} />
                    </div>
                ))}

                <StrukturertTekst
                    tekst={getContent(
                        'om-foreldrepenger/når-kan-du-søke/hvis-jeg-søker-for-sent',
                        intl
                    )}
                />
            </PanelMedIllustrasjon>
        );
    };
}

export default injectIntl(NårKanDuSøke);
