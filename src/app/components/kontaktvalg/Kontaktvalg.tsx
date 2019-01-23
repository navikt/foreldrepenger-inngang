import * as React from 'react';
import { InjectedIntl, injectIntl } from 'react-intl';
import BEMHelper from 'app/utils/bem';
import CustomSVGFromSprite from 'app/utils/CustomSVG';
import externalUrls from 'app/utils/externalUrls';
import getTranslation from 'app/utils/i18nUtils';
import TypografiBase from 'nav-frontend-typografi';
import WithLink from 'app/components/with-link/WithLink';
import './kontaktvalg.less';

const cls = BEMHelper('kontaktvalg');

const facebookSvg = require('../../assets/icons/facebook.svg').default;
const chatSvg = require('../../assets/icons/chat.svg').default;
const telefonSvg = require('../../assets/icons/telefon.svg').default;

const Kontaktvalg = ({ intl }: { intl: InjectedIntl }) => (
    <div className={cls.className}>
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

export default injectIntl(Kontaktvalg);
