import * as React from 'react';
import classnames from 'classnames';
import { Panel } from 'nav-frontend-paneler';
import { Hovedknapp } from 'nav-frontend-knapper';

import BEMHelper from 'app/utils/bem';
import Seksjonslenker from '../seksjonslenker/Seksjonslenker';
import SvgMask from 'app/components/svg-mask/SvgMask';
import { getTranslation, withIntl, Language } from 'app/intl/intl';
import { ForeldrepengerSection } from '../OmForeldrepenger';
import { WithLink } from 'app/utils/withLink';
import './innholdsfortegnelse.less';

const cls = BEMHelper('innholdsfortegnelse');
const icon = require('../../../assets/icons/rakett.svg').default;

interface Props {
    sections: ForeldrepengerSection[];
    lang: Language;
}

const Innholdsfortegnelse: React.StatelessComponent<Props> = ({ lang, sections }) => {
    return (
        <Panel className={classnames(cls.className)}>
            <div className={cls.element('icon')}>
                <SvgMask small={true} svg={icon} />
            </div>
            <Seksjonslenker sections={sections} />
            <WithLink url="/hva-soker-du/foreldrepenger" noStyling={true}>
                <Hovedknapp className={cls.element('søkNå')}>
                    {getTranslation('innholdsfortegnelse.søk_nå', lang)}
                </Hovedknapp>
            </WithLink>
        </Panel>
    );
};

export default withIntl(Innholdsfortegnelse);
