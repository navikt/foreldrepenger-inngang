import React from 'react';
import { useIntl } from 'react-intl';
import PanelMedIllustrasjon from '../../../components/panel-med-illustrasjon/PanelMedIllustrasjon';
import getTranslation from '../../../utils/i18nUtils';
import Innhold, { getSource } from '../../../utils/innhold/Innhold';
import BEMHelper from '../../../utils/bem';

const cls = BEMHelper('omplassereEllerTilretteleggeArbeidet');
const seksjonsBilde = require('../../../assets/ark/ark-jobbe.svg').default;

interface Props {
    id: string;
}

const JobbDelvis: React.StatelessComponent<Props> = ({ id }) => {
    const intl = useIntl();

    return (
        <PanelMedIllustrasjon
            id={id}
            title={getTranslation('om_svangerskapspenger.jobbDelvis.tittel', intl)}
            svg={seksjonsBilde}
        >
            <div className={cls.element('alignLeft')}>
                <Innhold source={getSource('svangerskapspenger/jobb-delvis/informasjonstekst', intl)} />
            </div>
        </PanelMedIllustrasjon>
    );
};

export default JobbDelvis;
