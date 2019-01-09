import * as React from 'react';

import { injectIntl, InjectedIntlProps, InjectedIntl } from 'react-intl';
import BEMHelper from 'app/utils/bem';
import CustomSVGFromSprite from 'app/utils/CustomSVG';
import externalUrls from 'app/utils/externalUrls';
import getTranslation from 'app/utils/i18nUtils';
import PanelMedIllustrasjon from '../panel-med-illustrasjon/PanelMedIllustrasjon';
import Innhold, { getSource } from 'app/utils/innhold/Innhold';
import TypografiBase from 'nav-frontend-typografi';
import WithLink from 'app/components/with-link/WithLink';
import './hjelpeSeksjon.less';

const svg = require('../../assets/ark/ark-hjelp.svg').default;
const facebookSvg = require('../../assets/icons/facebook.svg').default;
const chatSvg = require('../../assets/icons/chat.svg').default;
const telefonSvg = require('../../assets/icons/telefon.svg').default;

const content = 'om-foreldrepenger/hjelp/hjelp';
const cls = BEMHelper('hjelp');

const Ferie: React.StatelessComponent<InjectedIntlProps> = ({ intl }) => {
    return (
        <PanelMedIllustrasjon
            svg={svg}
            className={cls.className}
            title={getTranslation('om_foreldrepenger.hjelp.tittel', intl)}>
            <Innhold source={getSource(content, intl)} />
            <Kontaktvalg intl={intl} />
        </PanelMedIllustrasjon>
    );
};

const Kontaktvalg = ({ intl }: { intl: InjectedIntl }) => (
    <div className={cls.element('kontaktvalg')}>
        <Valg
            icon={facebookSvg}
            href={externalUrls.facebook}
            label={getTranslation('facebook', intl)}
        />
        <Valg icon={chatSvg} href={externalUrls.chat} label={getTranslation('chat', intl)} />
        <Valg
            icon={telefonSvg}
            href={externalUrls.telefon}
            label={getTranslation('telefon', intl)}
        />
    </div>
);

const Valg = ({ icon, label, href }: { icon: any; label: string; href: string }) => (
    <WithLink url={href} urlIsExternal={true} className={cls.element('valg')}>
        <CustomSVGFromSprite size={24} iconRef={icon} />
        <TypografiBase type="normaltekst">{label}</TypografiBase>
    </WithLink>
);

export default injectIntl(Ferie);
