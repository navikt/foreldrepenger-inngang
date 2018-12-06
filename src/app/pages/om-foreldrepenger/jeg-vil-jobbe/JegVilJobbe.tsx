import PanelMedIllustrasjon from '../../../components/panel-med-illustrasjon/PanelMedIllustrasjon';
import { getTranslation, withIntl, IntlProps } from '../../../intl/intl';
import StrukturertTekst from '../../../components/strukturert-tekst/StrukturertTekst';
import BEMHelper from '../../../utils/bem';
import './jegVilJobbe.less';
import { getContent } from '../../../utils/getContent';
import Tabs from 'nav-frontend-tabs';
import JobbeHeltid from "./JobbeHeltid";
import JobbeDelvis from "./JobbeDelvis";
import * as React from "react";

const content = 'all-informasjon/jeg-vil-jobbe/jeg-vil-jobbe';
const jobbeSvg = require('../../../assets/ark/ark-jobbe.svg').default;
const cls = BEMHelper('jegVilJobbe');

const faner = [
    {
        label: 'om_foreldrepenger.jobbe.fanetittel.jobbeHeltid',
        content: <JobbeHeltid/>,
    },
    {
        label: 'om_foreldrepenger.jobbe.fanetittel.jobbeDelvis',
        content: <JobbeDelvis/>,
    }
];

interface OwnProps {
    id: string;
}

type Props = OwnProps & IntlProps;

class JegVilJobbe extends React.Component <Props> {
    state: {
      currentTab: React.ReactNode
    };

    constructor(props: Props) {
        super(props);
        this.state = {
            currentTab: faner[0].content,
        }
    }

    updateContent = (e: any, index: number) : void => {
        this.setState({currentTab: faner[index].content})
    };

    render = () => (
        <PanelMedIllustrasjon
            id={this.props.id}
            className={cls.className}
            title={getTranslation('om_foreldrepenger.jobbe.tittel', this.props.lang)}
            svg={jobbeSvg}>
            <StrukturertTekst tekst={getContent(content, this.props.lang)} />
            <Tabs
                kompakt={true}
                defaultAktiv={0}
                tabs={faner.map((fane, index) => ({
                 label: getTranslation(fane.label, this.props.lang),
                }))}
                onChange={this.updateContent}
            />
            {this.state.currentTab}
        </PanelMedIllustrasjon>
    );
};

export default withIntl(JegVilJobbe);
