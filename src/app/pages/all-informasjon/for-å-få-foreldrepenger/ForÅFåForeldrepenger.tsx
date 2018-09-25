import * as React from 'react';
import PanelMedIllustrasjon from '../panel-med-illustrasjon/PanelMedIllustrasjon';
import TypografiBase from 'nav-frontend-typografi';
import translate from '../../../utils/translate';
import BEMHelper from '../../../utils/bem';
import CustomSVG from '../../../utils/CustomSVG';

import './forÅFåForeldrepenger.less';
import StrukturertTekst from '../../../components/strukturert-tekst/StrukturertTekst';
import { Avsnitt } from '../../../utils/strukturertTekst';

const cls = BEMHelper('forÅFåForeldrepenger');
const foreldrepengerSvg = require('../../../assets/familier/familie-1.svg')
    .default;

const checkmarkIcon = require('./checkmark.svg').default;
const content = require('../../../../content/all-informasjon/for-å-få-foreldrepenger/ingress');

const kravTilForeldrepenger = [
    {
        tittel: translate('jeg_har_hatt_inntekt_6_av_10_siste_mnd'),
        ingress: require('../../../../content/all-informasjon/for-å-få-foreldrepenger/krav1')
    },
    {
        tittel: translate('jeg_har_tjent_minst'),
        ingress: require('../../../../content/all-informasjon/for-å-få-foreldrepenger/krav2')
    },
    {
        tittel: translate('jeg_bor_i_norge'),
        ingress: require('../../../../content/all-informasjon/for-å-få-foreldrepenger/krav3')
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
                <StrukturertTekst tekst={content} />
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
    ingress: Avsnitt[];
}) => {
    return (
        <div className={cls.element('krav')}>
            <CustomSVG iconRef={checkmarkIcon} size={24} />
            <div className={cls.element('kravtittel')}>
                <TypografiBase type="undertittel">{tittel}</TypografiBase>
            </div>
            <StrukturertTekst tekst={ingress} />
        </div>
    );
};

export default ForÅFåForeldrepenger;
