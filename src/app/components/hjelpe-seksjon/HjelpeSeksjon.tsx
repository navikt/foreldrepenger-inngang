import * as React from 'react';
import PanelMedIllustrasjon from '../panel-med-illustrasjon/PanelMedIllustrasjon';
import { getTranslation, withIntl, IntlProps, Language } from '../../intl/intl';
import StrukturertTekst from '../strukturert-tekst/StrukturertTekst';
import { getContent } from '../../utils/getContent';
import './hjelpeSeksjon.less';
import BEMHelper from 'app/utils/bem';
import CustomSVGFromSprite from 'app/utils/CustomSVG';
import TypografiBase from 'nav-frontend-typografi';
import { WithLink } from 'app/utils/withLink';

const svg = require('../../assets/ark/ark-hjelp.svg').default;
const facebookSvg = require('../../assets/icons/facebook.svg').default;
const chatSvg = require('../../assets/icons/chat.svg').default;
const telefonSvg = require('../../assets/icons/telefon.svg').default;

const content = 'all-informasjon/hjelp/hjelp';
const cls = BEMHelper('hjelp');

interface Props {
    id: string;
}

const Ferie: React.StatelessComponent<Props & IntlProps> = ({ id, lang }) => {
    return (
        <PanelMedIllustrasjon
            id={id}
            svg={svg}
            className={cls.className}
            title={getTranslation('om_foreldrepenger.hjelp.tittel', lang)}>
            <StrukturertTekst tekst={getContent(content, lang)} />
            <Kontaktvalg lang={lang} />
        </PanelMedIllustrasjon>
    );
};

const Kontaktvalg = ({ lang }: { lang: Language }) => (
    <div className={cls.element('kontaktvalg')}>
        <Valg icon={facebookSvg} label={getTranslation('facebook', lang)} />
        <Valg icon={chatSvg} label={getTranslation('chat', lang)} />
        <Valg icon={telefonSvg} label={getTranslation('telefon', lang)} />
    </div>
);

const Valg = ({ icon, label }: { icon: any; label: string }) => (
    <WithLink url={''} urlIsExternal={true} className={cls.element('valg')}>
        <CustomSVGFromSprite size={24} iconRef={icon} />
        <TypografiBase type="normaltekst">{label}</TypografiBase>
    </WithLink>
);

export default withIntl(Ferie);
