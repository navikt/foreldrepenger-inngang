import * as React from 'react';
import classnames from 'classnames';
import KnappBase from 'nav-frontend-knapper';
import UserHelp from '../user-help/UserHelp';
import BEMHelper, { BEMWrapper } from '../../../utils/bem';
import './buttonPanel.less';
import { WithLink } from 'app/utils/withLink';

const cls = BEMHelper('buttonPanel');

const ButtonPanel = ({
    parentCls,
    buttonText,
    buttonUrl,
    externalLink,
    helpSection
}: {
    parentCls: BEMWrapper;
    buttonText: string;
    buttonUrl: string;
    externalLink?: boolean;
    helpSection?: {
        linkText: string;
        linkUrl: string;
        helpText: string;
    };
}) => {
    return (
        <div className={cls.className}>
            <WithLink
                urlIsExternal={externalLink}
                noStyling={true}
                noTabbing={true}
                className={cls.element('noBorder')}
                url={buttonUrl}>
                <KnappBase
                    className={classnames(cls.element('knapp'), parentCls.element('knapp'))}
                    type="hoved">
                    {buttonText}
                </KnappBase>
            </WithLink>
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

export default ButtonPanel;
