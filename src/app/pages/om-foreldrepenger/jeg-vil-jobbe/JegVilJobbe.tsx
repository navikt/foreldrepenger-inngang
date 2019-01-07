import PanelMedIllustrasjon from '../../../components/panel-med-illustrasjon/PanelMedIllustrasjon';
import { InjectedIntlProps, injectIntl } from 'react-intl';
import Innhold, { getSource } from 'app/utils/innhold/Innhold';
import BEMHelper from '../../../utils/bem';
import './jegVilJobbe.less';

import Tabs from 'nav-frontend-tabs';
import JobbeHeltid from './JobbeHeltid';
import JobbeDelvis from './JobbeDelvis';
import * as React from 'react';
import getTranslation from 'app/utils/i18nUtils';

const content = 'om-foreldrepenger/jeg-vil-jobbe/jeg-vil-jobbe';
const jobbeSvg = require('../../../assets/ark/ark-jobbe.svg').default;
const cls = BEMHelper('jegVilJobbe');

const faner = [
    {
        label: 'om_foreldrepenger.jobbe.fanetittel.jobbeHeltid',
        content: <JobbeHeltid />
    },
    {
        label: 'om_foreldrepenger.jobbe.fanetittel.jobbeDelvis',
        content: <JobbeDelvis />
    }
];

interface OwnProps {
    id: string;
}

type Props = OwnProps & InjectedIntlProps;

class JegVilJobbe extends React.Component<Props> {
    state: {
        currentTab: React.ReactNode;
    };

    constructor(props: Props) {
        super(props);
        this.state = {
            currentTab: faner[0].content
        };
    }

    updateContent = (e: any, index: number): void => {
        this.setState({ currentTab: faner[index].content });
    };

    render = () => (
        <PanelMedIllustrasjon
            id={this.props.id}
            className={cls.className}
            title={getTranslation('om_foreldrepenger.jobbe.tittel', this.props.intl)}
            svg={jobbeSvg}>
            <Innhold className="blokk-m" source={getSource(content, this.props.intl)} />
            <Tabs
                kompakt={true}
                defaultAktiv={0}
                tabs={faner.map((fane, index) => ({
                    label: getTranslation(fane.label, this.props.intl)
                }))}
                onChange={this.updateContent}
            />
            {this.state.currentTab}
            <Innhold
                source={getSource(
                    'om-foreldrepenger/jeg-vil-jobbe/slik-går-du-frem',
                    this.props.intl
                )}
            />
        </PanelMedIllustrasjon>
    );
}

export default injectIntl(JegVilJobbe);
