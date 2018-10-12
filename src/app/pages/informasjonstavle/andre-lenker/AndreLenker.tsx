import * as React from 'react';
import { WithLink } from '../../../utils/withLink';
import BEMHelper from '../../../utils/bem';
import TypografiBase from 'nav-frontend-typografi';
import { getTranslation, IntlProps, withIntl } from '../../../intl/intl';
import './andreLenker.less';

const links = [
    {
        label: 'antatt_saksbehandlingstid',
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
        label: 'klager',
        href: 'www.nav.no'
    },
    {
        label: 'viktige_frister',
        href: '/viktige-frister',
        internal: true
    },
    {
        label: 'regelverk',
        href: 'www.nav.no'
    }
];

const cls = BEMHelper('andreLenker');

const AndreLenker: React.StatelessComponent<IntlProps> = ({ lang }) => {
    const otherLinks = links.map((link) => (
        <div key={link.label} className={cls.element('linkContainer')}>
            <WithLink url={link.href} urlIsExternal={!link.internal} addExternalIcon={true}>
                <TypografiBase type="normaltekst">{getTranslation(link.label, lang)}</TypografiBase>
            </WithLink>
        </div>
    ));

    return (
        <div className={cls.className}>
            <TypografiBase type="undertittel">{getTranslation('andre_lenker', lang)}</TypografiBase>
            <nav className={cls.element('links')}>{otherLinks}</nav>
        </div>
    );
};

export default withIntl(AndreLenker);
