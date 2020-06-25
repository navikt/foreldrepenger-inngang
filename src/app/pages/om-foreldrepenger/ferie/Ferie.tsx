import * as React from 'react';
import { useIntl } from 'react-intl';
import BEMHelper from '../../../utils/bem';
import Ferieforskyvning from './Ferieforskyvning';
import FerieforskyvningMobil from './FerieforskyvningMobil';
import getTranslation from 'app/utils/i18nUtils';
import Innhold, { getSource } from 'app/utils/innhold/Innhold';
import MediaQuery from 'react-responsive';
import PanelMedIllustrasjon from '../../../components/panel-med-illustrasjon/PanelMedIllustrasjon';
import TypografiBase from 'nav-frontend-typografi';
import './ferie.less';

const cls = BEMHelper('ferie');

const ferieSvg = require('../../../assets/ark/ark-ferie.svg').default;
const content = 'om-foreldrepenger/ferie/ferie';
const underIllustrasjonContent = 'om-foreldrepenger/ferie/utsette';

interface Props {
    id: string;
}

const Ferie: React.StatelessComponent<Props> = ({ id }) => {
    const intl = useIntl();

    return (
        <PanelMedIllustrasjon id={id} svg={ferieSvg} title={getTranslation('om_foreldrepenger.ferie.tittel', intl)}>
            <Innhold source={getSource(content, intl)} />
            <div className={cls.element('eksempel')}>
                <TypografiBase type="normaltekst">
                    {getTranslation('om_foreldrepenger.ferie.eksempel_label', intl)}
                </TypografiBase>
                <MediaQuery minWidth={576}>
                    <Ferieforskyvning />
                </MediaQuery>
                <MediaQuery maxWidth={575}>
                    <FerieforskyvningMobil />
                </MediaQuery>
            </div>
            <Innhold source={getSource(underIllustrasjonContent, intl)} />
        </PanelMedIllustrasjon>
    );
};

export default Ferie;
