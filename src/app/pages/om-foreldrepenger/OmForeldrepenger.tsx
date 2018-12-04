import * as React from 'react';
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs';
import BEMHelper from '../../utils/bem';
import { getTranslation, IntlProps, withIntl } from '../../intl/intl';
import HvorLenge from './hvor-lenge/HvorLenge';
import NyeRegler from './nye-regler/NyeRegler';
import ForÅFåForeldrepenger from './for-å-få-foreldrepenger/ForÅFåForeldrepenger';
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

const cls = BEMHelper('infosider');

interface Props {
    location: any;
}

export type ForeldrepengerSection =
    | 'hvem-kan-fa-foreldrepenger'
    | 'hvor-lenge-kan-jeg-fa-foreldrepenger'
    | 'hva-kan-jeg-fa'
    | 'når-kan-jeg-søke'
    | 'hvis-du-skal-pa-ferie'
    | 'hvis-du-vil-jobbe'
    | 'hvis-en-av-dere-blir-syke'
    | 'hjemme-samtidig'
    | 'adoptere';

const sections: ForeldrepengerSection[] = [
    'hvem-kan-fa-foreldrepenger',
    'hvor-lenge-kan-jeg-fa-foreldrepenger',
    'hva-kan-jeg-fa',
    'når-kan-jeg-søke',
    'hvis-du-skal-pa-ferie',
    'hvis-du-vil-jobbe',
    'hvis-en-av-dere-blir-syke',
    'hjemme-samtidig',
    'adoptere'
];

const OmForeldrepengerHeader = () => {
    return (
        <HeaderInformasjon
            title={'Om foreldrepenger - wwww.nav.no'}
            siteDescription={
                'Foreldrepenger skal sikre deg inntekt når du ha foreldrepermisjon. Hvis du ikke hatt inntekt, kan du få en engangssum isteden.'
            }
            propTitle={'Om foreldrepenger'}
            propDescription={
                'Foreldrepenger skal sikre deg inntekt når du ha foreldrepermisjon. Hvis du ikke hatt inntekt, kan du få en engangssum isteden.'
            }
            siteUrl={'https://familie.nav.no/om-foreldrepenger'}
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
                        <Innholdsfortegnelse sections={sections} />
                    </aside>
                </MediaQuery>
                <MediaQuery maxWidth={1071}>
                    <Mobilmeny sections={sections} />
                </MediaQuery>
                <article className={cls.element('article')}>
                    <Breadcrumbs path={location.pathname} />
                    <ForÅFåForeldrepenger id={sections[0]} />
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

export default withIntl(OmForeldrepenger);
