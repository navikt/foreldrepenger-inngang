import * as React from 'react';
import { Avsnitt } from '../../../utils/strukturertTekst';
import { detErJul } from 'app/utils/datoUtils';
import { getContent } from '../../../utils/getContent';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import BEMHelper from '../../../utils/bem';
import CustomSVG from '../../../utils/CustomSVG';
import getTranslation from 'app/utils/i18nUtils';
import PanelMedIllustrasjon from '../../../components/panel-med-illustrasjon/PanelMedIllustrasjon';
import StrukturertTekst from '../../../components/strukturert-tekst/StrukturertTekst';
import SvgMask from 'app/components/svg-mask/SvgMask';
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

const HvemKanFåForeldrepenger: React.StatelessComponent<Props & InjectedIntlProps> = ({
    id,
    intl
}) => {
    return (
        <PanelMedIllustrasjon
            id={id}
            title={getTranslation('om_foreldrepenger.for_å_få.tittel', intl)}
            svg={<SvgMask svg={foreldrepengerSvg} anchorToBottom={true} />}>
            <div className={cls.element('alignLeft')}>
                <StrukturertTekst
                    tekst={getContent('om-foreldrepenger/hvem-kan-få/ingress', intl)}
                />
            </div>
            <div className={cls.element('kravTilForeldrepenger')}>
                {kravTilForeldrepenger.map((krav) => (
                    <KravTilForeldrepenger key={krav} ingress={getContent(krav, intl)} />
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

export default injectIntl(HvemKanFåForeldrepenger);
