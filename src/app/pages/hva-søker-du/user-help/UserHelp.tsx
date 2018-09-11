import * as React from 'react';
import Lenke from 'nav-frontend-lenker';
import HjelpetekstBase from 'nav-frontend-hjelpetekst';
import TypografiBase from 'nav-frontend-typografi';
import './userHelp.less';

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
        <div className="userHelp">
            <TypografiBase type="normaltekst">
                <Lenke href={linkUrl}>{linkText}</Lenke>
            </TypografiBase>
            <HjelpetekstBase id="hjelpetekst">{helpText}</HjelpetekstBase>
        </div>
    );
};

export default UserHelp;
