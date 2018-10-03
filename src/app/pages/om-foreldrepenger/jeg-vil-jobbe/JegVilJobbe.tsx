import * as React from 'react';
import PanelMedIllustrasjon from '../../../components/panel-med-illustrasjon/PanelMedIllustrasjon';
import translate from '../../../utils/translate';
import StrukturertTekst from '../../../components/strukturert-tekst/StrukturertTekst';
import BEMHelper from '../../../utils/bem';
import './jegVilJobbe.less';
import LesMer from '../../../components/les-mer/LesMer';

const content = require('../../../../content/all-informasjon/jeg-vil-jobbe/jeg-vil-jobbe.json');
const firstPanelContent = require('../../../../content/all-informasjon/jeg-vil-jobbe/heltidsjobb.json');
const secondPanelContent = require('../../../../content/all-informasjon/jeg-vil-jobbe/deltidsjobb.json');

const pageSvg = require('../../../assets/page.svg').default;
const cls = BEMHelper('jegVilJobbe');

const JegVilJobbe = ({ id }: { id: string }) => {
    return (
        <PanelMedIllustrasjon
            id={id}
            className={cls.className}
            title={translate('om_foreldrepenger.jobbe.tittel')}
            svg={pageSvg}>
            <StrukturertTekst tekst={content} />
            <LesMer intro={translate('om_foreldrepenger.jobbe.heltidsjobb')}>
                <StrukturertTekst tekst={firstPanelContent} />
            </LesMer>
            <LesMer intro={translate('om_foreldrepenger.jobbe.deltidsjobb')}>
                <StrukturertTekst tekst={secondPanelContent} />
            </LesMer>
        </PanelMedIllustrasjon>
    );
};

export default JegVilJobbe;
