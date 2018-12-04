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

const jobbeSvg = require('../../../assets/ark/ark-jobbe.svg').default;
const morSvg = require('../../../assets/foreldre/mor2.svg').default;
const farSvg = require('../../../assets/foreldre/far4.svg').default;
const adopsjonSvg = require('../../../assets/icons/adopsjon.svg').default;
const cls = BEMHelper('nårKanDuSøke');

const getTabs = (lang: Language) => [
    {
        label: getTranslation('om_foreldrepenger.når_kan_du_søke.utsette_fedrekvote', lang)
    },
    {
        label: getTranslation('om_foreldrepenger.når_kan_du_søke.utsette_jobbe', lang)
    },
    {
        label: getTranslation('om_foreldrepenger.når_kan_du_søke.utsette_ferie', lang)
    }
];

interface OwnProps {
    id: string;
}

type Props = OwnProps & IntlProps;

interface State {
    currentTabContent: React.ReactNode;
}

class NårKanDuSøke extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            currentTabContent: this.getTabContent(0)
        };
    }

    onTabChange = (event: any, tabIndex: number) => {
        this.setState({
            currentTabContent: this.getTabContent(tabIndex)
        });
    };

    getTabContent = (tabIndex: number) => {
        switch (tabIndex) {
            case 0:
                return (
                    <StrukturertTekst
                        tekst={getContent(
                            'all-informasjon/når-kan-du-søke/fedrekvote',
                            this.props.lang
                        )}
                    />
                );
            case 1:
                return (
                    <StrukturertTekst
                        tekst={getContent(
                            'all-informasjon/når-kan-du-søke/du-skal-jobbe',
                            this.props.lang
                        )}
                    />
                );
            case 2:
                return (
                    <StrukturertTekst
                        tekst={getContent(
                            'all-informasjon/når-kan-du-søke/du-skal-ha-ferie',
                            this.props.lang
                        )}
                    />
                );
            default:
                return null;
        }
    };

    render = () => {
        const { id, lang } = this.props;
        const tabs = getTabs(lang);

        return (
            <PanelMedIllustrasjon
                id={id}
                className={cls.className}
                title={getTranslation('om_foreldrepenger.når_kan_du_søke.tittel', lang)}
                svg={jobbeSvg}>
                <FactsWithIcon>
                    <Fact
                        icon={morSvg}
                        content={getContent('all-informasjon/når-kan-du-søke/mor', lang)}
                    />
                    <Fact
                        icon={farSvg}
                        content={getContent(
                            'all-informasjon/når-kan-du-søke/far-eller-medmor',
                            lang
                        )}
                    />
                    <Fact
                        icon={adopsjonSvg}
                        content={getContent('all-informasjon/når-kan-du-søke/adopsjon', lang)}
                    />
                </FactsWithIcon>
                <Undertittel>
                    {getTranslation('om_foreldrepenger.når_kan_du_søke.hvis_du_skal_utsette', lang)}
                </Undertittel>
                <Tabs kompakt={true} tabs={tabs} onChange={this.onTabChange} />
                {this.state.currentTabContent}
                <Undertittel>
                    {getTranslation(
                        'om_foreldrepenger.når_kan_du_søke.hvis_jeg_søker_for_sent',
                        lang
                    )}
                </Undertittel>
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
