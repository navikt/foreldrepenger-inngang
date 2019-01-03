import * as React from 'react';
import { FlexibleSvg } from 'app/utils/CustomSVG';
import { getContent } from 'app/utils/getContent';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import BEMHelper from '../../../utils/bem';
import Fact from 'app/components/facts-with-icon/Fact';
import FactsWithIcon from 'app/components/facts-with-icon/FactsWithIcon';
import Foreldrepar from 'app/components/foreldrepar/Foreldrepar';
import getTranslation from 'app/utils/i18nUtils';
import PanelMedIllustrasjon from '../../../components/panel-med-illustrasjon/PanelMedIllustrasjon';
import StrukturertTekst from 'app/components/strukturert-tekst/StrukturertTekst';
import './nårKanDuSøke.less';

const iconSvg = require('../../../assets/ark/ark-frister.svg').default;
const morSvg = require('../../../assets/foreldre/mor2.svg').default;
const adopsjonSvg = require('../../../assets/icons/stork.svg').default;
const cls = BEMHelper('nårKanDuSøke');

interface OwnProps {
    id: string;
}

type Props = OwnProps & InjectedIntlProps;

const NårKanDuSøke: React.StatelessComponent<Props> = ({ id, intl }) => (
    <PanelMedIllustrasjon
        id={id}
        className={cls.className}
        title={getTranslation('om_engangsstønad.når_kan_du_søke.tittel', intl)}
        svg={iconSvg}>
        <FactsWithIcon>
            <Fact
                icon={<FlexibleSvg width={40} height={40} iconRef={morSvg} />}
                content={getContent('om-engangsstønad/når-kan-du-søke/når-kan-du-søke', intl)}
            />
            <Fact
                icon={<Foreldrepar firstParent="far4" secondParent="medmor2" />}
                content={getContent('om-engangsstønad/når-kan-du-søke/far-eller-medmor', intl)}
            />
            <Fact
                icon={<FlexibleSvg width={40} height={56} iconRef={adopsjonSvg} />}
                content={getContent('om-engangsstønad/når-kan-du-søke/adopsjon', intl)}
            />
        </FactsWithIcon>
        <StrukturertTekst
            tekst={getContent('om-engangsstønad/når-kan-du-søke/hvordan-søker-du', intl)}
        />
    </PanelMedIllustrasjon>
);

export default injectIntl(NårKanDuSøke);
