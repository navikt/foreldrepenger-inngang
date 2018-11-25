import * as React from 'react';
import { WithLink } from '../../../utils/withLink';
import BEMHelper from '../../../utils/bem';
import TypografiBase from 'nav-frontend-typografi';
import { getTranslation, IntlProps, withIntl } from '../../../intl/intl';
import './andreLenker.less';
import Environment from 'app/Environment';

const links = [
    {
        label: 'informasjonstavle.andre_lenker.ettersende_vedlegg_til_søknad',
        href: Environment.DINE_FORELDREPENGER_URL
    },
    {
        label: 'informasjonstavle.andre_lenker.hvis_du_skal_på_ferie',
        internal: true,
        href: '/om-foreldrepenger#hvis-du-skal-pa-ferie'
    },
    {
        label: 'informasjonstavle.andre_lenker.hvis_du_vil_jobbe',
        internal: true,
        href: '/om-foreldrepenger#hvis-du-vil-jobbe'
    },
    {
        label: 'informasjonstavle.andre_lenker.hvis_en_av_dere_blir_syke',
        internal: true,
        href: '/om-foreldrepenger#hvis-en-av-dere-blir-syke'
    },
    {
        label: 'informasjonstavle.andre_lenker.husk_å_søke_i_rett_tid',
        internal: true,
        href: '/viktige-frister'
    },
    {
        label: 'informasjonstavle.andre_lenker.meld_fra_om_endringer',
        href:
            'https://www.nav.no/no/NAV+og+samfunn/Om+NAV/Relatert+informasjon/du-har-plikt-til-%C3%A5-gi-nav-riktige-opplysninger'
    },
    {
        label: 'informasjonstavle.andre_lenker.opphold_i_utlandet',
        href: 'https://www.nav.no/no/Person/Familie/Relatert+informasjon/foreldrepenger-og-utland'
    },
    {
        label: 'informasjonstavle.andre_lenker.regelverk',
        href:
            'https://www.nav.no/rettskildene/Forside/Folketrygdloven/kapittel-14-ytelser-ved-svangerskap-f%C3%B8dsel-og-adopsjon'
    },
    {
        label: 'informasjonstavle.andre_lenker.slik_klager_du',
        href: 'https://www.nav.no/no/NAV+og+samfunn/Kontakt+NAV/Klage+ris+og+ros/Klagerettigheter'
    }
];

const cls = BEMHelper('andreLenker');

const AndreLenker: React.StatelessComponent<IntlProps> = ({ lang }) => {
    const otherLinks = links.map((link) => (
        <div key={link.label} className={cls.element('linkContainer')}>
            <TypografiBase type="normaltekst">
                <WithLink url={link.href} urlIsExternal={!link.internal} addExternalIcon={true}>
                    {getTranslation(link.label, lang)}
                </WithLink>
            </TypografiBase>
        </div>
    ));

    return (
        <div className={cls.className}>
            <TypografiBase type="undertittel">
                {getTranslation('informasjonstavle.andre_lenker.tittel', lang)}
            </TypografiBase>
            <nav className={cls.element('links')}>{otherLinks}</nav>
        </div>
    );
};

export default withIntl(AndreLenker);
