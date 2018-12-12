import * as React from 'react';
// import Lenke from 'nav-frontend-lenker';
import HjelpetekstBase from 'nav-frontend-hjelpetekst';
import '../user-help/userHelp.less';
import BEMHelper from 'app/utils/bem';
import EngangsstonadModal from "../engangsstonad-modal/EngangsstonadModal";
import {Language} from "../../../intl/intl";

const cls = BEMHelper('userHelp');

const UserHelpEngangsstonad = ({
                      linkText,
                      linkUrl,
                      helpText,
                      lang
                  }: {
    linkText: string;
    linkUrl: string;
    helpText: string;
    lang: Language
}) => {
    return (
        <div role="link" className={cls.className}>
            <EngangsstonadModal  modalIsOpen={false} lang={lang} linktxt={linkText}/>
            <HjelpetekstBase className={cls.element('popup')} id="hjelpetekst">
                {helpText}
            </HjelpetekstBase>
        </div>
    );
};

export default UserHelpEngangsstonad;
