import React, { FunctionComponent } from 'react';
import { InjectedIntl, injectIntl } from 'react-intl';
import EkspanderbarSnakkeboble from 'app/components/ekspanderbar-snakkeboble/EkspanderbarSnakkeboble';

interface Props {
    intl: InjectedIntl;
}

const InfoFarOgMor: FunctionComponent<Props> = ({ intl }) => {
    const svg = require('../../components/panel-med-bilde/img/hvor-lenge.svg').default;

    return (
        <div>
            <EkspanderbarSnakkeboble
                svg={svg}
                tittel="Planlegg tiden hjemme med barnet"
                innhold="søk-foreldrepenger/planlegg"
            />
            <EkspanderbarSnakkeboble
                svg={svg}
                tittel="Planlegg tiden hjemme med barnet"
                innhold="søk-foreldrepenger/planlegg"
            />
            <EkspanderbarSnakkeboble
                svg={svg}
                tittel="Planlegg tiden hjemme med barnet"
                innhold="søk-foreldrepenger/planlegg"
            />
            <EkspanderbarSnakkeboble
                svg={svg}
                tittel="Planlegg tiden hjemme med barnet"
                innhold="søk-foreldrepenger/planlegg"
            />
        </div>
    );
};

export default injectIntl(InfoFarOgMor);
