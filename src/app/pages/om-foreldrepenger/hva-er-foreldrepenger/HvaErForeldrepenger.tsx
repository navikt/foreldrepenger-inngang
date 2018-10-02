import * as React from 'react';
import BEMHelper from '../../../utils/bem';
import FarOgMor from './FarOgMor';
import MorOgMor from './MorOgMor';
import BareFarHarRett from './BareFarHarRett';
import BareMorHarRett from './BareMorHarRett';
import Aleneomsorg from './Aleneomsorg';
import MenHvaHvis from './menHvaHvis/MenHvaHvis';
import Foreldrepar from '../../../components/foreldrepar/Foreldrepar';
import StrukturertTekst from '../../../components/strukturert-tekst/StrukturertTekst';
import Innholdsfaner from '../../../components/innholdsfaner/Innholdsfaner';
import { Innholdsfane } from '../../../components/innholdsfaner/fane/Fane';
import './hvaErForeldrepenger.less';

const content = require('../../../../content/all-informasjon/hva-er-foreldrepenger/hva-er-foreldrepenger');

const cls = BEMHelper('hvaErForeldrepenger');
const tabs: Innholdsfane[] = [
    {
        label: 'farOgMor',
        icon: <Foreldrepar firstParent="far1" secondParent="mor1" />,
        component: <FarOgMor />
    },
    {
        label: 'farOgFar',
        icon: <Foreldrepar firstParent="far4" secondParent="far2" />,
        component: null
    },
    {
        label: 'morOgMor',
        icon: <Foreldrepar firstParent="mor2" secondParent="medmor2" />,
        component: <MorOgMor />
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
        component: <BareFarHarRett />
    },
    {
        label: 'bareMorHarRett',
        icon: (
            <Foreldrepar firstParent="far2" secondParent="mor1" variant={2} />
        ),
        component: <BareMorHarRett />
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
        component: <Aleneomsorg />
    }
];

interface Props {}

const HvaErForeldrepenger: React.StatelessComponent<Props> = () => {
    return (
        <div className={cls.className}>
            <StrukturertTekst tekst={content} />
            <Innholdsfaner tabs={tabs} />
            <MenHvaHvis />
        </div>
    );
};

export default HvaErForeldrepenger;
