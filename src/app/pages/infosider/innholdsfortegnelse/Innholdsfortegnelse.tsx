import React, { useRef } from 'react';
import BEMHelper from 'app/utils/bem';
import classnames from 'classnames';
import Lenkeknapp from 'app/components/lenkeknapp/Lenkeknapp';
import Seksjonslenker from '../seksjonslenker/Seksjonslenker';
import SvgMask from 'app/components/svg-mask/SvgMask';
import useComponentSize from 'app/hooks/useComponentSize';
import './innholdsfortegnelse.less';
import WithLink from 'app/components/with-link/WithLink';
import TypografiBase from 'nav-frontend-typografi';

const cls = BEMHelper('innholdsfortegnelse');
const icon = require('../../../assets/icons/rakett.svg').default;

interface Props {
    sections: string[];
    link: {
        label: string;
        url: string;
    };
    button: {
        label: string;
        url: string;
    };
}

const Innholdsfortegnelse: React.FunctionComponent<Props> = ({ sections, link, button }) => {
    const ref = useRef(null);
    const { height } = useComponentSize(ref);

    return (
        <div
            ref={ref}
            className={classnames('panel', cls.block)}
            style={{
                top: `calc(50% - ${height / 2}px)`,
            }}
        >
            <div className={cls.element('icon')}>
                <SvgMask small={true} svg={icon} />
            </div>
            <Seksjonslenker sections={sections} />
            <WithLink url={link.url} urlIsExternal={true} addExternalIcon={true} className={cls.element('link')}>
                <TypografiBase type="normaltekst">{link.label}</TypografiBase>
            </WithLink>
            <Lenkeknapp type="hoved" url={button.url} urlIsExternal={true}>
                {button.label}
            </Lenkeknapp>
        </div>
    );
};

export default Innholdsfortegnelse;
