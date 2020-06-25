import * as React from 'react';
import { ForeldrepengerSection } from 'app/types/Section';
import { getForeldrepengerSectionUrl } from 'app/utils/pageUtils';
import { InjectedIntlProps, injectIntl } from 'react-intl';
import { Page } from 'app/types/Page';
import BEMHelper from '../../../utils/bem';
import Environment from '../../../Environment';
import getTranslation from 'app/utils/i18nUtils';
import TypografiBase from 'nav-frontend-typografi';
import WithLink from '../../../components/with-link/WithLink';
import './andreLenker.less';

const links = [
    {
        label: 'informasjonstavle.andre_lenker.dokumentasjon',
        internal: true,
        href: Page.Dokumentasjon
    },
    {
        label: 'informasjonstavle.andre_lenker.ettersende_vedlegg_til_søknad',
        href: Environment.DINE_FORELDREPENGER_URL
    },
    {
        label: 'informasjonstavle.andre_lenker.informasjon_om_kontantstøtte',
        href: 'https://www.nav.no/no/person/familie/barnetrygd-og-kontantstotte/kontantstotte2'
    },
    {
        label: 'informasjonstavle.andre_lenker.ofte_stilte_spørsmål',
        internal: true,
        href: getForeldrepengerSectionUrl(ForeldrepengerSection.OfteStilteSpørsmål)
    },
    {
        label: 'informasjonstavle.andre_lenker.hvis_en_av_dere_blir_syke',
        internal: true,
        href: getForeldrepengerSectionUrl(ForeldrepengerSection.HvisEnAvDereBlirSyke)
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
        href: 'https://lovdata.no/nav/folketrygdloven/kap14'
    },
    {
        label: 'informasjonstavle.andre_lenker.slik_klager_du',
        href: 'https://www.nav.no/no/NAV+og+samfunn/Kontakt+NAV/Klage+ris+og+ros/Klagerettigheter'
    }
];

const cls = BEMHelper('andreLenker');

const AndreLenker: React.StatelessComponent<InjectedIntlProps> = ({ intl }) => {
    const otherLinks = links.map((link) => (
        <div key={link.label} className={cls.element('linkContainer')}>
            <TypografiBase type="normaltekst">
                <WithLink url={link.href} urlIsExternal={!link.internal} addExternalIcon={true}>
                    {getTranslation(link.label, intl)}
                </WithLink>
            </TypografiBase>
        </div>
    ));

    return <nav className={cls.block}>{otherLinks}</nav>;
};

export default injectIntl(AndreLenker);
