import * as React from 'react';
import BEMHelper from '../../../utils/bem';
import UserHelp from '../user-help/UserHelp';
import Lenkeknapp from 'app/components/lenkeknapp/Lenkeknapp';
import './buttonPanel.less';

const cls = BEMHelper('buttonPanel');

interface ButtonProp {
    text: string;
    url: string;
    external?: boolean;
}

interface Props {
    button: ButtonProp;
    secondButton?: ButtonProp;
    helpSection?: {
        linkText: string;
        linkUrl: string;
        helpText: string;
    };
    alternativHelpSection?: React.ReactNode;
}

const ButtonPanel = ({ button, secondButton, helpSection, alternativHelpSection }: Props) => {
    return (
        <div className={cls.className}>
            <div className={cls.element('buttons')}>
                <Lenkeknapp type="hoved" url={button.url} urlIsExternal={button.external}>
                    {button.text}
                </Lenkeknapp>
                {secondButton && (
                    <Lenkeknapp url={secondButton.url} urlIsExternal={secondButton.external}>
                        {secondButton.text}
                    </Lenkeknapp>
                )}
            </div>
            {helpSection && (
                <UserHelp
                    linkText={helpSection.linkText}
                    linkUrl={helpSection.linkUrl}
                    helpText={helpSection.helpText}
                />
            )}
            {alternativHelpSection}
        </div>
    );
};

export default ButtonPanel;
