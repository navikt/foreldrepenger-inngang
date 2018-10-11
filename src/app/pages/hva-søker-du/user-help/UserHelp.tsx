import * as React from 'react';
// import Lenke from 'nav-frontend-lenker';
import HjelpetekstBase from 'nav-frontend-hjelpetekst';
import TypografiBase from 'nav-frontend-typografi';
import './userHelp.less';
import { WithLink } from 'app/utils/withLink';

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
        <div role="link" className="userHelp">
            <TypografiBase type="normaltekst">
                <WithLink url={linkUrl} urlIsExternal={true}>
                    {linkText}
                </WithLink>
            </TypografiBase>
            <HjelpetekstBase id="hjelpetekst">{helpText}</HjelpetekstBase>
        </div>
    );
};

export default UserHelp;
