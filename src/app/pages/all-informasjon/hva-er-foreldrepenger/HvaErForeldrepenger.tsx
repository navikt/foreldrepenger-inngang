import * as React from 'react';
import TypografiBase from 'nav-frontend-typografi';
import BEMHelper from '../../../utils/bem';
import translate from '../../../utils/translate';
import FarOgMor from './FarOgMor';
import Foreldrepar from '../../../components/foreldrepar/Foreldrepar';
import MenHvaHvis from './menHvaHvis/MenHvaHvis';

import './hvaErForeldrepenger.less';
import Innholdsfaner from '../../../components/innholdsfaner/Innholdsfaner';
import { Innholdsfane } from '../../../components/innholdsfaner/fane/Fane';

const cls = BEMHelper('hvaErForeldrepenger');

const tabs: Innholdsfane[] = [
    {
        label: 'farOgMor',
        icon: <Foreldrepar firstParent="far1" secondParent="mor1" />,
        component: <FarOgMor />
    },
    {
        label: 'farOgMedfar',
        icon: <Foreldrepar firstParent="far4" secondParent="far2" />,
        component: null
    },
    {
        label: 'morOgMedmor',
        icon: <Foreldrepar firstParent="mor2" secondParent="medmor2" />,
        component: null
    },
    {
        label: 'bareFarHarRett',
        icon: (
            <Foreldrepar
                firstParent="far3"
                secondParent="medmor1"
                variant={1}
            />
        ),
        component: null
    },
    {
        label: 'bareMorHarRett',
        icon: (
            <Foreldrepar firstParent="far2" secondParent="mor1" variant={2} />
        ),
        component: null
    },
    {
        label: 'aleneomsorg',
        icon: (
            <Foreldrepar
                firstParent="far1"
                secondParent="medmor1"
                variant={3}
            />
        ),
        component: null
    }
];

interface Props {}

const HvaErForeldrepenger: React.StatelessComponent<Props> = () => {
    return (
        <div className={cls.className}>
            <TypografiBase type="ingress">
                {translate('hva_er_foreldrepenger_ingress')}
            </TypografiBase>
            <Innholdsfaner tabs={tabs} />
            <MenHvaHvis />
        </div>
    );
};

export default HvaErForeldrepenger;
