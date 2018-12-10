import * as React from 'react';
import PanelMedIllustrasjon from '../../../components/panel-med-illustrasjon/PanelMedIllustrasjon';
import { getTranslation, withIntl, IntlProps } from '../../../intl/intl';
import { getContent } from 'app/utils/getContent';
import FactsWithIcon from 'app/components/facts-with-icon/FactsWithIcon';
import Fact from 'app/components/facts-with-icon/Fact';
import BEMHelper from '../../../utils/bem';
import StrukturertTekst from 'app/components/strukturert-tekst/StrukturertTekst';
import { FlexibleSvg } from 'app/utils/CustomSVG';
import './nårKanDuSøke.less';
import Foreldrepar from 'app/components/foreldrepar/Foreldrepar';

const iconSvg = require('../../../assets/ark/ark-frister.svg').default;
const morSvg = require('../../../assets/foreldre/mor2.svg').default;
const adopsjonSvg = require('../../../assets/icons/adopsjon.svg').default;
const cls = BEMHelper('nårKanDuSøke');

interface OwnProps {
    id: string;
}

type Props = OwnProps & IntlProps;

const NårKanDuSøke: React.StatelessComponent<Props> = ({ id, lang }) => (
    <PanelMedIllustrasjon
        id={id}
        className={cls.className}
        title={getTranslation('om_engangsstønad.når_kan_du_søke.tittel', lang)}
        svg={iconSvg}>
        <FactsWithIcon>
            <Fact
                icon={<FlexibleSvg width={40} height={40} iconRef={morSvg} />}
                content={getContent('om-engangsstønad/når-kan-du-søke/når-kan-du-søke', lang)}
            />
            <Fact
                icon={<Foreldrepar firstParent="far4" secondParent="medmor2" />}
                content={getContent('om-engangsstønad/når-kan-du-søke/far-eller-medmor', lang)}
            />
            <Fact
                icon={<FlexibleSvg width={40} height={56} iconRef={adopsjonSvg} />}
                content={getContent('om-engangsstønad/når-kan-du-søke/adopsjon', lang)}
            />
        </FactsWithIcon>
        <StrukturertTekst
            tekst={getContent('om-engangsstønad/når-kan-du-søke/hvordan-søker-du', lang)}
        />
    </PanelMedIllustrasjon>
);

export default withIntl(NårKanDuSøke);
