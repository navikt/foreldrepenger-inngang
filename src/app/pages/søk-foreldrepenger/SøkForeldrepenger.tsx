import React, { useState } from 'react';
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs';
import { FormattedMessage, IntlShape, useIntl } from 'react-intl';
import classnames from 'classnames';
import Sidebanner from 'app/components/sidebanner/Sidebanner';

import HeaderInformasjon from '../../components/header-informasjon/HeaderInformasjon';
import getTranslation from 'app/utils/i18nUtils';
import { Foreldresituasjon } from 'app/utils/foreldresituasjon';
import PanelMedIllustrasjon from 'app/components/panel-med-illustrasjon/PanelMedIllustrasjon';

import Innholdsfaner from 'app/components/innholdsfaner/Innholdsfaner';

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
import InfoFarOgMorNyttLovverk from './InfoFarOgMorNyttLovverk';
import InfoBareFarHarRettNyttLovverk from './InfoBareFarHarRettNyttLovverk';
import InfoBareMorHarRettNyttLovverk from './InfoBareMorHarRettNyttLovverk';
import InfoAleneomsorgNyttLovverk from './InfoAleneomsorgNyttLovverk';
import InfoMorOgMorNyttLovverk from './InfoMorOgMorNyttLovverk';
import InfoFarOgFarNyttLovverk from './InfoFarOgFarNyttLovverk';

import './søkForeldrepenger.less';

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

const tabsGammeltLovverk: Innholdsfane[] = [
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

const tabsNyttLovverk: Innholdsfane[] = [
    {
        label: 'farOgMor',
        icon: <Foreldrepar firstParent="far1" secondParent="mor2" />,
        component: <InfoFarOgMorNyttLovverk />,
    },
    {
        label: 'bareFarHarRett',
        icon: <Foreldrepar firstParent="far3" secondParent="medmor1" variant={1} />,
        component: <InfoBareFarHarRettNyttLovverk />,
    },
    {
        label: 'bareMorHarRett',
        icon: <Foreldrepar firstParent="far2" secondParent="mor1" variant={2} />,
        component: <InfoBareMorHarRettNyttLovverk />,
    },
    {
        label: 'aleneomsorg',
        icon: <Foreldrepar firstParent="far1" secondParent="medmor1" variant={3} />,
        component: <InfoAleneomsorgNyttLovverk />,
    },
    {
        label: 'morOgMor',
        icon: <Foreldrepar firstParent="mor2" secondParent="medmor2" />,
        component: <InfoMorOgMorNyttLovverk />,
    },
    {
        label: 'farOgFar',
        icon: <Foreldrepar firstParent="far4" secondParent="far2" />,
        component: <InfoFarOgFarNyttLovverk />,
    },
];

const cls = BEMHelper('søkForeldrepenger');
const infoCls = BEMHelper('infosider');

const SøkForeldrepenger: React.FunctionComponent<Props> = () => {
    const intl = useIntl();
    const setValgtSituasjon = useState('farOgMor')[1];
    const [valgtProsess, setValgtProsess] = useState(undefined);
    const [valgtLovverk, setValgtLovverk] = useState<string | undefined>(undefined);

    const onSituasjonSelected = (valgtSituasjon: Foreldresituasjon) => {
        setValgtSituasjon(valgtSituasjon);
    };

    const onVelgLovverk = (valg: string) => {
        setValgtLovverk(valg);
    };

    const onOversiktToggle = (vp: any) => {
        setValgtProsess(vp);
    };

    enum Lovverk {
        GAMMELT_LOVVERK = 'gammeltLovverk',
        NYTT_LOVVERK = 'nyttLovverk',
    }

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
                                <Undertittel>
                                    <FormattedMessage id="søke_om_foreldrepenger.velgLovverk" />
                                </Undertittel>
                                <div className={cls.element('radioWrapper')}>
                                    <RadioPanel
                                        checked={valgtLovverk === Lovverk.NYTT_LOVVERK}
                                        name={Lovverk.NYTT_LOVVERK}
                                        onChange={(e) => onVelgLovverk((e.target as HTMLInputElement).value)}
                                        label={getTranslation('søke_om_foreldrepenger.nyttLovverk', intl)}
                                        value={Lovverk.NYTT_LOVVERK}
                                    />
                                    <RadioPanel
                                        checked={valgtLovverk === Lovverk.GAMMELT_LOVVERK}
                                        name={Lovverk.GAMMELT_LOVVERK}
                                        onChange={(e) => onVelgLovverk((e.target as HTMLInputElement).value)}
                                        label={getTranslation('søke_om_foreldrepenger.gammeltLovverk', intl)}
                                        value={Lovverk.GAMMELT_LOVVERK}
                                    />
                                </div>
                                {valgtLovverk !== undefined && (
                                    <>
                                        <Undertittel>
                                            <FormattedMessage id="søke_om_foreldrepenger.oversikt" />
                                        </Undertittel>
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
                                    </>
                                )}
                                {valgtProsess !== undefined &&
                                    (valgtProsess === 'hele' ? (
                                        <>
                                            <Undertittel>
                                                {getTranslation('søke_om_foreldrepenger.velgSituasjon', intl)}
                                            </Undertittel>
                                            {valgtLovverk === Lovverk.NYTT_LOVVERK ? (
                                                <Innholdsfaner tabs={tabsNyttLovverk} onSelect={onSituasjonSelected} />
                                            ) : (
                                                <Innholdsfaner
                                                    tabs={tabsGammeltLovverk}
                                                    onSelect={onSituasjonSelected}
                                                />
                                            )}
                                        </>
                                    ) : (
                                        <>
                                            <Undertittel>
                                                {getTranslation('søke_om_foreldrepenger.søkOmEndring', intl)}
                                            </Undertittel>
                                            {valgtLovverk === Lovverk.NYTT_LOVVERK ? (
                                                <Innhold source={getSource('søk-foreldrepenger/endre', intl)} />
                                            ) : (
                                                <Innhold source={getSource('søk-foreldrepenger/endre', intl)} />
                                            )}
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
