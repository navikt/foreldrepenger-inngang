import React from 'react';
import { InjectedIntl, injectIntl } from 'react-intl';
import Lenke from 'nav-frontend-lenker';
import getTranslation from '../../../../../utils/i18nUtils';
import BEMHelper from '../../../../../utils/bem';
import KnappBase from 'nav-frontend-knapper';

const resultat = BEMHelper('resultat');

const MainKnapp = ({ intl, url, txt, knappType }: { intl: InjectedIntl; url: string; txt: string; knappType: any }) => (
    <div className={resultat.element('harRettKnapp')}>
        <Lenke href={url} tabIndex={-1}>
            <KnappBase type={knappType}>{getTranslation(txt, intl)}</KnappBase>
        </Lenke>
    </div>
);

export default injectIntl(MainKnapp);
