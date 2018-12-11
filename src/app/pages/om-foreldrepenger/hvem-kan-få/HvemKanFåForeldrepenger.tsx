import * as React from 'react';
import PanelMedIllustrasjon from '../../../components/panel-med-illustrasjon/PanelMedIllustrasjon';
import { getTranslation, withIntl, IntlProps } from '../../../intl/intl';
import BEMHelper from '../../../utils/bem';
import CustomSVG from '../../../utils/CustomSVG';
import StrukturertTekst from '../../../components/strukturert-tekst/StrukturertTekst';
import { Avsnitt } from '../../../utils/strukturertTekst';
import { getContent } from '../../../utils/getContent';
import SvgMask from 'app/components/svg-mask/SvgMask';
import { detErJul } from 'app/utils/datoUtils';
import './hvemKanFåForeldrepenger.less';

const cls = BEMHelper('hvemKanFåForeldrepenger');
const foreldrepengerSvg = detErJul()
    ? require('../../../assets/familier/familie-sesong-1.svg').default
    : require('../../../assets/familier/familie-1.svg').default;

const checkmarkIcon = require('./checkmark.svg').default;

const kravTilForeldrepenger = [
    'om-foreldrepenger/hvem-kan-få/krav1',
    'om-foreldrepenger/hvem-kan-få/krav2',
    'om-foreldrepenger/hvem-kan-få/krav3'
];

interface Props {
    id: string;
}

const HvemKanFåForeldrepenger: React.StatelessComponent<Props & IntlProps> = ({ id, lang }) => {
    return (
        <PanelMedIllustrasjon
            id={id}
            title={getTranslation('om_foreldrepenger.for_å_få.tittel', lang)}
            svg={<SvgMask svg={foreldrepengerSvg} anchorToBottom={true} />}>
            <div className={cls.element('alignLeft')}>
                <StrukturertTekst
                    tekst={getContent('om-foreldrepenger/hvem-kan-få/ingress', lang)}
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

export default withIntl(HvemKanFåForeldrepenger);
