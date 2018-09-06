import * as React from 'react';
import KnappBase from 'nav-frontend-knapper';
import UserHelp from '../user-help/UserHelp';
import BEMHelper from '../../../utils/bem';
import './buttonPanel.less';

const cls = BEMHelper('buttonPanel');

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
        <div className={cls.className}>
            <KnappBase className={cls.element('knapp')} type="standard">
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
