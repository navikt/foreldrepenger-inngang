import * as React from 'react';
import TypografiBase from 'nav-frontend-typografi';
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs';
import BEMHelper from '../../utils/bem';
import translate from '../../utils/translate';
import PanelMedIllustrasjon from './panel-med-illustrasjon/PanelMedIllustrasjon';
import HvaErForeldrepenger from './hva-er-foreldrepenger/HvaErForeldrepenger';

import './allInformasjon.less';
import CustomSVG from '../../utils/CustomSVG';
import Veilederpanel from 'nav-frontend-veilederpanel';
import KnappBase from 'nav-frontend-knapper';
import Hurtiglenker from './hurtiglenker/Hurtiglenker';

const cls = BEMHelper('allInformasjon');

interface Props {
    location: any;
}

const foreldrepengerSvg = require('../../assets/familier/familie-3.svg')
    .default;

const pageSvg = require('../../assets/page.svg').default;

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
                    <Foreldrepengekrav />
                    <SnarveiTilSøknad />
                    <Hurtiglenker />
                    <HvaErForeldrepengerWrapper />
                </div>
            </div>
        </div>
    );
};

const Foreldrepengekrav = () => {
    return (
        <PanelMedIllustrasjon
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

const SnarveiTilSøknad = () => {
    const saraSvg = require(`../../assets/sara.svg`).default;
    const sara = <CustomSVG iconRef={saraSvg} size={64} />;

    return (
        <Veilederpanel kompakt={true} svg={sara} fargetema="normal">
            <div className={cls.element('snarveiTilSøknad')}>
                <div>{translate('snarvei_til_søknad')}</div>
                <KnappBase
                    className={cls.element('snarveiTilSøknad__knapp')}
                    type="standard">
                    {translate('søk_om_foreldrepenger')}
                </KnappBase>
            </div>
        </Veilederpanel>
    );
};

const HvaErForeldrepengerWrapper = () => {
    return (
        <PanelMedIllustrasjon
            title={translate('hva_er_foreldrepenger')}
            svg={pageSvg}>
            <HvaErForeldrepenger />
        </PanelMedIllustrasjon>
    );
};

export default AllInformasjon;
