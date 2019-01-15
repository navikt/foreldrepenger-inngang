import * as React from 'react';
import { InjectedIntlProps, injectIntl } from 'react-intl';
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
        href: '/dokumentasjon'
    },
    {
        label: 'informasjonstavle.andre_lenker.ettersende_vedlegg_til_søknad',
        href: Environment.DINE_FORELDREPENGER_URL
    },
    {
        label: 'informasjonstavle.andre_lenker.informasjon_om_kontantstøtte',
        href: 'https://www.nav.no/no/Person/Familie/Barnetrygd+og+kontantstotte/kontantst%C3%B8tte'
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

    return <nav className={cls.className}>{otherLinks}</nav>;
};

export default injectIntl(AndreLenker);
