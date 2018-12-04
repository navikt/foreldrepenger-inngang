import * as React from 'react';
import PanelMedIllustrasjon from '../../../components/panel-med-illustrasjon/PanelMedIllustrasjon';
import { getTranslation, withIntl, IntlProps } from '../../../intl/intl';
import StrukturertTekst from '../../../components/strukturert-tekst/StrukturertTekst';
import BEMHelper from '../../../utils/bem';
import './jegVilJobbe.less';
import { getContent } from '../../../utils/getContent';
import Tabs from 'nav-frontend-tabs';
import JobbeHeltid from "./JobbeHeltid";
import JobbeDelvis from "./JobbeDelvis";
import {ReactNode} from "react";

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


interface Props {
    id: string;
}

type p = Props & IntlProps;

class JegVilJobbe extends React.Component <p> {
    state: {
      currentTab: ReactNode
    };

    constructor(props: p) {
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
                 label: this.updateContent[index],
                    children: (
                      <div key={fane.label}>
                          {getTranslation(fane.label, this.props.lang)}
                      </div>
                    ),
                    onClick: this.updateContent[index]
                }))}
                onChange={this.updateContent}
            />
            {this.state.currentTab}
        </PanelMedIllustrasjon>
    );
};

export default withIntl(JegVilJobbe);
