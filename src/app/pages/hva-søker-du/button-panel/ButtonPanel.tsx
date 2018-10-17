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
    linkText,
    linkUrl,
    helpText
}: {
    parentCls: BEMWrapper;
    buttonText: string;
    buttonUrl: string;
    linkText: string;
    linkUrl: string;
    helpText: string;
}) => {
    return (
        <div className={cls.className}>
            <WithLink
                urlIsExternal={true}
                noStyling={true}
                className={cls.element('noBorder')}
                url={buttonUrl}>
                <KnappBase
                    className={classnames(cls.element('knapp'), parentCls.element('knapp'))}
                    type="hoved">
                    {buttonText}
                </KnappBase>
            </WithLink>
            <UserHelp linkText={linkText} linkUrl={linkUrl} helpText={helpText} />
        </div>
    );
};

export default ButtonPanel;
