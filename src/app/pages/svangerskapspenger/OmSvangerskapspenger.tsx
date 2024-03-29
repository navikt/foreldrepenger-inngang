import React from 'react';
import { useIntl } from 'react-intl';
import classnames from 'classnames';
import HeaderInformasjon from '../../components/header-informasjon/HeaderInformasjon';
import BEMHelper from '../../utils/bem';
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs';
import MedInnholdsfortegnelse from '../infosider/MedInnholdsfortegnelse';
import getTranslation from '../../utils/i18nUtils';
import Sidebanner from '../../components/sidebanner/Sidebanner';
import HvemKanFåSvangerskapspenger from './hvemKanFa/HvemKanFåSvangerskapspenger';
import '../infosider/infosider.less';
import SlikSokerDu from './slikSokerDu/SlikSokerDu';
import HvisDuSelvErSyk from './hvisDuSelvErSyk/HvisDuSelvErSyk';
import Hjelp from '../../components/hjelpe-seksjon/HjelpeSeksjon';
import JobbDelvis from './jobbDelvis/JobbDelvis';
import HvorLengeKanDuFa from './hvorLengeKanDuFa/HvorLengeKanDuFa';
import HvorMyeKanDuFa from './hvorMyeKanDuFa/HvorMyeKanDuFa';
import Environment from '../../Environment';
import EtterDuHarSøktSvangerskapspenger from './etter-du-har-søkt/EtterDuHarSøktSvangerskapspenger';
import { useLocation } from 'react-router-dom';

const cls = BEMHelper('infosider');

export type SvangerskapSection =
    | 'hvem-kan-fa-svangerskapspenger'
    | 'jobb-delvis'
    | 'hvor-lenge-kan-jeg-fa'
    | 'hvor-mye-kan-du-fa'
    | 'slik-soker-du'
    | 'hvis-du-selv-er-syk'
    | 'etter-du-har-søkt';

const sections: SvangerskapSection[] = [
    'hvem-kan-fa-svangerskapspenger',
    'jobb-delvis',
    'hvor-lenge-kan-jeg-fa',
    'hvor-mye-kan-du-fa',
    'slik-soker-du',
    'hvis-du-selv-er-syk',
    'etter-du-har-søkt',
];

const OmSvangerskapspenger: React.FunctionComponent = () => {
    const intl = useIntl();
    const location = useLocation();

    return (
        <div className={classnames(cls.block)}>
            <HeaderInformasjon
                title="Om Svangerskapspenger"
                description="Svangerskapspenger gis til friske gravide kvinner som ikke kan fortsette å jobbe under svangerskapet fordi det kan medføre risiko for barnet."
                siteUrl="https://familie.nav.no/om-svangerskapspenger"
            />
            <Sidebanner text={getTranslation('om_svangerskapspenger.tittel', intl)} />
            <MedInnholdsfortegnelse
                sections={sections}
                link={{
                    label: getTranslation('innholdsfortegnelse.regelverk', intl),
                    url: 'https://lovdata.no/nav/folketrygdloven/kap14',
                }}
                button={{
                    label: getTranslation('om_svangerskapspenger.sok_na', intl),
                    url: Environment.SOK_SVANGERSKAPSPENGER_URL,
                }}
            >
                <article className={cls.element('article')}>
                    <Breadcrumbs path={location.pathname} />
                    <HvemKanFåSvangerskapspenger id={sections[0]} />
                    <JobbDelvis id={sections[1]} />
                    <HvorLengeKanDuFa id={sections[2]} />
                    <HvorMyeKanDuFa id={sections[3]} />
                    <SlikSokerDu id={sections[4]} />
                    <HvisDuSelvErSyk id={sections[5]} />
                    <EtterDuHarSøktSvangerskapspenger id={sections[6]} />
                    <Hjelp />
                </article>
            </MedInnholdsfortegnelse>
        </div>
    );
};

export default OmSvangerskapspenger;
