import * as React from 'react';
import classnames from 'classnames';
import { Panel } from 'nav-frontend-paneler';
import { Hovedknapp } from 'nav-frontend-knapper';

import BEMHelper from 'app/utils/bem';
import Seksjonslenker from '../seksjonslenker/Seksjonslenker';
import SvgMask from 'app/components/svg-mask/SvgMask';
import WithLink from 'app/components/with-link/WithLink';
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
            <WithLink url={button.url} noStyling={true} urlIsExternal={true}>
                <Hovedknapp className={cls.element('søkNå')}>{button.label}</Hovedknapp>
            </WithLink>
        </Panel>
    );
};

export default Innholdsfortegnelse;
