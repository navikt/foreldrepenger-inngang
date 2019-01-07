import React from 'react';
import { InjectedIntlProps, injectIntl } from 'react-intl';
import { JegVilJobbeHeltid } from './komponenter/JegVilJobbeHeltid';
import { JegVilJobbeHeltidMobile } from './komponenter/JegVilJobbeHeltidMobile';
import BEMHelper from '../../../utils/bem';
import classnames from 'classnames';
import Innhold, { getSource } from 'app/utils/innhold/Innhold';
import MediaQuery from 'react-responsive';

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
                    <JegVilJobbeHeltid />
                </MediaQuery>
                <MediaQuery maxWidth={575}>
                    <JegVilJobbeHeltidMobile />
                </MediaQuery>
            </div>
        </div>
    );
};

export default injectIntl(JobbeHeltid);
