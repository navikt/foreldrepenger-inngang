import * as React from 'react';
import PanelMedIllustrasjon from '../panel-med-illustrasjon/PanelMedIllustrasjon';
import TypografiBase from 'nav-frontend-typografi';
import translate from '../../../utils/translate';
import BEMHelper from '../../../utils/bem';
import CustomSVG from '../../../utils/CustomSVG';

import './forÅFåForeldrepenger.less';

const cls = BEMHelper('forÅFåForeldrepenger');
const foreldrepengerSvg = require('../../../assets/familier/familie-1.svg')
    .default;

const checkmarkIcon = require('./checkmark.svg').default;

const kravTilForeldrepenger = [
    {
        tittel: translate('jeg_har_hatt_inntekt_6_av_10_siste_mnd'),
        ingress: translate('jeg_har_hatt_inntekt_6_av_10_siste_mnd_ingress')
    },
    {
        tittel: translate('jeg_har_tjent_minst'),
        ingress: translate('jeg_har_tjent_minst_ingress')
    },
    {
        tittel: translate('jeg_bor_i_norge'),
        ingress: translate('jeg_bor_i_norge_ingress')
    }
];

const ForÅFåForeldrepenger = ({ id }: { id: string }) => {
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
            <div className={cls.element('kravTilForeldrepenger')}>
                {kravTilForeldrepenger.map((krav) => (
                    <KravTilForeldrepenger
                        key={krav.tittel}
                        tittel={krav.tittel}
                        ingress={krav.ingress}
                    />
                ))}
            </div>
        </PanelMedIllustrasjon>
    );
};

const KravTilForeldrepenger = ({
    tittel,
    ingress
}: {
    tittel: string;
    ingress: string;
}) => {
    return (
        <div className={cls.element('krav')}>
            <CustomSVG iconRef={checkmarkIcon} size={24} />
            <div className={cls.element('kravtittel')}>
                <TypografiBase type="undertittel">{tittel}</TypografiBase>
            </div>
            <div className={cls.element('kravingress')}>
                <TypografiBase type="normaltekst">{ingress}</TypografiBase>
            </div>
        </div>
    );
};

export default ForÅFåForeldrepenger;
