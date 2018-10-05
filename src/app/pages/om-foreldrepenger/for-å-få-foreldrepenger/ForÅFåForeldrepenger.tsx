import * as React from 'react';
import PanelMedIllustrasjon from '../../../components/panel-med-illustrasjon/PanelMedIllustrasjon';
import { getTranslation, withIntl, IntlProps } from '../../../intl/intl';
import BEMHelper from '../../../utils/bem';
import CustomSVG from '../../../utils/CustomSVG';
import StrukturertTekst from '../../../components/strukturert-tekst/StrukturertTekst';
import { Avsnitt } from '../../../utils/strukturertTekst';
import './forÅFåForeldrepenger.less';
import { getContent } from '../../../utils/getContent';

const cls = BEMHelper('forÅFåForeldrepenger');
const foreldrepengerSvg = require('../../../assets/familier/familie-1.svg').default;
const checkmarkIcon = require('./checkmark.svg').default;

const kravTilForeldrepenger = [
    'all-informasjon/for-å-få-foreldrepenger/krav1',
    'all-informasjon/for-å-få-foreldrepenger/krav2',
    'all-informasjon/for-å-få-foreldrepenger/krav3'
];

interface Props {
    id: string;
}

const ForÅFåForeldrepenger: React.StatelessComponent<Props & IntlProps> = ({ id, lang }) => {
    return (
        <PanelMedIllustrasjon
            id={id}
            title={getTranslation('om_foreldrepenger.for_å_få.tittel', lang)}
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

export default withIntl(ForÅFåForeldrepenger);
