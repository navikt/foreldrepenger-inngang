import * as React from 'react';
import Lenke from 'nav-frontend-lenker';
import HjelpetekstBase from 'nav-frontend-hjelpetekst';

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
        <div className="user-help">
            <Lenke href={linkUrl}>{linkText}</Lenke>
            <HjelpetekstBase id="hjelpetekst">{helpText}</HjelpetekstBase>
        </div>
    );
};

export default UserHelp;
