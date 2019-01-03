import * as React from 'react';
import BEMHelper from 'app/utils/bem';
import EngangsstonadModal from '../engangsstonad-modal/EngangsstonadModal';
import HjelpetekstBase from 'nav-frontend-hjelpetekst';
import '../user-help/userHelp.less';

const cls = BEMHelper('userHelp');

interface Props {
    linkText: string;
    linkUrl: string;
    helpText: string;
}

const UserHelpEngangsstonad = ({ linkText, linkUrl, helpText }: Props) => {
    return (
        <div role="link" className={cls.className}>
            <EngangsstonadModal modalIsOpen={false} linktxt={linkText} />
            <HjelpetekstBase className={cls.element('popup')} id="hjelpetekst">
                {helpText}
            </HjelpetekstBase>
        </div>
    );
};

export default UserHelpEngangsstonad;
