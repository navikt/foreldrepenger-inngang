import * as React from 'react';
import KnappBase from 'nav-frontend-knapper';
import UserHelp from '../user-help/UserHelp';
import './buttonPanel.less';

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
        <div className="buttonPanel">
            <KnappBase className="buttonPanel__knapp" type="standard">
                {buttonText}
            </KnappBase>
            <UserHelp
                linkText={linkText}
                linkUrl={linkUrl}
                helpText={helpText}
            />
        </div>
    );
};

export default ButtonPanel;
