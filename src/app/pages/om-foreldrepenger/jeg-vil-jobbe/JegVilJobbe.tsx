import * as React from 'react';
import PanelMedIllustrasjon from '../../../components/panel-med-illustrasjon/PanelMedIllustrasjon';
import translate, { Language } from '../../../intl/translate';
import StrukturertTekst from '../../../components/strukturert-tekst/StrukturertTekst';
import BEMHelper from '../../../utils/bem';
import './jegVilJobbe.less';
import LesMer from '../../../components/les-mer/LesMer';
import { withLang } from '../../../intl/intl-context';
import { getContent } from '../../../utils/getContent';

const content = 'all-informasjon/jeg-vil-jobbe/jeg-vil-jobbe';
const firstPanelContent = 'all-informasjon/jeg-vil-jobbe/heltidsjobb';
const secondPanelContent = 'all-informasjon/jeg-vil-jobbe/deltidsjobb';

const pageSvg = require('../../../assets/page.svg').default;
const cls = BEMHelper('jegVilJobbe');

const JegVilJobbe = ({ id, lang }: { id: string; lang: Language }) => {
    return (
        <PanelMedIllustrasjon
            id={id}
            className={cls.className}
            title={translate('om_foreldrepenger.jobbe.tittel')}
            svg={pageSvg}>
            <StrukturertTekst tekst={getContent(content, lang)} />
            <LesMer intro={translate('om_foreldrepenger.jobbe.heltidsjobb')}>
                <StrukturertTekst tekst={getContent(firstPanelContent, lang)} />
            </LesMer>
            <LesMer intro={translate('om_foreldrepenger.jobbe.deltidsjobb')}>
                <StrukturertTekst tekst={getContent(secondPanelContent, lang)} />
            </LesMer>
        </PanelMedIllustrasjon>
    );
};

export default withLang(JegVilJobbe);
