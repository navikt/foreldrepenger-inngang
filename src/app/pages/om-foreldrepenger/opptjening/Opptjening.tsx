import * as React from 'react';

import { IntlShape, useIntl } from 'react-intl';
import classnames from 'classnames';
import getTranslation from 'app/utils/i18nUtils';
import PanelMedIllustrasjon from '../../../components/panel-med-illustrasjon/PanelMedIllustrasjon';
import Innhold, { getSource } from 'app/utils/innhold/Innhold';
import BEMHelper from 'app/utils/bem';
import Tabs from 'nav-frontend-tabs';

import './opptjening.less';
import LesMer from 'app/components/les-mer/LesMer';

const foreldrepengerSvg = require('../../../assets/ark/ark-frister.svg').default;

interface Props {
    id: string;
}

const getTabs = (intl: IntlShape) => [
    {
        label: getTranslation('om_foreldrepenger.opptjening.mor', intl),
        content: getSource('om-foreldrepenger/opptjening/mor', intl),
    },
    {
        label: getTranslation('om_foreldrepenger.opptjening.farEllerMedmor', intl),
        content: getSource('om-foreldrepenger/opptjening/far-eller-medmor', intl),
    },
    {
        label: getTranslation('om_foreldrepenger.opptjening.kunFarEllerMedmorHarRett', intl),
        content: getSource('om-foreldrepenger/opptjening/bare-far-eller-medmor-rett', intl),
    },
    {
        label: getTranslation('om_foreldrepenger.opptjening.spesieltVedAdopsjon', intl),
        content: getSource('om-foreldrepenger/opptjening/spesielt-ved-adopsjon', intl),
    },
];

const cls = BEMHelper('opptjening');

const Opptjening: React.StatelessComponent<Props> = ({ id }) => {
    const [tabIndex, setTabIndex] = React.useState(0);
    const intl = useIntl();

    const onTabChange = (_: any, newTabIndex: number) => {
        setTabIndex(newTabIndex);
    };

    const tabs = getTabs(intl);

    return (
        <PanelMedIllustrasjon
            id={id}
            title={getTranslation('om_foreldrepenger.opptjening.tittel', intl)}
            className={cls.block}
            svg={foreldrepengerSvg}
        >
            <Innhold source={getSource('om-foreldrepenger/opptjening/ingress', intl)} />

            <Tabs kompakt={true} tabs={tabs} onChange={onTabChange} />
            {tabs.map((tab, index) => (
                <div
                    key={index}
                    className={classnames(
                        'blokk-m',
                        cls.element('tabContent', tabIndex !== index ? 'inactive' : undefined)
                    )}
                >
                    <Innhold source={tab.content} />
                </div>
            ))}
            <LesMer intro={getTranslation('om_foreldrepenger.opptjening.utbetalinger', intl)}>
                <Innhold source={getSource('om-foreldrepenger/opptjening/utbetalinger-nav-teller', intl)} />
            </LesMer>
            <LesMer intro={getTranslation('om_foreldrepenger.opptjening.andreInntekter', intl)}>
                <Innhold source={getSource('om-foreldrepenger/opptjening/andre-inntekter-som-gir-rett', intl)} />
            </LesMer>
        </PanelMedIllustrasjon>
    );
};

export default Opptjening;
