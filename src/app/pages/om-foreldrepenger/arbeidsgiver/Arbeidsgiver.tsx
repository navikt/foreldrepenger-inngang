import * as React from 'react';
import PanelMedIllustrasjon from '../../../components/panel-med-illustrasjon/PanelMedIllustrasjon';
import { getTranslation, withIntl, IntlProps } from '../../../intl/intl';
import StrukturertTekst from '../../../components/strukturert-tekst/StrukturertTekst';
import BEMHelper from '../../../utils/bem';
import Lenke from './Lenke';
import { getContent } from '../../../utils/getContent';
import './arbeidsgiver.less';

const arbeidsgiverSvg = require('../../../assets/ark/ark-arbeidsgiver.svg').default;

const skjemaUrl =
    'https://www.nav.no/no/Bedrift/Skjemaer-for-arbeidsgivere/Skjemaer/Lonns-+og+personalskjemaer+for+din+bedrift/Inntekt+og+trekk';

const cls = BEMHelper('arbeidsgiver');

interface Props {
    id: string;
}

const Arbeidsgiver: React.StatelessComponent<Props & IntlProps> = ({ id, lang }) => {
    return (
        <PanelMedIllustrasjon
            className={cls.className}
            id={id}
            title={getTranslation('om_foreldrepenger.arbeidsgiver.tittel', lang)}
            svg={arbeidsgiverSvg}>
            <StrukturertTekst
                tekst={getContent('all-informasjon/arbeidsgiver/arbeidsgiver', lang)}
            />
            <div className={cls.element('links')}>
                <Lenke href={skjemaUrl} txt={'om_foreldrepenger.arbeidsgiver.link_skjema'} />
            </div>
        </PanelMedIllustrasjon>
    );
};

export default withIntl(Arbeidsgiver);
