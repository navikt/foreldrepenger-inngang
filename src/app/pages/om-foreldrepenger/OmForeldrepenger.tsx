import * as React from 'react';
import { getContent } from 'app/utils/getContent';
import { InjectedIntlProps, injectIntl } from 'react-intl';
import Adopsjon from './adopsjon/Adopsjon';
import BEMHelper from '../../utils/bem';
import Beregning from './beregning/Beregning';
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs';
import classnames from 'classnames';
import Environment from 'app/Environment';
import Ferie from './ferie/Ferie';
import getTranslation from 'app/utils/i18nUtils';
import HeaderInformasjon from '../../components/header-informasjon/HeaderInformasjon';
import Hjelp from '../../components/hjelpe-seksjon/HjelpeSeksjon';
import HjemmeSamtidig from './hjemme-samtidig/HjemmeSamtidig';
import HvemKanFåForeldrepenger from './hvem-kan-få/HvemKanFåForeldrepenger';
import HvorLenge from './hvor-lenge/HvorLenge';
import Informasjonsbanner from '../infosider/informasjonsbanner/Informasjonsbanner';
import JegVilJobbe from './jeg-vil-jobbe/JegVilJobbe';
import MedInnholdsfortegnelse from '../infosider/MedInnholdsfortegnelse';
import NårKanDuSøke from './når-kan-du-søke/NårKanDuSøke';
import NyeRegler from './nye-regler/NyeRegler';
import Sidebanner from '../../components/sidebanner/Sidebanner';
import Sykdom from './sykdom/Sykdom';
import '../infosider/infosider.less';

const cls = BEMHelper('infosider');

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

const OmForeldrepenger: React.StatelessComponent<Props & InjectedIntlProps> = ({
    location,
    intl
}) => {
    return (
        <div className={classnames(cls.className)}>
            <HeaderInformasjon
                title="Om foreldrepenger"
                description="Foreldrepenger skal sikre deg inntekt når du ha foreldrepermisjon. Hvis du ikke hatt inntekt, kan du få en engangssum isteden."
                siteUrl="https://familie.nav.no/om-foreldrepenger"
            />
            <Sidebanner text={getTranslation('om_foreldrepenger.tittel', intl)} />
            <MedInnholdsfortegnelse
                sections={sections}
                button={{
                    label: getTranslation('innholdsfortegnelse.søk_nå', intl),
                    url: Environment.SOK_FORELDREPENGER_URL
                }}>
                <article className={cls.element('article')}>
                    <Breadcrumbs path={location.pathname} />
                    <Informasjonsbanner
                        tekst={getContent('om-foreldrepenger/nye-regler-fra-2019', intl)}
                    />
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
            </MedInnholdsfortegnelse>
        </div>
    );
};

export default injectIntl(OmForeldrepenger);
