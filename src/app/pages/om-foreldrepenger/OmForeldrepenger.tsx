import * as React from 'react';
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs';
import BEMHelper from '../../utils/bem';
import { getTranslation, IntlProps, withIntl } from '../../intl/intl';
import HvaErForeldrepenger from './hva-er-foreldrepenger/HvaErForeldrepenger';
import NyeRegler from './nye-regler/NyeRegler';
import ForÅFåForeldrepenger from './for-å-få-foreldrepenger/ForÅFåForeldrepenger';
import JegHarHattInntekt from './jeg-har-hatt-inntekt/JegHarHattInntekt';
import JegVilJobbe from './jeg-vil-jobbe/JegVilJobbe';
import Sykdom from './sykdom/Sykdom';
import Ferie from './ferie/Ferie';
import Adopsjon from './adopsjon/Adopsjon';
import Sidebanner from '../../components/sidebanner/Sidebanner';
import Beregning from './beregning/Beregning';
import HjemmeSamtidig from './hjemme-samtidig/HjemmeSamtidig';
import Hurtiglenker from './hurtiglenker/Hurtiglenker';
import MediaQuery from 'react-responsive';
import HeaderInformasjon from '../../components/header-informasjon/HeaderInformasjon';
import './omForeldrepenger.less';
import Hjelp from '../../components/hjelpe-seksjon/HjelpeSeksjon';

const cls = BEMHelper('infosider');

interface Props {
    location: any;
}

const sections = [
    'hvem-kan-fa-foreldrepenger',
    'hvor-lenge-kan-jeg-fa-foreldrepenger',
    'hva-kan-jeg-fa',
    'hvis-du-skal-pa-ferie',
    'hvis-du-vil-jobbe',
    'hvis-en-av-dere-blir-syke',
    'hjemme-samtidig',
    'andre-inntekter-som-gir-rett',
    'adoptere'
];

const OmForeldrepengerHeader = () => {
    return (
        <HeaderInformasjon
            title={'Om foreldrepenger - wwww.nav.no'}
            siteDescription={'finn ut hva du har rett til av foreldrepenger'}
            propTitle={'om foreldrepenger'}
            propDescription={'finn ut hva du har rett til av foreldrepenger'}
            siteUrl={'https://familie.nav.no/om-foreldrepenger'}
        />
    );
};

const OmForeldrepenger: React.StatelessComponent<Props & IntlProps> = ({ location, lang }) => {
    return (
        <div className={cls.className}>
            <OmForeldrepengerHeader />
            <Sidebanner text={getTranslation('om_foreldrepenger.tittel', lang)} />
            <main className={cls.element('body')}>
                <article className={cls.element('content')}>
                    <Breadcrumbs path={location.pathname} />
                    <MediaQuery query="(min-width: 800px)">
                        <Hurtiglenker links={sections} />
                    </MediaQuery>
                    <ForÅFåForeldrepenger id={sections[0]} />
                    <HvaErForeldrepenger id={sections[1]} />
                    <NyeRegler />
                    <Beregning id={sections[2]} />
                    <Ferie id={sections[3]} />
                    <JegVilJobbe id={sections[4]} />
                    <Sykdom id={sections[5]} />
                    <HjemmeSamtidig id={sections[6]} />
                    <JegHarHattInntekt id={sections[7]} />
                    <Adopsjon id={sections[8]} />
                    <Hjelp />
                </article>
            </main>
        </div>
    );
};

export default withIntl(OmForeldrepenger);
