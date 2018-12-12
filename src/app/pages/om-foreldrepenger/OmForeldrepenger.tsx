import * as React from 'react';
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs';
import BEMHelper from '../../utils/bem';
import { getTranslation, IntlProps, withIntl, Language } from '../../intl/intl';
import HvorLenge from './hvor-lenge/HvorLenge';
import NyeRegler from './nye-regler/NyeRegler';
import HvemKanFåForeldrepenger from './hvem-kan-få/HvemKanFåForeldrepenger';
import JegVilJobbe from './jeg-vil-jobbe/JegVilJobbe';
import Sykdom from './sykdom/Sykdom';
import Ferie from './ferie/Ferie';
import Adopsjon from './adopsjon/Adopsjon';
import Sidebanner from '../../components/sidebanner/Sidebanner';
import Beregning from './beregning/Beregning';
import HjemmeSamtidig from './hjemme-samtidig/HjemmeSamtidig';
import HeaderInformasjon from '../../components/header-informasjon/HeaderInformasjon';
import classnames from 'classnames';
import './omForeldrepenger.less';
import Hjelp from '../../components/hjelpe-seksjon/HjelpeSeksjon';
import Innholdsfortegnelse from './innholdsfortegnelse/Innholdsfortegnelse';
import MediaQuery from 'react-responsive';
import Mobilmeny from './mobilmeny/Mobilmeny';
import NårKanDuSøke from './når-kan-du-søke/NårKanDuSøke';
import Environment from 'app/Environment';
import { AlertStripeInfo } from 'nav-frontend-alertstriper';
import StrukturertTekst from 'app/components/strukturert-tekst/StrukturertTekst';
import { getContent } from 'app/utils/getContent';

const cls = BEMHelper('infosider');
const omForeldrepengerCls = BEMHelper('omForeldrepenger');

interface Props {
    location: any;
}

export type ForeldrepengerSection =
    | 'hvem-kan-fa-foreldrepenger'
    | 'hvor-lenge-kan-du-fa-foreldrepenger'
    | 'hva-kan-du-fa'
    | 'nar-kan-du-soke'
    | 'hvis-du-skal-pa-ferie'
    | 'hvis-du-vil-jobbe'
    | 'hvis-en-av-dere-blir-syke'
    | 'hjemme-samtidig'
    | 'adoptere';

const sections: ForeldrepengerSection[] = [
    'hvem-kan-fa-foreldrepenger',
    'hvor-lenge-kan-du-fa-foreldrepenger',
    'hva-kan-du-fa',
    'nar-kan-du-soke',
    'hvis-du-skal-pa-ferie',
    'hvis-du-vil-jobbe',
    'hvis-en-av-dere-blir-syke',
    'hjemme-samtidig',
    'adoptere'
];

const OmForeldrepengerHeader = () => {
    return (
        <HeaderInformasjon
            title="Om foreldrepenger"
            description="Foreldrepenger skal sikre deg inntekt når du ha foreldrepermisjon. Hvis du ikke hatt inntekt, kan du få en engangssum isteden."
            siteUrl="https://familie.nav.no/om-foreldrepenger"
        />
    );
};

const OmForeldrepenger: React.StatelessComponent<Props & IntlProps> = ({ location, lang }) => {
    return (
        <div className={classnames(cls.className)}>
            <OmForeldrepengerHeader />
            <Sidebanner text={getTranslation('om_foreldrepenger.tittel', lang)} />
            <div className={classnames(cls.element('container'), cls.modifier('withSidebar'))}>
                <MediaQuery minWidth={1072}>
                    <aside className={cls.element('sidebar')}>
                        <Innholdsfortegnelse
                            sections={sections}
                            søkeUrl={Environment.SOK_FORELDREPENGER_URL}
                        />
                    </aside>
                </MediaQuery>
                <MediaQuery maxWidth={1071}>
                    <Mobilmeny sections={sections} />
                </MediaQuery>
                <article className={cls.element('article')}>
                    <Breadcrumbs path={location.pathname} />
                    <NyeReglerFra2019 lang={lang} />
                    <HvemKanFåForeldrepenger id={sections[0]} />
                    <HvorLenge id={sections[1]} />
                    <NyeRegler />
                    <Beregning id={sections[2]} />
                    <NårKanDuSøke id={sections[3]} />
                    <Ferie id={sections[4]} />
                    <JegVilJobbe id={sections[5]} />
                    <Sykdom id={sections[6]} />
                    <HjemmeSamtidig id={sections[7]} />
                    <Adopsjon id={sections[8]} />
                    <Hjelp />
                </article>
                <div className={cls.element('filler')} />
            </div>
        </div>
    );
};

const NyeReglerFra2019 = ({ lang }: { lang: Language }) => (
    <AlertStripeInfo className={omForeldrepengerCls.element('nyeRegler2019')}>
        <StrukturertTekst tekst={getContent('om-foreldrepenger/nye-regler-fra-2019', lang)} />
    </AlertStripeInfo>
);

export default withIntl(OmForeldrepenger);
