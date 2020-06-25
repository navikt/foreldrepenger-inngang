import * as React from 'react';
import { injectIntl, IntlShape } from 'react-intl';
import BEMHelper from '../../../utils/bem';
import getTranslation from 'app/utils/i18nUtils';
import Innhold, { getSource } from 'app/utils/innhold/Innhold';
import JobbeDelvis from './JobbeDelvis';
import JobbeHeltid from './JobbeHeltid';
import PanelMedIllustrasjon from '../../../components/panel-med-illustrasjon/PanelMedIllustrasjon';
import Tabs from 'nav-frontend-tabs';
import './jegVilJobbe.less';

const content = 'om-foreldrepenger/jeg-vil-jobbe/jeg-vil-jobbe';
const jobbeSvg = require('../../../assets/ark/ark-jobbe.svg').default;
const cls = BEMHelper('jegVilJobbe');

const faner = [
    {
        label: 'om_foreldrepenger.jobbe.fanetittel.jobbeHeltid',
        content: <JobbeHeltid />,
    },
    {
        label: 'om_foreldrepenger.jobbe.fanetittel.jobbeDelvis',
        content: <JobbeDelvis />,
    },
];

interface OwnProps {
    id: string;
}

interface InjectedProps {
    intl: IntlShape;
}

type Props = OwnProps & InjectedProps;

class JegVilJobbe extends React.Component<Props> {
    state: {
        currentTab: React.ReactNode;
    };

    constructor(props: Props) {
        super(props);
        this.state = {
            currentTab: faner[0].content,
        };
    }

    updateContent = (_e: any, index: number): void => {
        this.setState({ currentTab: faner[index].content });
    };

    render = () => (
        <PanelMedIllustrasjon
            id={this.props.id}
            className={cls.block}
            title={getTranslation('om_foreldrepenger.jobbe.tittel', this.props.intl)}
            svg={jobbeSvg}
        >
            <Innhold className="blokk-m" source={getSource(content, this.props.intl)} />
            <Tabs
                kompakt={true}
                defaultAktiv={0}
                tabs={faner.map((fane) => ({
                    label: getTranslation(fane.label, this.props.intl),
                }))}
                onChange={this.updateContent}
            />
            {this.state.currentTab}
            <Innhold source={getSource('om-foreldrepenger/jeg-vil-jobbe/slik-går-du-frem', this.props.intl)} />
        </PanelMedIllustrasjon>
    );
}

export default injectIntl(JegVilJobbe);
