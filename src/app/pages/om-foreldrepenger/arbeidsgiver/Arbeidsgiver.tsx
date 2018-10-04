import * as React from 'react';
import PanelMedIllustrasjon from '../../../components/panel-med-illustrasjon/PanelMedIllustrasjon';
import translate, { Language } from '../../../intl/translate';
import StrukturertTekst from '../../../components/strukturert-tekst/StrukturertTekst';
import BEMHelper from '../../../utils/bem';
import Lenke from './Lenke';
import { getContent } from '../../../utils/getContent';
import './arbeidsgiver.less';
import { withLang } from '../../../intl/intl-context';

const pageSvg = require('../../../assets/page.svg').default;

const skjemaUrl =
    'https://www.nav.no/no/Bedrift/Skjemaer-for-arbeidsgivere/Skjemaer/Lonns-+og+personalskjemaer+for+din+bedrift/Inntekt+og+trekk';
const kontonummerUrl =
    'https://www.nav.no/no/Person/Skjemaer-for-privatpersoner/Skjemaer/Diverse/Endre+opplysninger+om+bankkontonummer';

const cls = BEMHelper('arbeidsgiver');

const Arbeidsgiver = ({ id, lang }: { id: string; lang: Language }) => {
    return (
        <PanelMedIllustrasjon
            className={cls.className}
            id={id}
            title={translate('om_foreldrepenger.arbeidsgiver.tittel')}
            svg={pageSvg}>
            <StrukturertTekst
                tekst={getContent('all-informasjon/arbeidsgiver/arbeidsgiver', lang)}
            />
            <div className={cls.element('links')}>
                <Lenke href={skjemaUrl} txt={'om_foreldrepenger.arbeidsgiver.link_skjema'} />
                <Lenke href={kontonummerUrl} txt={'om_foreldrepenger.arbeidsgiver.kontonummer'} />
            </div>
        </PanelMedIllustrasjon>
    );
};

export default withLang(Arbeidsgiver);
