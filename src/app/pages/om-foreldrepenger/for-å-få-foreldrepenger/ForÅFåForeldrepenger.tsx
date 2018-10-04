import * as React from 'react';
import PanelMedIllustrasjon from '../../../components/panel-med-illustrasjon/PanelMedIllustrasjon';
import translate, { Language } from '../../../intl/translate';
import BEMHelper from '../../../utils/bem';
import CustomSVG from '../../../utils/CustomSVG';
import StrukturertTekst from '../../../components/strukturert-tekst/StrukturertTekst';
import { Avsnitt } from '../../../utils/strukturertTekst';
import './forÅFåForeldrepenger.less';
import { getContent } from '../../../utils/getContent';
import { withLang } from '../../../intl/intl-context';

const cls = BEMHelper('forÅFåForeldrepenger');
const foreldrepengerSvg = require('../../../assets/familier/familie-1.svg').default;
const checkmarkIcon = require('./checkmark.svg').default;

const kravTilForeldrepenger = [
    'all-informasjon/for-å-få-foreldrepenger/krav1',
    'all-informasjon/for-å-få-foreldrepenger/krav2',
    'all-informasjon/for-å-få-foreldrepenger/krav3'
];

const ForÅFåForeldrepenger = ({ id, lang }: { id: string; lang: Language }) => {
    return (
        <PanelMedIllustrasjon
            id={id}
            title={translate('om_foreldrepenger.for_å_få.tittel')}
            svg={foreldrepengerSvg}
            maskSvg={true}>
            <div className={cls.element('alignLeft')}>
                <StrukturertTekst
                    tekst={getContent('all-informasjon/for-å-få-foreldrepenger/ingress', lang)}
                />
            </div>
            <div className={cls.element('kravTilForeldrepenger')}>
                {kravTilForeldrepenger.map((krav) => (
                    <KravTilForeldrepenger key={krav} ingress={getContent(krav, lang)} />
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

export default withLang(ForÅFåForeldrepenger);
