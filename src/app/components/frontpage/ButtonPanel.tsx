import * as React from 'react';
import KnappBase from 'nav-frontend-knapper';
import UserHelp from './UserHelp';

const ButtonPanel = ({
    buttonText,
    linkText,
    linkUrl,
    helpText
}: {
    buttonText: string;
    linkText: string;
    linkUrl: string;
    helpText: string;
}) => {
    return (
        <div className="bottom-container">
            <KnappBase type="standard">{buttonText}</KnappBase>
            <UserHelp
                linkText={linkText}
                linkUrl={linkUrl}
                helpText={helpText}
            />
        </div>
    );
};

export default ButtonPanel;
