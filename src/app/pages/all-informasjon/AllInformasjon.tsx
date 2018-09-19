import * as React from 'react';
import TypografiBase from 'nav-frontend-typografi';
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs';
import BEMHelper from '../../utils/bem';
import translate from '../../utils/translate';
import PanelMedIllustrasjon from './panel-med-illustrasjon/PanelMedIllustrasjon';
import HvaErForeldrepenger from './hva-er-foreldrepenger/HvaErForeldrepenger';
import SnarveiTilSøknad from './snarvei-til-søknad/SnarveiTilSøknad';
import Hurtiglenker from './hurtiglenker/Hurtiglenker';

import './allInformasjon.less';

const cls = BEMHelper('allInformasjon');

interface Props {
    location: any;
}

const foreldrepengerSvg = require('../../assets/familier/familie-3.svg')
    .default;

const pageSvg = require('../../assets/page.svg').default;

const sections = [
    'for-å-få-foreldrepenger',
    'hva-er-foreldrepenger',
    'jobbe',
    'beregning',
    'ferie',
    'hjemme-samtidig',
    'adopsjon-og-arbeidsgiver',
    'sykdom',
    'inntekt'
];

const AllInformasjon: React.StatelessComponent<Props> = ({ location }) => {
    return (
        <div className={cls.className}>
            <div className={cls.element('header')}>
                <TypografiBase type="undertittel">
                    {translate('all_informasjon_foreldrepenger')}
                </TypografiBase>
            </div>
            <div className={cls.element('body')}>
                <div className={cls.element('content')}>
                    <Breadcrumbs path={location.pathname} />
                    <Hurtiglenker links={sections} />
                    <Foreldrepengekrav id={sections[0]} />
                    <SnarveiTilSøknad />
                    <HvaErForeldrepengerWrapper id={sections[1]} />
                </div>
            </div>
        </div>
    );
};

const Foreldrepengekrav = ({ id }: { id: string }) => {
    return (
        <PanelMedIllustrasjon
            id={id}
            title={translate('for_å_få_foreldrepenger')}
            svg={foreldrepengerSvg}
            maskSvg={true}>
            <div className={cls.element('alignLeft')}>
                <TypografiBase type="ingress">
                    {translate('for_å_få_foreldrepenger_ingress')}
                </TypografiBase>
                <TypografiBase type="ingress">
                    {translate('for_å_få_foreldrepenger_ingress2')}
                </TypografiBase>
            </div>
        </PanelMedIllustrasjon>
    );
};

const HvaErForeldrepengerWrapper = ({ id }: { id: string }) => {
    return (
        <PanelMedIllustrasjon
            id={id}
            title={translate('hva_er_foreldrepenger')}
            svg={pageSvg}>
            <HvaErForeldrepenger />
        </PanelMedIllustrasjon>
    );
};

export default AllInformasjon;
