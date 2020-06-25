import * as React from 'react';
import BEMHelper from 'app/utils/bem';
import HjelpetekstBase from 'nav-frontend-hjelpetekst';
import TypografiBase from 'nav-frontend-typografi';
import WithLink from 'app/components/with-link/WithLink';
import './userHelp.less';

const cls = BEMHelper('userHelp');

const UserHelp = ({ linkText, linkUrl, helpText }: { linkText: string; linkUrl: string; helpText: string }) => {
    return (
        <div role="link" className={cls.block}>
            <TypografiBase className={cls.element('link')} type="normaltekst">
                <WithLink url={linkUrl} urlIsExternal={true}>
                    {linkText}
                </WithLink>
            </TypografiBase>
            <HjelpetekstBase className={cls.element('popup')} id="hjelpetekst">
                {helpText}
            </HjelpetekstBase>
        </div>
    );
};

export default UserHelp;
