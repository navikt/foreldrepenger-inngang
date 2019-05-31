import React, { Component } from 'react';
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs';
import { InjectedIntlProps, injectIntl, InjectedIntl } from 'react-intl';
import Sidebanner from 'app/components/sidebanner/Sidebanner';

import HeaderInformasjon from '../../components/header-informasjon/HeaderInformasjon';
import getTranslation from 'app/utils/i18nUtils';
import { Foreldresituasjon } from 'app/utils/foreldresituasjon';
import PanelMedIllustrasjon from 'app/components/panel-med-illustrasjon/PanelMedIllustrasjon';

import Innholdsfaner from 'app/components/innholdsfaner/Innholdsfaner';

import './søkForeldrepenger.less';
import BEMHelper from 'app/utils/bem';
import { Innholdsfane } from 'app/components/innholdsfaner/fane/Fane';
import Foreldrepar from 'app/components/foreldrepar/Foreldrepar';

const infoSvg = require('../../assets/ark/ark-info.svg').default;

interface Props {
    route: any;
    intl: InjectedIntl;
}

const SøkForeldrepengerHeader = () => {
    return (
        <HeaderInformasjon
            title="Foreldrepenger"
            description="Søk om foreldrepenger, utsettelse eller endring av foreldrepengeperioden."
            siteUrl="https://familie.nav.no/hva-soker-du/foreldrepenger"
        />
    );
};

const tabs: Innholdsfane[] = [
    {
        label: 'farOgMor',
        icon: <Foreldrepar firstParent="far1" secondParent="mor2" />,
        component: <SøkForeldrepengerHeader />
    },
    {
        label: 'bareFarHarRett',
        icon: <Foreldrepar firstParent="far3" secondParent="medmor1" variant={1} />,
        component: <SøkForeldrepengerHeader />
    },
    {
        label: 'bareMorHarRett',
        icon: <Foreldrepar firstParent="far2" secondParent="mor1" variant={2} />,
        component: <SøkForeldrepengerHeader />
    },
    {
        label: 'aleneomsorg',
        icon: <Foreldrepar firstParent="far1" secondParent="medmor1" variant={3} />,
        component: <SøkForeldrepengerHeader />
    },
    {
        label: 'morOgMor',
        icon: <Foreldrepar firstParent="mor2" secondParent="medmor2" />,
        component: <SøkForeldrepengerHeader />
    },
    {
        label: 'farOgFar',
        icon: <Foreldrepar firstParent="far4" secondParent="far2" />,
        component: <SøkForeldrepengerHeader />
    }
];

const cls = BEMHelper('søkForeldrepenger');

class SøkForeldrepenger extends Component<Props & InjectedIntlProps> {
    constructor(props: Props) {
        super(props);

        this.state = {
            valgtSituasjon: 'farOgMor'
        };
    }

    onSituasjonSelected = (valgtSituasjon: Foreldresituasjon) => {
        this.setState({
            valgtSituasjon
        });
    };

    render = () => {
        const { intl } = this.props;

        return (
            <div className={cls.block}>
                <div className={cls.element('container')}>
                    <SøkForeldrepengerHeader />
                    <Sidebanner
                        text={getTranslation('søk_foreldrepenger.tittel', this.props.intl)}
                    />
                    <div role="main">
                        <Breadcrumbs path={location.pathname} />
                        <PanelMedIllustrasjon
                            id={'test'}
                            title={getTranslation('om_foreldrepenger.hvor_lenge.tittel', intl)}
                            svg={infoSvg}>
                            <div className={cls.block}>
                                <Innholdsfaner tabs={tabs} onSelect={this.onSituasjonSelected} />
                            </div>
                        </PanelMedIllustrasjon>
                    </div>
                </div>
            </div>
        );
    };
}

export default injectIntl(SøkForeldrepenger);
