import * as React from 'react';
import PanelMedIllustrasjon from '../../../components/panel-med-illustrasjon/PanelMedIllustrasjon';
import translate from '../../../utils/translate';
import BEMHelper from '../../../utils/bem';
import CustomSVG from '../../../utils/CustomSVG';
import StrukturertTekst from '../../../components/strukturert-tekst/StrukturertTekst';
import { Avsnitt } from '../../../utils/strukturertTekst';
import './forÅFåForeldrepenger.less';

const cls = BEMHelper('forÅFåForeldrepenger');
const foreldrepengerSvg = require('../../../assets/familier/familie-1.svg').default;
const checkmarkIcon = require('./checkmark.svg').default;
const content = require('../../../../content/all-informasjon/for-å-få-foreldrepenger/ingress');

const kravTilForeldrepenger = [
    require('../../../../content/all-informasjon/for-å-få-foreldrepenger/krav1'),
    require('../../../../content/all-informasjon/for-å-få-foreldrepenger/krav2'),
    require('../../../../content/all-informasjon/for-å-få-foreldrepenger/krav3')
];

const ForÅFåForeldrepenger = ({ id }: { id: string }) => {
    return (
        <PanelMedIllustrasjon
            id={id}
            title={translate('om_foreldrepenger.for_å_få.tittel')}
            svg={foreldrepengerSvg}
            maskSvg={true}>
            <div className={cls.element('alignLeft')}>
                <StrukturertTekst tekst={content} />
            </div>
            <div className={cls.element('kravTilForeldrepenger')}>
                {kravTilForeldrepenger.map((krav) => (
                    <KravTilForeldrepenger key={krav} ingress={krav} />
                ))}
            </div>
        </PanelMedIllustrasjon>
    );
};

const KravTilForeldrepenger = ({ ingress }: { ingress: Avsnitt[] }) => {
    return (
        <div className={cls.element('krav')}>
            <CustomSVG iconRef={checkmarkIcon} size={24} />
            <StrukturertTekst tekst={ingress} />
        </div>
    );
};

export default ForÅFåForeldrepenger;
