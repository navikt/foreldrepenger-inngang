import * as React from 'react';
// import Lenke from 'nav-frontend-lenker';
import HjelpetekstBase from 'nav-frontend-hjelpetekst';
import TypografiBase from 'nav-frontend-typografi';
import './userHelp.less';
import WithLink from 'app/components/with-link/WithLink';
import BEMHelper from 'app/utils/bem';

const cls = BEMHelper('userHelp');

const UserHelp = ({
    linkText,
    linkUrl,
    helpText
}: {
    linkText: string;
    linkUrl: string;
    helpText: string;
}) => {
    return (
        <div role="link" className={cls.className}>
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
