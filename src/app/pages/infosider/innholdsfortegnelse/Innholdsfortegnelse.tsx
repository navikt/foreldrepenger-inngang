import * as React from 'react';
import { Panel } from 'nav-frontend-paneler';
import BEMHelper from 'app/utils/bem';
import classnames from 'classnames';
import Lenkeknapp from 'app/components/lenkeknapp/Lenkeknapp';
import Seksjonslenker from '../seksjonslenker/Seksjonslenker';
import SvgMask from 'app/components/svg-mask/SvgMask';
import './innholdsfortegnelse.less';

const cls = BEMHelper('innholdsfortegnelse');
const icon = require('../../../assets/icons/rakett.svg').default;

interface Props {
    sections: string[];
    button: {
        label: string;
        url: string;
    };
}

const Innholdsfortegnelse: React.StatelessComponent<Props> = ({ sections, button }) => {
    return (
        <Panel className={classnames(cls.className)}>
            <div className={cls.element('icon')}>
                <SvgMask small={true} svg={icon} />
            </div>
            <Seksjonslenker sections={sections} />
            <Lenkeknapp type="hoved" url={button.url} urlIsExternal={true}>
                {button.label}
            </Lenkeknapp>
        </Panel>
    );
};

export default Innholdsfortegnelse;
