import * as React from 'react';
import TypografiBase from 'nav-frontend-typografi';
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs';
import BEMHelper from '../../utils/bem';
import translate from '../../utils/translate';
import PanelMedIllustrasjon from './panel-med-illustrasjon/PanelMedIllustrasjon';
import HvaErForeldrepenger from './hva-er-foreldrepenger/HvaErForeldrepenger';
import Hurtiglenker from './hurtiglenker/Hurtiglenker';
import NyeRegler from './nye-regler/NyeRegler';
import ForÅFåForeldrepenger from './for-å-få-foreldrepenger/ForÅFåForeldrepenger';
import JegHarHattInntekt from './jeg-har-hatt-inntekt/JegHarHattInntekt';

import './allInformasjon.less';

const cls = BEMHelper('allInformasjon');

interface Props {
    location: any;
}

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
                    <ForÅFåForeldrepenger id={sections[0]} />
                    <NyeRegler />
                    <HvaErForeldrepengerWrapper id={sections[1]} />
                    <JegHarHattInntekt id={sections[8]} />
                </div>
            </div>
        </div>
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
