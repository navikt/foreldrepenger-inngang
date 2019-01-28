import React from 'react';
import { InjectedIntlProps, injectIntl } from 'react-intl';
import classnames from 'classnames';
import HeaderInformasjon from '../../components/header-informasjon/HeaderInformasjon';
import Environment from '../../Environment';
import BEMHelper from '../../utils/bem';
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs';
import MedInnholdsfortegnelse from "../infosider/MedInnholdsfortegnelse";
import getTranslation from "../../utils/i18nUtils";
import Sidebanner from "../../components/sidebanner/Sidebanner";
import HvemKanFåSvangerskapspenger from "./innhold/HvemKanFåSvangerskapspenger";

const cls = BEMHelper('om-svangerskapspenger');

interface Props {
    location: any;
}

export type SvangerskapSection =
    | 'hvem-kan-fa-svangerskapspenger'
    | 'omplassere-eller-tilrettelegge-arbeidet'
    | 'hva-kan-jeg-fa'
    | 'slik-soker-du'
    | 'hvis-du-selv-er-syk'
    | 'fant-du-ikke-det-du-lette-etter';


const sections: SvangerskapSection[] = [
    'hvem-kan-fa-svangerskapspenger',
    'omplassere-eller-tilrettelegge-arbeidet',
    'hva-kan-jeg-fa',
    'slik-soker-du',
    'hvis-du-selv-er-syk',
    'fant-du-ikke-det-du-lette-etter'
];

const OmSvangerskapspenger: React.StatelessComponent<Props & InjectedIntlProps> = ({
    location,
    intl
}) => {
    return (
        <div className={classnames(cls.className)}>
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
                    url: Environment.SOK_FORELDREPENGER_URL
                }}>
                <article className={cls.element('article')}>
                    <Breadcrumbs path={location.pathname} />
                    <HvemKanFåSvangerskapspenger id={sections[0]}/>
                </article>
            </MedInnholdsfortegnelse>
        </div>
    );
};

export default injectIntl(OmSvangerskapspenger);
