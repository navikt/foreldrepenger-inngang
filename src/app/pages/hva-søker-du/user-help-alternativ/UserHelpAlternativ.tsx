import * as React from 'react';
import BEMHelper from 'app/utils/bem';

import HjelpetekstBase from 'nav-frontend-hjelpetekst';
import '../user-help/userHelp.less';
import HelpSectionModal from '../helpsection-modal/HelpSectionModal';

const cls = BEMHelper('userHelp');

interface Props {
    linkText: string;
    helpText: string;
    papirsoknadUrl: string;
    soknadUrl: string;
}

const UserHelpAlternativ = ({ linkText, helpText, papirsoknadUrl, soknadUrl }: Props) => {
    return (
        <div role="link" className={cls.block}>
            <HelpSectionModal
                modalIsOpen={false}
                linktxt={linkText}
                papirsøknadUrl={papirsoknadUrl}
                søknadUrl={soknadUrl}
            />
            <HjelpetekstBase className={cls.element('popup')} id="hjelpetekst">
                {helpText}
            </HjelpetekstBase>
        </div>
    );
};

export default UserHelpAlternativ;
