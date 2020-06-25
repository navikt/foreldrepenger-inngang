import React from 'react';
import { useIntl } from 'react-intl';
import PanelMedIllustrasjon from '../../../components/panel-med-illustrasjon/PanelMedIllustrasjon';
import SvgMask from '../../../components/svg-mask/SvgMask';
import BEMHelper from '../../../utils/bem';
import Innhold, { getSource } from '../../../utils/innhold/Innhold';
import getTranslation from '../../../utils/i18nUtils';
import CustomSVG from '../../../utils/CustomSVG';
import './hvemKanFåSvangerskapspenger.less';

const cls = BEMHelper('hvemkanfaSvangerskapspenger');
const seksjonsbilde = require('../../../assets/ark/ark-arbeider.svg').default;
const checkmarkIcon = require('../../../assets/icons/checkmark.svg').default;

interface Props {
    id: string;
}

const HvemKanFåSvangerskapspenger: React.StatelessComponent<Props> = ({ id }) => {
    const intl = useIntl();

    return (
        <PanelMedIllustrasjon
            id={id}
            title={getTranslation('om_svangerskapspenger.hvem_kan_fa_svangerskapspenger.tittel', intl)}
            svg={<SvgMask svg={seksjonsbilde} anchorToBottom={true} />}
        >
            <div className={cls.element('alignLeft')}>
                <Innhold source={getSource('svangerskapspenger/hvem-kan-fa-svangerskapspenger/ingress', intl)} />
            </div>
            <div className={cls.element('kravTilSvangerskapspenger')}>
                {kravTilSvangerskapspengerStringPath.map((krav) => (
                    <KravTilSvangerskapspenger key={krav} ingress={getSource(krav, intl)} />
                ))}
            </div>
        </PanelMedIllustrasjon>
    );
};

const kravTilSvangerskapspengerStringPath = [
    'svangerskapspenger/hvem-kan-fa-svangerskapspenger/krav1',
    'svangerskapspenger/hvem-kan-fa-svangerskapspenger/krav2',
    'svangerskapspenger/hvem-kan-fa-svangerskapspenger/krav3',
];

const KravTilSvangerskapspenger = ({ ingress }: { ingress: string }) => {
    return (
        <div className={cls.element('krav')}>
            <CustomSVG iconRef={checkmarkIcon} size={24} />
            <Innhold source={ingress} />
        </div>
    );
};

export default HvemKanFåSvangerskapspenger;
