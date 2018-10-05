import * as React from 'react';
import PanelMedIllustrasjon from '../../../components/panel-med-illustrasjon/PanelMedIllustrasjon';
import { getTranslation, withIntl, IntlProps } from '../../../intl/intl';
import StrukturertTekst from '../../../components/strukturert-tekst/StrukturertTekst';
import BEMHelper from '../../../utils/bem';
import './jegVilJobbe.less';
import LesMer from '../../../components/les-mer/LesMer';
import { getContent } from '../../../utils/getContent';

const content = 'all-informasjon/jeg-vil-jobbe/jeg-vil-jobbe';
const firstPanelContent = 'all-informasjon/jeg-vil-jobbe/heltidsjobb';
const secondPanelContent = 'all-informasjon/jeg-vil-jobbe/deltidsjobb';

const pageSvg = require('../../../assets/page.svg').default;
const cls = BEMHelper('jegVilJobbe');

interface Props {
    id: string;
}

const JegVilJobbe: React.StatelessComponent<Props & IntlProps> = ({ id, lang }) => {
    return (
        <PanelMedIllustrasjon
            id={id}
            className={cls.className}
            title={getTranslation('om_foreldrepenger.jobbe.tittel', lang)}
            svg={pageSvg}>
            <StrukturertTekst tekst={getContent(content, lang)} />
            <LesMer intro={getTranslation('om_foreldrepenger.jobbe.heltidsjobb', lang)}>
                <StrukturertTekst tekst={getContent(firstPanelContent, lang)} />
            </LesMer>
            <LesMer intro={getTranslation('om_foreldrepenger.jobbe.deltidsjobb', lang)}>
                <StrukturertTekst tekst={getContent(secondPanelContent, lang)} />
            </LesMer>
        </PanelMedIllustrasjon>
    );
};

export default withIntl(JegVilJobbe);
