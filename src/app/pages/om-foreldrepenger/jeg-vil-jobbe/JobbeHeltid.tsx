import React from 'react';
import { getTranslation, IntlProps, withIntl } from '../../../intl/intl';
import LesMer from '../../../components/les-mer/LesMer';
import StrukturertTekst from '../../../components/strukturert-tekst/StrukturertTekst';
import { getContent } from '../../../utils/getContent';
import BEMHelper from '../../../utils/bem';
import { JegVilJobbeHeltid } from './komponenter/JegVilJobbeHeltid';
import MediaQuery from 'react-responsive';
import { JegVilJobbeHeltidMobile } from './komponenter/JegVilJobbeHeltidMobile';
const firstPanelContent = 'om-foreldrepenger/jeg-vil-jobbe/heltidsjobb';
const secondPanelContent = 'om-foreldrepenger/jeg-vil-jobbe/deltidsjobb';
const cls = BEMHelper('jegVilJobbe');

const JobbeHeltid: React.StatelessComponent<IntlProps> = ({ lang }) => {
    return (
        <div className={cls.element('jobbeHeltid')}>
            <StrukturertTekst
                tekst={getContent('om-foreldrepenger/jeg-vil-jobbe/heltid-fane-header', lang)}
            />
            <div className={cls.element('jobbeHeltid-icon')}>
                <MediaQuery minWidth={576}>
                    <JegVilJobbeHeltid />
                </MediaQuery>
                <MediaQuery maxWidth={575}>
                    <JegVilJobbeHeltidMobile />
                </MediaQuery>
            </div>
            <div className={cls.element('firstDropdown')}>
                <LesMer intro={getTranslation('om_foreldrepenger.jobbe.heltidsjobb', lang)}>
                    <StrukturertTekst tekst={getContent(firstPanelContent, lang)} />
                </LesMer>
            </div>
            <LesMer intro={getTranslation('om_foreldrepenger.jobbe.deltidsjobb', lang)}>
                <StrukturertTekst tekst={getContent(secondPanelContent, lang)} />
            </LesMer>
        </div>
    );
};

export default withIntl(JobbeHeltid);
