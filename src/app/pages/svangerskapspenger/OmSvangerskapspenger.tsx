import React from 'react';
import { InjectedIntlProps, injectIntl } from 'react-intl';
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

const cls = BEMHelper('infosider');

interface Props {
    location: any;
}

export type SvangerskapSection =
    | 'hvem-kan-fa-svangerskapspenger'
    | 'jobb-delvis'
    | 'hvor-lenge-kan-jeg-fa'
    | 'hvor-mye-kan-du-fa'
    | 'slik-soker-du'
    | 'hvis-du-selv-er-syk';

const sections: SvangerskapSection[] = [
    'hvem-kan-fa-svangerskapspenger',
    'jobb-delvis',
    'hvor-lenge-kan-jeg-fa',
    'hvor-mye-kan-du-fa',
    'slik-soker-du',
    'hvis-du-selv-er-syk'
];

const OmSvangerskapspenger: React.StatelessComponent<Props & InjectedIntlProps> = ({
    location,
    intl
}) => {
    return (
        <div className={classnames(cls.block)}>
            <HeaderInformasjon
                title="Om Svangerskapspenger"
                description=""
                siteUrl="https://familie.nav.no/om-svangerskapspenger"
            />
            <Sidebanner text={getTranslation('om_svangerskapspenger.tittel', intl)} />
            <MedInnholdsfortegnelse
                sections={sections}
                button={{
                    label: getTranslation('om_svangerskapspenger.sok_na', intl),
                    url: 'https://familie.nav.no/hva-soker-du/svangerskapspenger'
                }}>
                <article className={cls.element('article')}>
                    <Breadcrumbs path={location.pathname} />
                    <HvemKanFåSvangerskapspenger id={sections[0]} />
                    <JobbDelvis id={sections[1]} />
                    <HvorLengeKanDuFa id={sections[2]} />
                    <HvorMyeKanDuFa id={sections[3]} />
                    <SlikSokerDu id={sections[4]} />
                    <HvisDuSelvErSyk id={sections[5]} />
                    <Hjelp />
                </article>
            </MedInnholdsfortegnelse>
        </div>
    );
};

export default injectIntl(OmSvangerskapspenger);
