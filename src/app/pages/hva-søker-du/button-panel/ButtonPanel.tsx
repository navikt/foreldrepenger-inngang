import * as React from 'react';
import BEMHelper from '../../../utils/bem';
import classnames from 'classnames';
import { Hovedknapp, Knapp } from 'nav-frontend-knapper';
import UserHelp from '../user-help/UserHelp';
import WithLink from 'app/components/with-link/WithLink';
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
}

const ButtonPanel = ({ button, secondButton, helpSection }: Props) => {
    return (
        <div className={cls.className}>
            <div className={cls.element('buttons')}>
                <ButtonLinkWrapper url={button.url} external={button.external}>
                    <Hovedknapp className={classnames(cls.element('knapp'))}>
                        {button.text}
                    </Hovedknapp>
                </ButtonLinkWrapper>
                {secondButton && (
                    <ButtonLinkWrapper url={secondButton.url} external={secondButton.external}>
                        <Knapp className={classnames(cls.element('knapp'))}>
                            {secondButton.text}
                        </Knapp>
                    </ButtonLinkWrapper>
                )}
            </div>
            {helpSection && (
                <UserHelp
                    linkText={helpSection.linkText}
                    linkUrl={helpSection.linkUrl}
                    helpText={helpSection.helpText}
                />
            )}
        </div>
    );
};

interface ButtonLinkWrapperProps {
    url: string;
    external?: boolean;
    children: React.ReactChild;
}

const ButtonLinkWrapper = ({ url, external, children }: ButtonLinkWrapperProps) => (
    <WithLink urlIsExternal={external} noStyling={true} noTabbing={true} url={url}>
        {children}
    </WithLink>
);

export default ButtonPanel;
