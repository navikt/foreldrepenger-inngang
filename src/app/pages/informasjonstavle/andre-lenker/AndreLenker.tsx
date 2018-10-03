import * as React from 'react';
import { WithLink } from '../../../utils/withLink';
import BEMHelper from '../../../utils/bem';
import TypografiBase from 'nav-frontend-typografi';
import translate from '../../../intl/translate';
import './andreLenker.less';
import CustomSVG from '../../../utils/CustomSVG';

const links = [
    {
        label: 'antatt_saksbehandlingstid',
        href: 'www.nav.no'
    },
    {
        label: 'kontakt_oss',
        href: 'www.nav.no'
    },
    {
        label: 'utbetalinger',
        href: 'www.nav.no'
    },
    {
        label: 'foreldrepenger_hvis_utland',
        href: 'www.nav.no'
    },
    {
        label: 'meld_fra_om_endringer',
        href: 'www.nav.no'
    },
    {
        label: 'viktige_frister',
        href: 'www.nav.no',
        internal: true
    },
    {
        label: 'klager',
        href: 'www.nav.no'
    },
    {
        label: 'regelverk',
        href: 'www.nav.no'
    }
];

const externalLinkIcon = require('../../../assets/icons/external.svg').default;
const cls = BEMHelper('andreLenker');

const AndreLenker = () => {
    const otherLinks = links.map((link) => (
        <div key={link.label} className={cls.element('linkContainer')}>
            <WithLink url={link.href} urlIsExternal={!link.internal}>
                <TypografiBase type="normaltekst">{translate(link.label)}</TypografiBase>
                {!link.internal && (
                    <span className={cls.element('linkIcon')}>
                        <CustomSVG size={18} iconRef={externalLinkIcon} />
                    </span>
                )}
            </WithLink>
        </div>
    ));

    return (
        <div className={cls.className}>
            <TypografiBase type="undertittel">{translate('andre_lenker')}</TypografiBase>
            <div role="navigation" className={cls.element('links')}>
                {otherLinks}
            </div>
        </div>
    );
};

export default AndreLenker;
