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
import Environment from '../../Environment';
import AlertStripe from 'nav-frontend-alertstriper';
import { Normaltekst, Element } from 'nav-frontend-typografi';
import Lenke from 'nav-frontend-lenker';

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
                    url: Environment.SOK_SVANGERSKAPSPENGER_URL
                }}>
                <article className={cls.element('article')}>
                    <div style={{ marginTop: '2rem' }}>
                        <AlertStripe type="info">
                            <Element>
                                Er du gravid og i arbeid, og i risikogruppen grunnet korona?
                            </Element>
                            <Normaltekst>
                                Er du gravid, tar du kontakt med lege eller jordmor (etter
                                retningslinjene for kontakt gitt av helsemyndighetene) som gjør en
                                vurdering av om smittefaren er en risiko for fosteret. Da kan du ha
                                rett på svangerskapspenger, les mer om hvordan du søker{' '}
                                <Lenke
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    href="https://familie.nav.no/om-svangerskapspenger#slik-soker-du">
                                    på våre nettsider
                                </Lenke>
                            </Normaltekst>
                        </AlertStripe>
                    </div>
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
