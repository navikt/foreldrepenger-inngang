import React, { useState } from 'react';
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs';
import { IntlShape, useIntl } from 'react-intl';
import classnames from 'classnames';
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
import InfoFarOgMor from './InfoFarOgMor';
import InfoBareFarHarRett from './InfoBareFarHarRett';
import InfoBareMorHarRett from './InfoBareMorHarRett';
import InfoAleneomsorg from './InfoAleneomsorg';
import InfoMorOgMor from './InfoMorOgMor';
import InfoFarOgFar from './InfoFarOgFar';
import { RadioPanel } from 'nav-frontend-skjema';
import { Undertittel } from 'nav-frontend-typografi';
import Innhold, { getSource } from 'app/utils/innhold/Innhold';

const infoSvg = require('../../assets/hva-skjer-naar.svg').default;

interface Props {
    route: any;
    intl: IntlShape;
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
        component: <InfoFarOgMor />,
    },
    {
        label: 'bareFarHarRett',
        icon: <Foreldrepar firstParent="far3" secondParent="medmor1" variant={1} />,
        component: <InfoBareFarHarRett />,
    },
    {
        label: 'bareMorHarRett',
        icon: <Foreldrepar firstParent="far2" secondParent="mor1" variant={2} />,
        component: <InfoBareMorHarRett />,
    },
    {
        label: 'aleneomsorg',
        icon: <Foreldrepar firstParent="far1" secondParent="medmor1" variant={3} />,
        component: <InfoAleneomsorg />,
    },
    {
        label: 'morOgMor',
        icon: <Foreldrepar firstParent="mor2" secondParent="medmor2" />,
        component: <InfoMorOgMor />,
    },
    {
        label: 'farOgFar',
        icon: <Foreldrepar firstParent="far4" secondParent="far2" />,
        component: <InfoFarOgFar />,
    },
];

const cls = BEMHelper('søkForeldrepenger');
const infoCls = BEMHelper('infosider');

const SøkForeldrepenger: React.FunctionComponent<Props> = () => {
    const intl = useIntl();
    const setValgtSituasjon = useState('farOgMor')[1];
    const [valgtProsess, setValgtProsess] = useState(undefined);

    const onSituasjonSelected = (valgtSituasjon: Foreldresituasjon) => {
        setValgtSituasjon(valgtSituasjon);
    };

    const onOversiktToggle = (vp: any) => {
        setValgtProsess(vp);
    };

    return (
        <div className={classnames(cls.block, infoCls.block)}>
            <Sidebanner text={getTranslation('søk_foreldrepenger.tittel', intl)} />
            <div className={infoCls.element('container')}>
                <article className={infoCls.element('article')}>
                    <SøkForeldrepengerHeader />

                    <div role="main">
                        <Breadcrumbs path={location.pathname} />
                        <PanelMedIllustrasjon
                            id={'test'}
                            title={getTranslation('søke_om_foreldrepenger.forside.bildetekst', intl)}
                            svg={infoSvg}
                        >
                            <div className={cls.block}>
                                <Undertittel>{getTranslation('søke_om_foreldrepenger.oversikt', intl)}</Undertittel>
                                <div className={cls.element('radioWrapper')}>
                                    <RadioPanel
                                        checked={valgtProsess === 'hele'}
                                        name={'hele'}
                                        onChange={(e) => onOversiktToggle((e.target as HTMLInputElement).value)}
                                        label={getTranslation('søke_om_foreldrepenger.hele', intl)}
                                        value={'hele'}
                                    />
                                    <RadioPanel
                                        checked={valgtProsess === 'endre'}
                                        name={'endre'}
                                        onChange={(e) => onOversiktToggle((e.target as HTMLInputElement).value)}
                                        label={getTranslation('søke_om_foreldrepenger.endre', intl)}
                                        value={'endre'}
                                    />
                                </div>
                                {valgtProsess !== undefined &&
                                    (valgtProsess === 'hele' ? (
                                        <>
                                            <Undertittel>
                                                {getTranslation('søke_om_foreldrepenger.velgSituasjon', intl)}
                                            </Undertittel>
                                            <Innholdsfaner tabs={tabs} onSelect={onSituasjonSelected} />
                                        </>
                                    ) : (
                                        <>
                                            <Undertittel>
                                                {getTranslation('søke_om_foreldrepenger.søkOmEndring', intl)}
                                            </Undertittel>
                                            <Innhold source={getSource('søk-foreldrepenger/endre', intl)} />
                                        </>
                                    ))}
                            </div>
                        </PanelMedIllustrasjon>
                    </div>
                </article>
            </div>
        </div>
    );
};

export default SøkForeldrepenger;
