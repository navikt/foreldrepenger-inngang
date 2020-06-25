import React from 'react';
import classnames from 'classnames';
import { InjectedIntlProps, injectIntl } from 'react-intl';
import MediaQuery from 'react-responsive';

import BEMHelper from '../../../utils/bem';
import Innhold, { getSource } from 'app/utils/innhold/Innhold';
import JegVilJobbeHeltid from './komponenter/JegVilJobbeHeltid';
import JegVilJobbeHeltidMobile from './komponenter/JegVilJobbeHeltidMobile';

const cls = BEMHelper('jegVilJobbe');

const JobbeHeltid: React.StatelessComponent<InjectedIntlProps> = ({ intl }) => {
    return (
        <div className={classnames(cls.element('jobbeHeltid'), 'blokk-l')}>
            <Innhold
                className="blokk-s"
                source={getSource('om-foreldrepenger/jeg-vil-jobbe/heltid-fane-header', intl)}
            />
            <div className={cls.element('jobbeHeltid-icon')}>
                <MediaQuery minWidth={576}>
                    <JegVilJobbeHeltid
                        fodsel={'om_foreldrepenger.jobbe.jobbeHeltidSvg.fodsel'}
                        forskyvning={'om_foreldrepenger.jobbe.jobbeHeltidSvg.forskyvning'}
                        jobb={'om_foreldrepenger.jobbe.jobbeHeltidSvg.jobb'}
                        sluttdato={'om_foreldrepenger.jobbe.jobbeHeltidSvg.sluttdato'}
                        uker={'om_foreldrepenger.jobbe.jobbeHeltidSvg.uker'}
                    />
                </MediaQuery>
                <MediaQuery maxWidth={575}>
                    <JegVilJobbeHeltidMobile
                        fodsel={'om_foreldrepenger.jobbe.jobbeHeltidSvg.fodsel'}
                        jobb={'om_foreldrepenger.jobbe.jobbeHeltidSvg.jobb'}
                        sluttdato={'om_foreldrepenger.jobbe.jobbeHeltidSvg.sluttdato'}
                        uker={'om_foreldrepenger.jobbe.jobbeHeltidSvg.uker'}
                    />
                </MediaQuery>
            </div>
        </div>
    );
};

export default injectIntl(JobbeHeltid);
