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

const cls = BEMHelper('infosider');

interface Props {
    location: any;
}

export type ForeldrepengerSection =
    | 'hvem-kan-fa-foreldrepenger'
    | 'hvor-lenge-kan-jeg-fa-foreldrepenger'
    | 'hva-kan-jeg-fa'
    | 'hvis-du-skal-pa-ferie'
    | 'hvis-du-vil-jobbe'
    | 'hvis-en-av-dere-blir-syke'
    | 'hjemme-samtidig'
    | 'adoptere';

const sections: ForeldrepengerSection[] = [
    'hvem-kan-fa-foreldrepenger',
    'hvor-lenge-kan-jeg-fa-foreldrepenger',
    'hva-kan-jeg-fa',
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
        <div className={classnames(cls.className, cls.modifier('withSidebar'))}>
            <OmForeldrepengerHeader />
            <Sidebanner text={getTranslation('om_foreldrepenger.tittel', lang)} />
            <main className={cls.element('body')}>
                <article className={cls.element('content')}>
                    <Breadcrumbs path={location.pathname} />
                    <div className={cls.element('sidebar')}>
                        <Innholdsfortegnelse sections={sections} />
                    </div>
                    <ForÅFåForeldrepenger id={sections[0]} />
                    <HvorLenge id={sections[1]} />
                    <NyeRegler />
                    <Beregning id={sections[2]} />
                    <Ferie id={sections[3]} />
                    <JegVilJobbe id={sections[4]} />
                    <Sykdom id={sections[5]} />
                    <HjemmeSamtidig id={sections[6]} />
                    <Adopsjon id={sections[7]} />
                    <Hjelp />
                </article>
            </main>
        </div>
    );
};

export default withIntl(OmForeldrepenger);
