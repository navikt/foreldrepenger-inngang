import * as React from 'react';
import { InjectedIntlProps, injectIntl } from 'react-intl';
import { ForeldrepengerSection as Section } from 'app/types/Section';
import Adopsjon from './adopsjon/Adopsjon';
import BEMHelper from '../../utils/bem';
import Beregning from './beregning/Beregning';
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs';
import classnames from 'classnames';
import Environment from 'app/Environment';
import Ferie from './ferie/Ferie';
import getTranslation from 'app/utils/i18nUtils';
import HeaderInformasjon from '../../components/header-informasjon/HeaderInformasjon';
import HjemmeSamtidig from './hjemme-samtidig/HjemmeSamtidig';
import HvemKanFåForeldrepenger from './hvem-kan-få/HvemKanFåForeldrepenger';
import HvorLenge from './hvor-lenge/HvorLenge';
import JegVilJobbe from './jeg-vil-jobbe/JegVilJobbe';
import MedInnholdsfortegnelse from '../infosider/MedInnholdsfortegnelse';
import NårKanDuSøke from './når-kan-du-søke/NårKanDuSøke';
import OfteStilteSpørsmål from './ofte-stilte-spørsmål/OfteStilteSpørsmål';
import Sidebanner from '../../components/sidebanner/Sidebanner';
import Sykdom from './sykdom/Sykdom';
import Opptjening from './opptjening/Opptjening';
import EtterDuHarSøkt from './etter-du-har-søkt/EtterDuHarSøkt';
import '../infosider/infosider.less';

const cls = BEMHelper('infosider');

interface Props {
    location: any;
}

const sections: Section[] = [
    Section.HvemKanFå,
    Section.HvorLengeKanDuFå,
    Section.Opptjening,
    Section.HvaKanDuFå,
    Section.NårKanDuSøke,
    Section.HvisDuSkalPåFerie,
    Section.HvisDuVilJobbe,
    Section.HvisEnAvDereBlirSyke,
    Section.HjemmeSamtidig,
    Section.Adoptere,
    Section.EtterDuHarSøkt,
    Section.OfteStilteSpørsmål
];

const OmForeldrepenger: React.StatelessComponent<Props & InjectedIntlProps> = ({ location, intl }) => {
    return (
        <div className={classnames(cls.block)}>
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
                }}
            >
                <article className={cls.element('article')}>
                    <Breadcrumbs path={location.pathname} />
                    <HvemKanFåForeldrepenger id={Section.HvemKanFå} />
                    <HvorLenge id={Section.HvorLengeKanDuFå} />
                    <Opptjening id={Section.Opptjening} />
                    <Beregning id={Section.HvaKanDuFå} />
                    <NårKanDuSøke id={Section.NårKanDuSøke} />
                    <Ferie id={Section.HvisDuSkalPåFerie} />
                    <JegVilJobbe id={Section.HvisDuVilJobbe} />
                    <Sykdom id={Section.HvisEnAvDereBlirSyke} />
                    <HjemmeSamtidig id={Section.HjemmeSamtidig} />
                    <Adopsjon id={Section.Adoptere} />
                    <EtterDuHarSøkt id={Section.EtterDuHarSøkt} />
                    <OfteStilteSpørsmål id={Section.OfteStilteSpørsmål} />
                </article>
            </MedInnholdsfortegnelse>
        </div>
    );
};

export default injectIntl(OmForeldrepenger);
