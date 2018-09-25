import * as React from 'react';
import PanelMedIllustrasjon from '../panel-med-illustrasjon/PanelMedIllustrasjon';
import translate from '../../../utils/translate';
import StrukturertTekst from '../../../components/strukturert-tekst/StrukturertTekst';
import Lesmerpanel from 'nav-frontend-lesmerpanel';
import TypografiBase from 'nav-frontend-typografi';
import BEMHelper from '../../../utils/bem';
import './jegVilJobbe.less';

const content = require('../../../../content/all-informasjon/jeg-vil-jobbe/jeg-vil-jobbe.json');
const firstPanelContent = require('../../../../content/all-informasjon/jeg-vil-jobbe/heltidsjobb.json');
const secondPanelContent = require('../../../../content/all-informasjon/jeg-vil-jobbe/deltidsjobb.json');

const pageSvg = require('../../../assets/page.svg').default;
const cls = BEMHelper('jegVilJobbe');

const PanelHeader = ({ header }: { header: string }) => (
    <TypografiBase type="element">{header}</TypografiBase>
);

const JegVilJobbe = ({ id }: { id: string }) => {
    return (
        <PanelMedIllustrasjon
            id={id}
            className={cls.className}
            title={translate('jeg_vil_jobbe')}
            svg={pageSvg}>
            <StrukturertTekst tekst={content} />
            <Lesmerpanel
                intro={
                    <PanelHeader
                        header={translate('slik_går_du_frem_ved_heltidsjobb')}
                    />
                }
                border={true}>
                <StrukturertTekst tekst={firstPanelContent} />
            </Lesmerpanel>
            <Lesmerpanel
                intro={
                    <PanelHeader
                        header={translate('slik_går_du_frem_ved_deltidsjobb')}
                    />
                }
                border={true}>
                <StrukturertTekst tekst={secondPanelContent} />
            </Lesmerpanel>
        </PanelMedIllustrasjon>
    );
};

export default JegVilJobbe;
