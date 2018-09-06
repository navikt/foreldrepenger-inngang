import * as React from 'react';
import Lenke from 'nav-frontend-lenker';
import HjelpetekstBase from 'nav-frontend-hjelpetekst';
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
            <Lenke href={linkUrl}>{linkText}</Lenke>
            <HjelpetekstBase id="hjelpetekst">{helpText}</HjelpetekstBase>
        </div>
    );
};

export default UserHelp;
