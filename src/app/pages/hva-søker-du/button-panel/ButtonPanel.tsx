import * as React from 'react';
import classnames from 'classnames';
import KnappBase from 'nav-frontend-knapper';
import UserHelp from '../user-help/UserHelp';
import BEMHelper, { BEMWrapper } from '../../../utils/bem';
import './buttonPanel.less';
import Lenke from 'nav-frontend-lenker';

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
            <Lenke href={buttonUrl}>
                <KnappBase
                    className={classnames(
                        cls.element('knapp'),
                        parentCls.element('knapp')
                    )}
                    type="hoved">
                    {buttonText}
                </KnappBase>
            </Lenke>
            <UserHelp
                linkText={linkText}
                linkUrl={linkUrl}
                helpText={helpText}
            />
        </div>
    );
};

export default ButtonPanel;
