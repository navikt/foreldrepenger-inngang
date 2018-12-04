import React from 'react';
import { getTranslation, IntlProps, withIntl } from '../../../intl/intl';
import LesMer from '../../../components/les-mer/LesMer';
import StrukturertTekst from '../../../components/strukturert-tekst/StrukturertTekst';
import { getContent } from '../../../utils/getContent';
import BEMHelper from '../../../utils/bem';
const firstPanelContent = 'all-informasjon/jeg-vil-jobbe/heltidsjobb';
const secondPanelContent = 'all-informasjon/jeg-vil-jobbe/deltidsjobb';
const cls = BEMHelper('jegVilJobbe');

const JobbeHeltid: React.StatelessComponent<IntlProps> = ({ lang }) => {
    return (
        <div className={cls.element('jobbeHeltid')}>
            <StrukturertTekst
                tekst={getContent('all-informasjon/jeg-vil-jobbe/heltid-fane-header', lang)}
            />
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
