import * as React from 'react';
import PanelMedIllustrasjon from '../../../components/panel-med-illustrasjon/PanelMedIllustrasjon';
import { getTranslation, withIntl, IntlProps } from '../../../intl/intl';
import { getContent } from 'app/utils/getContent';
import FactsWithIcon from 'app/components/facts-with-icon/FactsWithIcon';
import Fact from 'app/components/facts-with-icon/Fact';
import BEMHelper from '../../../utils/bem';
import StrukturertTekst from 'app/components/strukturert-tekst/StrukturertTekst';
import './nårKanJegSøke.less';

const jobbeSvg = require('../../../assets/ark/ark-jobbe.svg').default;
const morSvg = require('../../../assets/foreldre/mor2.svg').default;
const cls = BEMHelper('nårKanJegSøke');

interface OwnProps {
    id: string;
}

type Props = OwnProps & IntlProps;

const NårKanJegSøke: React.StatelessComponent<Props> = ({ id, lang }) => (
    <PanelMedIllustrasjon
        id={id}
        className={cls.className}
        title={getTranslation('om_engangsstønad.når_kan_jeg_søke.tittel', lang)}
        svg={jobbeSvg}>
        <FactsWithIcon>
            <Fact
                icon={morSvg}
                content={getContent('om-engangsstønad/når-kan-jeg-søke/når-kan-jeg-søke', lang)}
            />
        </FactsWithIcon>
        <StrukturertTekst
            tekst={getContent('om-engangsstønad/når-kan-jeg-søke/hvordan-søker-jeg', lang)}
        />
    </PanelMedIllustrasjon>
);

export default withIntl(NårKanJegSøke);
