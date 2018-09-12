import * as React from 'react';
import classnames from 'classnames';
import KnappBase from 'nav-frontend-knapper';
import UserHelp from '../user-help/UserHelp';
import BEMHelper, { BEMWrapper } from '../../../utils/bem';
import './buttonPanel.less';

const cls = BEMHelper('buttonPanel');

const ButtonPanel = ({
    parentCls,
    buttonText,
    linkText,
    linkUrl,
    helpText
}: {
    parentCls: BEMWrapper;
    buttonText: string;
    linkText: string;
    linkUrl: string;
    helpText: string;
}) => {
    return (
        <div className={cls.className}>
            <KnappBase
                className={classnames(
                    cls.element('knapp'),
                    parentCls.element('knapp')
                )}
                type="hoved">
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
